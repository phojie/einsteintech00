import { fireStorage, fireDB } from 'boot/firebase'
import Vue from 'vue'
import capitalize from 'lodash/capitalize'
// import lowerFirst from 'lodash/lowerFirst'

export function getStudentLists (context) {
  return new Promise((resolve, reject) => {
    fireDB
      .collection('studentLists')
      .onSnapshot({ includeMetadataChanges: true }, function (snapshot) {
        resolve()
        snapshot.docChanges().forEach(
          function (change) {
            if (change.type === 'added' || change.type === 'modified') {
              // console.log(change.doc.data())
              const data = {
                id: change.doc.data().keyIndex,
                information: change.doc.data()
              }

              const fullname = `${
                change.doc.data().firstname
              } ${change.doc.data().middlename.charAt(0)}. ${
                change.doc.data().surname
              }`
              var source = snapshot.metadata.fromCache
                ? 'local cache'
                : 'server'
              console.log('Data came from ' + source)

              Vue.set(data.information, 'fullname', fullname)
              context.commit('commitGetStudentLists', data)
            }
            if (change.type === 'modified') {
            }
            if (change.type === 'removed') {
              // console.log('Removed city: ', change.doc.data())
              context.commit('commitDeleteStudentLists', change.doc.data())
            }
          },
          function (error) {
            // The Promise was rejected.
            reject()
            console.error(error)
          }
        )
      })
  })
}

export function addStudentLists (context, payload) {
  let docRef = fireDB.collection('studentLists').doc()
  const myid = docRef.id
  var defaultUrl = '/assets/default_profile_400x400.png'
  var addStudent = new Promise(function (resolve, reject) {
    if (payload.profileImgUrl !== '') {
      var uploadTask = fireStorage
        .ref()
        .child('images/' + myid)
        .putString(payload.profileImgUrl, 'data_url')
      uploadTask.on(
        'state_changed',
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // console.log('Upload is ' + progress + '% done')
          if (progress === 100) {
            context.commit('commitLoading', false)
          } else {
            context.commit('commitLoading', true)
          }
          context.commit('commitLoadingProgress', payload)

          resolve()
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log(error)
          reject()
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            docRef.set({
              firstname: capitalize(payload.firstname),
              middlename: capitalize(payload.middlename),
              surname: capitalize(payload.surname),
              idnumber: capitalize(payload.idnumber),
              LRNnumber: capitalize(payload.LRNnumber),
              keyIndex: myid,
              profileImgUrl: downloadURL,
              course: capitalize(payload.course)
            })
            resolve()
          })
        }
      )
    } else {
      docRef.set({
        firstname: capitalize(payload.firstname),
        middlename: capitalize(payload.middlename),
        surname: capitalize(payload.surname),
        idnumber: capitalize(payload.idnumber),
        keyIndex: myid,
        profileImgUrl: defaultUrl,
        course: capitalize(payload.course)
      })
      resolve()
    }
  })

  var promiseProgress = new Promise(function (resolve, reject) {
    // enter logic here
  })

  return Promise.race([addStudent, promiseProgress])
}

export function deleteStudentLists (context, payload) {
  var deleteImg = new Promise((resolve, reject) => {
    var imgRef = fireStorage.ref().child('images/' + payload.keyIndex)
    imgRef
      .delete()
      .then(function () {
        resolve(payload)
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        reject(error)
      })
  })
  var deleteList = new Promise((resolve, reject) => {
    fireDB
      .collection('studentLists')
      .doc(payload.keyIndex)
      .delete()
      .then(function () {
        resolve(payload)
      })
      .catch(function (error) {
        reject(error)
      })
  })

  return Promise.all([deleteImg, deleteList])
}

export function updateStudentLists (context, payload) {
  return new Promise(function (resolve, reject) {
    var progressBoolean = Boolean
    let docRef = fireDB
      .collection('studentLists')
      .doc(payload.studentInfo.keyIndex)
    if (payload.uploaded) {
      var reupload = fireStorage
        .ref()
        .child('images/' + payload.studentInfo.keyIndex)
        .putString(payload.studentInfo.profileImgUrl, 'data_url')
      reupload.on(
        'state_changed',
        function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // console.log('Upload is ' + progress + '% done')
          if (progress === 100) {
            progressBoolean = false
            // context.commit('commitLoading', false)
          } else {
            progressBoolean = true
            context.commit('commitLoading', true)
          }
          context.commit('commitLoadingProgress', payload.studentInfo)
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log(error)
          reject()
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          reupload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            var dataUpdated = {
              firstname: capitalize(payload.studentInfo.firstname),
              middlename: capitalize(payload.studentInfo.middlename),
              surname: capitalize(payload.studentInfo.surname),
              idnumber: capitalize(payload.studentInfo.idnumber),
              profileImgUrl: downloadURL,
              course: capitalize(payload.studentInfo.course),
              keyIndex: payload.studentInfo.keyIndex
            }
            docRef.update(dataUpdated).then(function () {
              resolve(dataUpdated)
              context.commit('commitLoading', progressBoolean)
            })
          })
        }
      )
    } else {
      docRef.update({
        firstname: capitalize(payload.studentInfo.firstname),
        middlename: capitalize(payload.studentInfo.middlename),
        surname: capitalize(payload.studentInfo.surname),
        idnumber: capitalize(payload.studentInfo.idnumber),
        profileImgUrl: payload.studentInfo.profileImgUrl,
        course: capitalize(payload.studentInfo.course)
      })
      resolve(payload.studentInfo)
    }
  })
}

