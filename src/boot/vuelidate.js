import Vuelidate from 'vuelidate'
import VueApexCharts from 'vue-apexcharts'
import ECharts from 'vue-echarts'
// import { Bar, Line } from 'vue-chartjs'
export default ({ Vue }) => {
  Vue.use(Vuelidate)
  Vue.use(VueApexCharts)
  Vue.use(ECharts)
}
