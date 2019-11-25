<template>
  <q-page class="q-pa-md-xl q-pa-none-xs">

    <q-input
      autofocus=""
      input-class=" text-transparent text-h3 text-bold text-center"
      v-model="testtester"
      @keyup="idnumbertypetest"
      mask="#### - ####"
      color="blue"
      style="width:40px;"
      class=" text-weight-bold dense"
      ref="dummytester"
    />
    <div
      v-if="!showStudInfo"
      class="absolute-center text-center text-bold text-h2 q-mb-lg"
    >

      <div class="text-center">
        <div
          @click="onDecode"
          class="text-bold text-h1 "
          style="font-size:150px;font-family: 'Marko One', serif;"
        >
          Login
          <span>😍</span>
          <!-- <q-separator inset></q-separator> -->
          <q-chip
            square
            class="text-h3 text-bold q-pa-xl q-mt-xl"
            color="transparent"
          >
            <span>
              <q-icon
                color="red-10"
                size="70px"
                class="q-mr-sm"
                name="alarm"
              />
            </span>
            {{now.date + ' ' + now.time}}
          </q-chip>
        </div>

      </div>

    </div>

    <div
      v-if="showStudInfo"
      @click="onDecode()"
      class="text-center text-bold text-h2 q-mb-lg"
      style="font-family: 'Marko One', serif;"
    >
      Library Statistics
      <span>📈</span>
      <q-separator
        inset
        spaced=""
      ></q-separator>
    </div>

    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated zoomOut"
    >
      <q-card
        v-if="showStudInfo"
        bordered
        class="col-9 q-pa-lg q-mt-xl row shadow-1"
      >
        <div class="full-width row wrap justify-center items-center content-center">
          <div class="col-md-6 col-sm-12 row justify-center items-center content-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="65"
              size="320px"
              :thickness="0.25"
              color="transparent"
              track-color="transparent"
            >
              <q-avatar
                class="shadow-3"
                size="300px"
              >
                <img :src="studentInformationForm.profileImgUrl">
              </q-avatar>
            </q-circular-progress>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="text-h4 text-bold">
              Welcome
            </div>
            <div class="text-h3 text-bold text-capitalize">
              {{studentInformationForm.firstname + ' ' + studentInformationForm.surname}}
            </div>
            <q-separator
              inset
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-primary">
              {{studentInformationForm.idnumber}}
            </div>
            <div class="text-h5 text-bold">{{studentInformationForm.course}}</div>

          </div>
        </div>
      </q-card>
    </transition>

    <qrcodereader
      @onInit="onInit"
      @onDecode="onDecode"
      :result.sync="result"
      style="width:0px"
      :error.sync="error"
    />

    <q-dialog v-model="dialogIdtyper">
      <q-card
        style="width:500px"
        class="q-pa-lg"
      >
        <q-toolbar>
          <q-avatar square>
            <img src="https://img.icons8.com/ios-filled/50/000000/security-pass.png">
          </q-avatar>

          <q-toolbar-title class="text-h6">Enter your <span class="text-weight-bold ">ID NUMBER</span> </q-toolbar-title>

        </q-toolbar>

        <q-card-section>
          <q-input
            autofocus=""
            input-class="text-h3 text-bold text-center"
            standout="bg-primary text-white"
            v-model="test"
            mask="201# - ####"
            class="text-weight-bold "
            @input="idnumbertype($event)"
            @keyup.enter="enterIdnumber"
          />

        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- <img src="https://firebasestorage.googleapis.com/v0/b/einstein00-cf6cc.appspot.com/o/images%2F2ynRormG3d7cNXJKZoV3?alt=media&token=f48ac41b-c87d-48dd-9f25-9dd1226d2a56"> -->

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import find from 'lodash/find'
import replace from 'lodash/replace'
import { date } from 'quasar'
import Vue from 'vue'
// import moment from 'moment'

