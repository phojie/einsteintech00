<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('admin', ['getStudentLists', 'getLibraryStat', 'getPersonnelLists']),
    ...mapMutations('admin', ['commitLoading']),
    dataReloader () {
      let vm = this
      this.commitLoading(true)
      this.getPersonnelLists().then(function (result) {
        vm.commitLoading(false)
      }, function (err) {
        console.log(err)
      })
    }
  },
  created () {
    this.getStudentLists()
    this.dataReloader()
    this.getLibraryStat()
  }

}
</script>

<style>
</style>
