<template>
  <div class="q-pa-md">
    <q-toolbar class="shadow-2 rounded-borders q-px-none">
      <q-btn round flat icon="library_books" label="BOOK BORROWERS SY: 2019-2020" class="text-caption text-white bg-primary text-weight-bolder" />
      <q-space />
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab"  inline-label no-caps="" dense>
        <q-tab name="tab1" class="text-blue-10" label="College Students" />
        <q-tab name="tab3" class="text-green-10"  label="High School Students" />
        <q-tab name="tab2" class="text-deep-purple-10" label="Personnel" />
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
