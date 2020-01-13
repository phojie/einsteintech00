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
    let vm = this
    this.dataReloader()
    this.$q.loading.show()
    this.getStudentLists().then(function (result) {
      vm.$q.loading.hide()
      vm.getLibraryStat()
    })
  }

}
</script>

<style>
</style>
