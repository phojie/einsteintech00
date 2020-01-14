import filter from 'lodash/filter.js'
import findIndex from 'lodash/findIndex.js'
import forEach from 'lodash/forEach.js'
import max from 'lodash/max.js'

function libraryVisitor (state) {
  var allStudents = []
  var allNumberVisit = []
  forEach(state.libraryStat, function (val, key) {
    let myIndex = findIndex(allStudents, ['idnumber', val.idnumber])
    if (myIndex !== -1) {
      var data = {
        createdIndex: val.keyIndex,
        date: val.date,
        local: val.local,
        time: val.time,
        course: val.course,
        firstname: val.firstname,
        idnumber: val.idnumber,
        keyIndex: val.keyIndex,
        middlename: val.middlename,
        profileImgUrl: val.profileImgUrl,
        surname: val.surname,
        fullname: val.fullname,
        numberVisit: allStudents[myIndex].numberVisit + 1
      }
      allStudents[myIndex] = data
      allNumberVisit[myIndex] = data.numberVisit
    } else {
      allStudents.push(val)
    }
  })

  let numberWin = max(allNumberVisit)
  let filterNumberWin = filter(allStudents, ['numberVisit', numberWin])
  // return test
  // return Math.max.apply(Math, allStudents.map(function (o) { return o.numberVisit }))
  return filterNumberWin
}

function studentLists (state) {
  var data = filter(state.studentLists, 'keyIndex')
  return data
}

function personnelLists (state) {
  var data = filter(state.personnelLists, 'keyIndex')
  return data
}

function studentLists2 (state) {
  return state.studentLists
}

function loading (state) {
  return state.loading
}

function loadingProgress (state) {
  return state.loadingProgress
}
function libraryStat (state) {
  var data = filter(state.libraryStat, 'createdIndex')
  return data
}

function series (state) {
  return state.series
}

export { libraryVisitor, series, libraryStat, studentLists, loading, loadingProgress, studentLists2, personnelLists }
