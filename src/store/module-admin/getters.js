import filter from 'lodash/filter.js'
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

export { libraryStat, studentLists, loading, loadingProgress, studentLists2, personnelLists }
