export default {
  libraryVisitor: {},
  studentLists: {},
  personnelLists: {},
  loading: false,
  loadingProgress: 0,
  libraryStat: {},
  votesResult: {
    entry1: 0,
    entry2: 0,
    entry3: 0
  },
  series: [{
    name: 'Education',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 196, 0]
  }, {
    name: 'Computer Science',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 70, 0]
  }, {
    name: 'Business Administration',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 160, 0]
  },
  {
    name: 'Criminology',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 140, 180, 0]

  }],
  chartOptions: {
    chart: {
      type: 'bar',
      height: 350
    },
    colors: ['#2196f3', '#4caf50', '#ffc107', '#673ab7'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '90%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      width: 20,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      title: {
        text: '# (Visitors)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Visitors'
          // return '$ ' + val + ' thousands'
        }
      }
    }
  }

}
