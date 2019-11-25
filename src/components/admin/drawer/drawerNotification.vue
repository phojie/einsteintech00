<template>
  <q-drawer
    :value="drawerNotification"
    side="right"
    behavior="mobile"
    overlay
    :width="400"
    elevated
    @hide="$emit('drawerFalse', $event)"
  >
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title class="text-subtitle2 text-bold">
        Notifications
      </q-toolbar-title>
      <q-btn
        @click="$emit('drawerFalse', $event)"
        icon="close"
        flat
        size="12px"
        dense
      />

    </q-toolbar>
  </q-drawer>
</template>

<script>
export default {
  props: ['drawerNotification']
}
</script>
