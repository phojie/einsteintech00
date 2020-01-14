<template>
  <q-layout view="lHr LpR fff">
    <q-header
      elevated=""
      class="bg-white text-blue-grey-8"
    >
      <pageToolbar
        @drawerHide="drawerActivityList = !drawerActivityList"
        @notification="drawerNotification = true"
        :drawerActivityList="drawerActivityList"
        :drawerNotification="drawerNotification"
      >
        Registrar's Office
      </pageToolbar>
    </q-header>

    <drawerActivityList
      :contentStyle="contentStyle"
      :contentActiveStyle="contentActiveStyle"
      :thumbStyle="thumbStyle"
      :drawerActivityList.sync="drawerActivityList"
    />

    <drawerNotification
      @drawerFalse="drawerNotification = false"
      :drawerNotification.sync="drawerNotification"
    />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import filter from 'lodash/filter.js'
// var filter = require('lodash/filter.js')

export default {
  components: {
    'drawerNotification': require('components/admin/drawer/drawerNotification.vue').default,
    'drawerActivityList': require('components/admin/drawer/drawerActivityList.vue').default,
    'pageToolbar': require('components/shared/toolbars/pageToolbar.vue').default
  },
  data () {
    return {
      drawerActivityList: true,
      drawerNotification: false
    }
  },
  computed: {
    contentStyle () {
      return {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      }
    },

    contentActiveStyle () {
      return {
        backgroundColor: '#eee',
        color: 'black'
      }
    },

    thumbStyle () {
      return {
        right: '-1px',
        borderRadius: '5px',
        backgroundColor: '#6b829d',
        width: '5px',
        opacity: 0.75
      }
    }
  },
  created () {
    var test = [
      { 'num': 'test' },
      { 'num': 'test2' },
      { 'num': 'test3' }
    ]

    console.log(filter(test, ['num', 'test']))
  }
}
</script>

<style lang="stylus">
// .jieHidden .q-drawer__content {
//   overflow: hidden;
// }
</style>
