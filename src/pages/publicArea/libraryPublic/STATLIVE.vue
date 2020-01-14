  <template>
  <q-layout>
    <q-page class="flex-center ">
      <div class="row wrap">
        <div class="col-md-8 q-pr-md col-xs-12">
          <dashStatistics>Statistics</dashStatistics>
        </div>
        <div class="col-md-4 col-xs-12">
          <libraryAwardee>Library Awardees</libraryAwardee>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  components: {
    'dashStatistics': require('components/libraryCompo/statisticsCompo/dash.vue').default,
    'libraryAwardee': require('components/libraryCompo/statisticsCompo/libraryAwardee.vue').default
  }
}
</script>
