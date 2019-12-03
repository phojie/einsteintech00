<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page class="fit para column justify-center items-center content-center">
        <q-card
          style="height:200px;width:600px"
          class="bg-transparent"
        >
          <q-toolbar class="bg-pink text-white">
            <q-toolbar-title>BOOK FACE POLL VOTE</q-toolbar-title>
          </q-toolbar>
          <q-card-section>
            <div class="row wrap">
              <div class="col-4">
                <q-option-group
                  v-model="group"
                  :options="options"
                  color="red"
                  keep-color
                  :class="`bg-${options.color}`"
                  class="text-pink bg-white text-h3 text-weight-bolder"
                  left-label
                />
              </div>
              <div class="col-8 bg-white column justify-center items-center content-center">
                <q-input
                  outlined
                  v-model="idnumber"
                  label="ID number"
                />
                <q-btn
                  class="glossy q-mt-md"
                  color="primary"
                  label="SUBMIT VOTE"
                  icon="where_to_vote"
                  @click="submit"
                />
              </div>
            </div>

          </q-card-section>

        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      idnumber: '',
      group: '',
      options: [
        {
          label: 'ENTRY #1',
          value: '1',
          color: 'green'
        },
        {
          label: 'ENTRY #2',
          value: '2',
          color: 'purple'
        },
        {
          label: 'ENTRY #3',
          value: '3',
          color: 'blue'
        }
      ]
    }
  },
  methods: {
    ...mapMutations('admin', ['voteResult']),
    submit () {
      if (this.group === '' || this.idnumber === '') {
        this.$q.notify({
          message: 'ALL field is required',
          color: 'negative'
        })
      } else {
        this.voteResult(this.group)
        this.$q.notify({
          message: 'Successfully Voted',
          color: 'positive'
        })
        this.idnumber = ''
        this.group = ''
      }
    }

  }
}
</script>

<style>
.para {
  background-image: url("/statics/GOD/entry.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