export function addLibraryStat (context, payload) {
  console.log(payload)
  return new Promise((resolve, reject) => {
    console.log('testya')
    let docRef = fireDB
      .collection('Library/uyM3J8XUI1aI4dDm0reC/Statisticshay')
      .doc()
    // let docRef = LibraryDB.collection('Statistics').doc('test').doc()
    let myId = docRef.id
    docRef.set(
      {
        idnumber: payload.idnumber,
        keyIndex: myId,
        created: payload.time
      },
      function (error) {
        reject(error)
      }
    )
    resolve()
  })
}

export function getLibraryStat (context, payload) {
  return new Promise(function (resolve, reject) {
    // fireDB.collection('studentLists').onSnapshot({ includeMetadataChanges: true }, function (snapshot) {
    fireDB
      .collection('Library/uyM3J8XUI1aI4dDm0reC/Statisticshay')
      .onSnapshot({ includeMetadataChanges: true }, function (snapshot) {
        snapshot.docChanges().forEach(
          function (change) {
            if (change.type === 'added') {
              // console.log(change.doc.data())
              const data = {
                id: change.doc.data().keyIndex,
                information: change.doc.data()
              }
              // console.log('test')
              context.commit('commitGetLibraryStat', data)
              resolve()
            }
            if (change.type === 'modified') {
              console.log('modified console')
            }
            if (change.type === 'removed') {
              context.commit(
                'commitDeleteLibraryStat',
                change.doc.data().keyIndex
              )
              resolve()
              // console.log('Removed city: ', change.doc.data())
              // context.commit('commitDeleteStudentLists', change.doc.data())
            }
          },
          function (error) {
            // The Promise was rejected.
            reject()
            console.error(error)
          }
        )
      })
  })
}

