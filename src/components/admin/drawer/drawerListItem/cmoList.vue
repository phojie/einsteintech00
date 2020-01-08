<template>
  <q-list :class="showExpand ? 'bg-secondaryTrans' : ''">

    <q-expansion-item
      v-model="showExpand"
      expand-separator
    >
      <q-item-section
        slot="header"
        class="on-right q-py-xs"
      >
        <q-item-label
          style="letter-spacing:1px;"
          class="text-subtitle2"
        >Campus Ministry Office</q-item-label>

        <q-item-label
          class="text-blueGreyfire ellipsis "
          caption
        >
          <span
            v-for="(list, index) in cmoList"
            :key="index"
          >
            {{list.title}}
            <span v-if="index+1 < cmoList.length">,</span>
          </span>

        </q-item-label>
      </q-item-section>

      <q-list
        class="q-pb-md"
        dense
      >
        <q-item
          active-class="text-blue-5"
          clickable
          v-for="(list, index) in cmoList"
          :key="index"
          :to='list.nameRoute'
        >
          <q-item-section avatar>
            <q-icon
              size="22px"
              class="on-right"
              :name="list.avatar"
            />
          </q-item-section>
          <q-item-section class="text-subtitle2"> {{ list.title }} </q-item-section>
        </q-item>
      </q-list>

    </q-expansion-item>

  </q-list>
</template>

<script>
export default {
  props: ['cmoList'],
  data () {
    return {
      showExpand: true
    }
  },
  created () {
    var route = this.$route.path
    if (route === '/registrarStudents') {
      this.showExpand = true
    }
  }
}
</script>
