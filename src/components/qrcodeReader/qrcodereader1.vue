<template>
  <div>
    <!-- <p class="error">{{ error }} Success</p> -->
    <!-- <p>Last result: <b>{{ result }}</b></p> -->
    <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->
    <qrcode-stream
      v-on:decode="$emit('onDecode', $event)"
      v-on:init="$emit('onInit', $event)"
    />
  </div>
</template>

<script>

export default {
  props: ['result', 'error'],
  data () {
    return {
    }
  },

  methods: {

  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
