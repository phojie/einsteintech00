<template>
  <q-page class="q-pa-md-md">
    <dashStatistics>Library Statistics</dashStatistics>
  </q-page>
</template>

<script>
export default {
  components: {
    'dashStatistics': require('components/libraryCompo/statisticsCompo/dash.vue').default
  }
}
</script>