export function deleteStatistics (context, payload) {
  console.log(payload)
  return new Promise((resolve, reject) => {
    fireDB
      .collection('Library/uyM3J8XUI1aI4dDm0reC/Statisticshay')
      .doc(payload.createdIndex)
      .delete()
      .then(function () {
        resolve(payload)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export function addPersonnelLists (context, payload) {
  console.log(payload)
  let docRef = fireDB
    .collection('Registrar/Personnel/Lists')
    .doc()
  const myid = docRef.id
  var defaultUrl = '/assets/default_profile_400x400.png'
  var addStudent = new Promise(function (resolve, reject) {
    if (payload.profileImgUrl !== '') {
      var uploadTask = fireStorage
        .ref()
        .child('1.PersonnelListsImages/' + myid + 'file/' + myid)
        .putString(payload.profileImgUrl, 'data_url')
      uploadTask.on(
        'state_changed',
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // console.log('Upload is ' + progress + '% done')
          if (progress === 100) {
            context.commit('commitLoading', false)
          } else {
            context.commit('commitLoading', true)
          }
          context.commit('commitLoadingProgress', payload)

          resolve()
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log(error)
          reject()
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            docRef.set({
              firstname: capitalize(payload.firstname),
              middlename: capitalize(payload.middlename),
              surname: capitalize(payload.surname),
              idnumber: capitalize(payload.idnumber),
              prefix: capitalize(payload.prefix),
              suffix: capitalize(payload.suffix),
              position: capitalize(payload.position),
              keyIndex: myid,
              profileImgUrl: downloadURL,
              department: capitalize(payload.course)
            })
            resolve()
          })
        }
      )
    } else {
      docRef.set({
        firstname: capitalize(payload.firstname),
        middlename: capitalize(payload.middlename),
        surname: capitalize(payload.surname),
        idnumber: capitalize(payload.idnumber),
        prefix: capitalize(payload.prefix),
        position: capitalize(payload.position),
        suffix: capitalize(payload.suffix),
        keyIndex: myid,
        profileImgUrl: defaultUrl,
        department: capitalize(payload.course)
      })
      resolve()
    }
  })

  var promiseProgress = new Promise(function (resolve, reject) {
    // enter logic here
  })

  return Promise.race([addStudent, promiseProgress])
}

export function getPersonnelLists (context) {
  return new Promise((resolve, reject) => {
    fireDB
      .collection('Registrar/Personnel/Lists')
      .onSnapshot({ includeMetadataChanges: true }, function (snapshot) {
        resolve()
        snapshot.docChanges().forEach(
          function (change) {
            if (change.type === 'added' || change.type === 'modified') {
              // console.log(change.doc.data())
              const data = {
                id: change.doc.data().keyIndex,
                information: change.doc.data()
              }

              const fullname = `${
                change.doc.data().firstname
              } ${change.doc.data().middlename.charAt(0)}. ${
                change.doc.data().surname
              }`
              var source = snapshot.metadata.fromCache
                ? 'local cache'
                : 'server'
              console.log('Data came from ' + source)

              Vue.set(data.information, 'fullname', fullname)
              context.commit('commitGetPersonnelLists', data)
            }
            if (change.type === 'modified') {
            }
            if (change.type === 'removed') {
              // console.log('Removed city: ', change.doc.data())
              context.commit('commitDeletePersonnelLists', change.doc.data())
            }
          },
          function (error) {
            // The Promise was rejected.
            reject()
            console.error(error)
          }
        )
      })
  })
}

export function deletePersonnelLists (context, payload) {
  var deleteImg = new Promise((resolve, reject) => {
    var imgRef = fireStorage.ref().child('1.PersonnelListsImages/' + payload.keyIndex + 'file/' + payload.keyIndex)
    imgRef
      .delete()
      .then(function () {
        resolve(payload)
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        reject(error)
      })
  })
  var deleteList = new Promise((resolve, reject) => {
    fireDB
      .collection('Registrar/Personnel/Lists')
      .doc(payload.keyIndex)
      .delete()
      .then(function () {
        resolve(payload)
      })
      .catch(function (error) {
        reject(error)
      })
  })

  return Promise.all([deleteImg, deleteList])
}

export function updatePersonnelLists (context, payload) {
  // course === department
  return new Promise(function (resolve, reject) {
    var progressBoolean = Boolean
    let docRef = fireDB
      .collection('Registrar/Personnel/Lists')
      .doc(payload.studentInfo.keyIndex)
    if (payload.uploaded) {
      var reupload = fireStorage
        .ref()
        .child('1.PersonnelListsImages/' + payload.studentInfo.keyIndex + 'file/' + payload.studentInfo.keyIndex)
        .putString(payload.studentInfo.profileImgUrl, 'data_url')
      reupload.on(
        'state_changed',
        function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // console.log('Upload is ' + progress + '% done')
          if (progress === 100) {
            progressBoolean = false
            // context.commit('commitLoading', false)
          } else {
            progressBoolean = true
            context.commit('commitLoading', true)
          }
          context.commit('commitLoadingProgress', payload.studentInfo)
        },
        function (error) {
          // Handle unsuccessful uploads
          console.log(error)
          reject()
        },
        function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          reupload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            var dataUpdated = {
              firstname: capitalize(payload.studentInfo.firstname),
              middlename: capitalize(payload.studentInfo.middlename),
              surname: capitalize(payload.studentInfo.surname),
              prefix: capitalize(payload.studentInfo.prefix),
              suffix: capitalize(payload.studentInfo.suffix),
              position: capitalize(payload.studentInfo.position),
              department: capitalize(payload.studentInfo.course),
              idnumber: capitalize(payload.studentInfo.idnumber),
              profileImgUrl: downloadURL,
              course: capitalize(payload.studentInfo.course),
              keyIndex: payload.studentInfo.keyIndex
            }
            docRef.update(dataUpdated).then(function () {
              resolve(dataUpdated)
              context.commit('commitLoading', progressBoolean)
            })
          })
        }
      )
    } else {
      docRef.update({
        firstname: capitalize(payload.studentInfo.firstname),
        middlename: capitalize(payload.studentInfo.middlename),
        surname: capitalize(payload.studentInfo.surname),
        idnumber: capitalize(payload.studentInfo.idnumber),
        prefix: capitalize(payload.studentInfo.prefix),
        suffix: capitalize(payload.studentInfo.suffix),
        position: capitalize(payload.studentInfo.position),
        department: capitalize(payload.studentInfo.course),
        profileImgUrl: payload.studentInfo.profileImgUrl,
        course: capitalize(payload.studentInfo.course)
      })
      resolve(payload.studentInfo)
    }
  })
}
