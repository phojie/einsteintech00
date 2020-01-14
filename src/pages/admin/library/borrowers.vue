<template>
  <div class="q-pa-md">
    <q-toolbar class="shadow-2 rounded-borders">
      <q-btn flat icon="library_books" label="BOOK BORROWERS SY: 2019-2020" class="text-caption text-white bg-primary text-weight-bolder" />
      <q-space />
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab"  inline-label no-caps="" dense>
        <q-tab name="tab1" class="text-blue-10" label="Education" />
        <q-tab name="tab2" class="text-deep-purple-10" label="Criminology" />
        <q-tab name="tab3" class="text-green-10"  label="Computer Science" />
        <q-tab name="tab4" class="text-amber-10"  label="Business Administration" />
        <q-separator vertical/>
        <q-tab name="tab5" class="text-amber-10"  label="None Teaching" />
        <q-tab name="tab6" class="text-amber-10"  label="None Teaching" />
        <q-tab name="tab7" class="text-amber-10"  label="None Teaching" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'tab1'
    }
  }
}
</script>
