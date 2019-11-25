<template>
  <q-toolbar>
    <q-btn
      dense
      flat
      round
      icon="menu"
      @click="$emit('drawerHide', $event)"
      class="lt-md"
    />

    <q-toolbar-title class="text-h6">
      <slot>
      </slot>
    </q-toolbar-title>
    <q-btn
      round
      flat
      size="md"
      @click="$emit('notification', $event)"
    >
      <q-badge
        class="q-mt-sm"
        color="red"
        floating
      >4</q-badge>

      <q-icon name="notifications"></q-icon>
      <q-tooltip
        transition-show="scale"
        transition-hide="scale"
        content-style="background-color:#000000ab"
        :offset="[8,8]"
      >
        <strong>Notifications</strong>
      </q-tooltip>
    </q-btn>

    <q-btn
      round
      flat
      size="md"
      color="deep-purple-10"
    >
      <q-avatar
        class="text-bold"
        size="md"
        color="deep-purple-7"
        text-color="white"
      >
        <img src="https://cdn.quasar.dev/img/avatar4.jpg">
      </q-avatar>

      <q-menu
        transition-show="jump-down"
        transition-hide="flip-up"
      >
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle
              value="false"
              label="Use Mobile Data"
            />
            <q-toggle
              value="true"
              label="Bluetooth"
            />
          </div>

          <q-separator
            vertical
            inset
            class="q-mx-lg"
          />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">Phojie Rengel</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>

  </q-toolbar>
</template>

<script>
export default {
  data () {
    return {
      drawerActivityList: true,
      drawerNotification: false
    }
  }
}
</script>
