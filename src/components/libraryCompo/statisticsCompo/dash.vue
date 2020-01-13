<template>
  <div class="">
    <q-card
      style="overflow:auto"
      class="text-blue-grey-9 row wrap q-pa-md"
    >
      <q-card-section>
        <div class="text-h4 text-bold">Statistics</div>
      </q-card-section>
      <q-card-section class="col-12">
        <apexchart
          class=""
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </q-card-section>
    </q-card>
    <pre>
      <!-- {{libraryStat}} -->
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { date } from 'quasar'
import forEach from 'lodash/forEach'
export default {
  data: function () {
    return {
      number: 0,
      series: [{
        name: 'Education',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        name: 'Computer Science',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 89, 89, 7]
      }, {
        name: 'Business Administration',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 89, 89, 7]
      },
      {
        name: 'Criminology',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 89, 89, 7]
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
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
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
  },
  computed: {
    ...mapGetters('admin', ['libraryStat', 'studentLists2'])
  },
  methods: {
    getStat () {
      let vm = this
      forEach(this.libraryStat, function (val, key) {
        let formattedString = date.formatDate(val.local, 'MM')
        // console.log(formattedString)
        if (val.course === 'Secondary education' || val.course === 'Elementary education') {
          if (formattedString === '01') {
            vm.series[0].data[0] += 1
          }
          vm.loadingData = true
        }
      })
    }
  },
  created () {
    this.getStat()
    // let formattedTime = date.formatDate(local.local, 'month')
    // console.log(formattedString)
    // console.log(local.local, 'test')
  }
}
</script>
