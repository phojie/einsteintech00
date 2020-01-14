<template>
  <div class="">
    <q-card
      flat
      class="text-blue-grey-9 row wrap"
    >
      <q-card-section>
        <div class="text-h4 text-bold"><slot></slot></div>
      </q-card-section>
      <q-card-section class="col-12">
        <apexchart
          v-if="libraryStat.length!==0"
          type="bar"
          height="350"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// import { date } from 'quasar'
// import forEach from 'lodash/forEach'
export default {
  computed: {
    ...mapGetters('admin', ['libraryStat', 'studentLists2', 'series']),
    ...mapState('admin', ['chartOptions'])
  },
  methods: {
  },
  mounted () {
  }

}
</script>
