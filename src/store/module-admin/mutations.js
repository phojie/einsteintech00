import Vue from 'vue'
// import { fireDB } from 'boot/firebase'
// import forEach from 'lodash/forEach'
// import find from 'lodash/find'
export function commitGetStudentLists (state, payload) {
  Vue.set(state.studentLists, payload.id, payload.information)
}

export function commitDeleteStudentLists (state, payload) {
  Vue.delete(state.studentLists, payload.keyIndex)
}

export function commitLoading (state, payload) {
  state.loading = payload
}

export function commitLoadingProgress (state, payload) {
  state.loadingProgress = payload
}

export function commitGetLibraryStat (state, payload) {
  var myData = state.studentLists[payload.information.idnumber]
  var data = {
    createdIndex: payload.information.keyIndex,
    date: payload.information.created.date,
    local: payload.information.created.local,
    time: payload.information.created.time,
    course: myData.course,
    firstname: myData.firstname,
    idnumber: myData.idnumber,
    keyIndex: myData.keyIndex,
    middlename: myData.middlename,
    profileImgUrl: myData.profileImgUrl,
    surname: myData.surname,
    fullname: myData.fullname
  }

  Vue.set(state.libraryStat, data.createdIndex, data)
}

export function commitDeleteLibraryStat (state, payload) {
  console.log(payload)
  // var deleteId = find(state.libraryStat, ['keyData.keyIndex', payload])
  // console.log(deleteId.__index, 'delete id')
  Vue.delete(state.libraryStat, payload)
}
