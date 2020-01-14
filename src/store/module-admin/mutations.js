import Vue from 'vue'
import { date } from 'quasar'

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

export function commitStatisticsBarLive (state, payload) {
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

  let formattedString = date.formatDate(data.local, 'MM')
  if (data.course === 'Secondary education' || data.course === 'Elementary education') {
    if (formattedString === '01') {
      state.series[0].data[0] += 1
    } else if (formattedString === '02') {
      state.series[0].data[1] += 1
    } else if (formattedString === '03') {
      state.series[0].data[2] += 1
    } else if (formattedString === '04') {
      state.series[0].data[3] += 1
    } else if (formattedString === '05') {
      state.series[0].data[4] += 1
    } else if (formattedString === '06') {
      state.series[0].data[5] += 1
    } else if (formattedString === '07') {
      state.series[0].data[6] += 1
    } else if (formattedString === '08') {
      state.series[0].data[7] += 1
    } else if (formattedString === '09') {
      state.series[0].data[8] += 1
    } else if (formattedString === '10') {
      state.series[0].data[9] += 1
    } else if (formattedString === '11') {
      state.series[0].data[10] += 1
    } else if (formattedString === '12') {
      state.series[0].data[11] += 1
    }
  } else if (data.course === 'Computer science') {
    if (formattedString === '01') {
      state.series[1].data[0] += 1
    } else if (formattedString === '02') {
      state.series[1].data[1] += 1
    } else if (formattedString === '03') {
      state.series[1].data[2] += 1
    } else if (formattedString === '04') {
      state.series[1].data[3] += 1
    } else if (formattedString === '05') {
      state.series[1].data[4] += 1
    } else if (formattedString === '06') {
      state.series[1].data[5] += 1
    } else if (formattedString === '07') {
      state.series[1].data[6] += 1
    } else if (formattedString === '08') {
      state.series[1].data[7] += 1
    } else if (formattedString === '09') {
      state.series[1].data[8] += 1
    } else if (formattedString === '10') {
      state.series[1].data[9] += 1
    } else if (formattedString === '11') {
      state.series[1].data[10] += 1
    } else if (formattedString === '12') {
      state.series[1].data[11] += 1
    }
  } else if (data.course === 'Business administration') {
    if (formattedString === '01') {
      state.series[2].data[0] += 1
    } else if (formattedString === '02') {
      state.series[2].data[1] += 1
    } else if (formattedString === '03') {
      state.series[2].data[2] += 1
    } else if (formattedString === '04') {
      state.series[2].data[3] += 1
    } else if (formattedString === '05') {
      state.series[2].data[4] += 1
    } else if (formattedString === '06') {
      state.series[2].data[5] += 1
    } else if (formattedString === '07') {
      state.series[2].data[6] += 1
    } else if (formattedString === '08') {
      state.series[2].data[7] += 1
    } else if (formattedString === '09') {
      state.series[2].data[8] += 1
    } else if (formattedString === '10') {
      state.series[2].data[9] += 1
    } else if (formattedString === '11') {
      state.series[2].data[10] += 1
    } else if (formattedString === '12') {
      state.series[2].data[11] += 1
    }
  } else if (data.course === 'Criminology') {
    if (formattedString === '01') {
      state.series[3].data[0] += 1
    } else if (formattedString === '02') {
      state.series[3].data[1] += 1
    } else if (formattedString === '03') {
      state.series[3].data[2] += 1
    } else if (formattedString === '04') {
      state.series[3].data[3] += 1
    } else if (formattedString === '05') {
      state.series[3].data[4] += 1
    } else if (formattedString === '06') {
      state.series[3].data[5] += 1
    } else if (formattedString === '07') {
      state.series[3].data[6] += 1
    } else if (formattedString === '08') {
      state.series[3].data[7] += 1
    } else if (formattedString === '09') {
      state.series[3].data[8] += 1
    } else if (formattedString === '10') {
      state.series[3].data[9] += 1
    } else if (formattedString === '11') {
      state.series[3].data[10] += 1
    } else if (formattedString === '12') {
      state.series[3].data[11] += 1
    }
  }
  state.chartOptions = {
    ...state.chartOptions,
    ...{
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  }
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
    fullname: myData.fullname,
    numberVisit: 1
  }
  Vue.set(state.libraryStat, data.createdIndex, data)
}

export function commitDeleteLibraryStat (state, payload) {
  console.log(payload)
  // var deleteId = find(state.libraryStat, ['keyData.keyIndex', payload])
  // console.log(deleteId.__index, 'delete id')
  Vue.delete(state.libraryStat, payload)
}

export function voteResult (state, payload) {
  if (payload === '1') {
    state.votesResult.entry1 += 1
    console.log(state.votesResult.entry1)
  } else if (payload === '2') {
    state.votesResult.entry2 += 1
    console.log(state.votesResult.entry2)
  } else if (payload === '3') {
    state.votesResult.entry3 += 1
    console.log(state.votesResult.entry3)
  }
}

export function commitGetPersonnelLists (state, payload) {
  Vue.set(state.personnelLists, payload.id, payload.information)
}

export function commitDeletePersonnelLists (state, payload) {
  Vue.delete(state.personnelLists, payload.keyIndex)
}