export default {
  components: {
    'qrcodereader': require('components/qrcodeReader/qrcodereader1.vue').default
    // 'libraryQrLoginCarousel': require('components/carousel/libraryQrcodelogin.vue').default
  },
  data () {
    return {
      dialogIdtyper: false,
      slide: 1,
      test: '',
      testtester: '',
      showstream: true,
      now: {
        time: '',
        date: '',
        local: ''
      },
      result: '',
      error: '',
      value: 50,
      dialog1: true,
      showStudInfo: false,
      studentInformationForm: {
        firstname: '',
        middlename: '',
        surname: '',
        idnumber: '',
        keyIndex: '',
        course: '',
        profileImgUrl: '',
        fullname: ''
      }
    }
  },
  computed: {
    ...mapGetters('admin', ['studentLists2'])
    // dialogIdtyper () {
    //   let dialog = Boolean
    //   // let vm = this
    //   if (this.test !== '') {
    //     // vm.testtester = vm.test
    //     dialog = true
    //     // if (dialog === false) {
    //     //   console.log(this.$refs.dummytester.focus())
    //     // }
    //   } else {
    //     dialog = false
    //   }
    //   return dialog
    // }
  },
  methods: {
    ...mapActions('admin', ['addLibraryStat']),
    enterIdnumber () {
      let vm = this
      this.onDecode(this.testtester)
      this.testtester = null
      // console.log(this.$refs.dummytester.focus)
      this.dialogIdtyper = false
      Vue.nextTick(() => {
        vm.$refs.dummytester.focus()
      })
    },
    idnumbertype (event) {
      console.log(event)
      let vm = this
      if (this.test === '') {
        this.testtester = null
        // console.log(this.$refs.dummytester.focus)
        this.dialogIdtyper = false
        Vue.nextTick(() => {
          vm.$refs.dummytester.focus()
        })
        // this.$refs.dummytester.$el.focus()
      } else {
        this.testtester = this.test
      }
    },
    idnumbertypetest () {
      console.log(this.$refs)
      this.test = this.testtester
      if (this.test !== '') {
        this.dialogIdtyper = true
      }
      // console.log(this.testtester, this.test)
    },
    showNotif (data) {
      var take0 = data[0]
      this.$q.notify({
        color: take0.color,
        textColor: 'white',
        multiline: true,
        timeout: 1500,
        html: true,
        message: take0.message,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
      })
    },
    addStat (data) {
      let vm = this
      let createdInfo = {
        idnumber: this.studentInformationForm.keyIndex,
        time: this.now
      }
      this.addLibraryStat(createdInfo).then(function (result) {
        var options = []
        options.push({
          message: `Successfully Login, <br> <span class="text-capitalize">Have a nice day ${data.firstname}! </span> `,
          color: 'light-green-8'
        })

        setTimeout(function () {
          vm.showStudInfo = false
          vm.studentInformationForm = {
            firstname: '',
            middlename: '',
            surname: '',
            idnumber: '',
            keyIndex: '',
            course: '',
            profileImgUrl: ''
          }
        }, 5000)

        vm.showNotif(options)
      }, function (error) {
        console.log(error)
      })
    },
    DecodeSuccess (data) {
      this.showStudInfo = true
      this.studentInformationForm = {
        firstname: data.firstname,
        middlename: data.middlename,
        surname: data.surname,
        idnumber: data.idnumber,
        keyIndex: data.keyIndex,
        course: data.course,
        profileImgUrl: data.profileImgUrl
      }

      this.addStat(data)
    },
    DecodeError () {
      console.log('error')
      // var audioerror = new Audio('/statics/ringtone/suspense-message-2.mp3')
      // audioerror.play()
      this.$q.notify({
        message: ` Login Error, <br> <span class="text-bold">Id number not yet registered! </span> `,
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        html: true,
        multiLine: true,
        timeout: 5000,
        position: 'top',
        color: 'red-10'
      })
    },
    onDecode (result) {
      // result = 'PHOJIEMONEX - 2019 - 0310'
      this.showStudInfo = false

      this.result = result
      var idNUmber = replace(this.result, 'PHOJIEMONEX - ', '')
      var indexData = find(this.studentLists2, ['idnumber', idNUmber])
      // alert(idNUmber, indexData)
      if (indexData !== undefined) {
        // alert(idNUmber)
        // console.log(indexData)
        // var sound = '/statics/ringtone/notification.mp3'
        var audio = new Audio('/statics/ringtone/notification.mp3')
        audio.play()
        this.DecodeSuccess(indexData)
      } else {
        this.DecodeError()
      }
      // console.log(indexData)
      // console.log(this.studentLists2)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permisson'
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device'
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)'
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?'
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser'
        }
      } finally {
        // hide loading
      }
    }
  },
  created () {
    let vm = this
    setInterval(function () {
      let timeStamp = new Date()
      let local = timeStamp.setHours(timeStamp.getHours() - 1)
      // .SSSZ
      let formattedTime = date.formatDate(local, 'hh:mm:ssa')
      let formattedDate = date.formatDate(local, 'MMMM Do YYYY')
      vm.now.time = formattedTime
      vm.now.date = formattedDate
      vm.now.local = local
      // let date1 = new Date(1570222200202)
      // let date2 = date.formatDate(date1, 'hh:mm:ssa')
      // console.log(date2)
    }, 1000)
  }
}
</script>

<style lang="stylus">
.bgPh {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://cdn-images-1.medium.com/max/800/1*hTwl4OGQJtoR3yOSYXCmmg.gif');
}
</style>
