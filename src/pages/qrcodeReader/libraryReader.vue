<template>
  <q-page>
    <qrcodereader
      @onInit="onInit"
      @onDecode="onDecode"
      :result.sync="result"
      style="width:0px"
      :error.sync="error"
    />

    <!-- test -->
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated zoomOut"
    >

      <q-card
        v-if="showStudInfo"
        flat
        class="q-pa-lg row shadow-1 schoolBG "
      >
        <div class="full-width row wrap justify-center items-center content-center">
          <div class="col-md-4 col-sm-12 row justify-center items-center content-center">

            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="100"
              size="350px"
              :thickness="0.25"
              :color="getColor(studentInformationForm.course)"
              track-color="transparent"
            >

              <q-avatar size="320px">
                <img :src="studentInformationForm.profileImgUrl">
              </q-avatar>
            </q-circular-progress>

          </div>
          <div
            v-if="studentInformationForm.idnumber === '2019 - 0111'"
            class="col-md-auto col-sm-12"
          >
            <div class="text-h4 text-bold text-orange-8">
              Welcome TIM, FROM YOUR ADMIRER 😍😘
            </div>
            <div class="text-h2 text-weight-bolder text-capitalize text-blue-grey-10 ">
              {{studentInformationForm.firstname + ' ' + studentInformationForm.surname}}
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course === 'Elementary education'"
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Business administration' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science' "
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-blue-grey-10">
              {{studentInformationForm.idnumber}}
            </div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course ===  'Elementary education'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Business administration'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{studentInformationForm.course}}</q-btn>
          </div>

          <div
            v-else-if="studentInformationForm.idnumber === '2019 - 0320'"
            class="col-md-auto col-sm-12"
          >
            <div class="text-h4 text-bold text-orange-8">
              Welcome 🍆 💦
            </div>
            <div class="text-h2 text-weight-bolder text-capitalize text-blue-grey-10 ">
              {{studentInformationForm.firstname + ' ' + studentInformationForm.surname}}
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course === 'Elementary education'"
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Business administration' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science' "
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-blue-grey-10">
              {{studentInformationForm.idnumber}}
            </div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course ===  'Elementary education'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Business administration'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{studentInformationForm.course}}</q-btn>
          </div>

          <div
            v-else
            class="col-md-auto col-sm-12"
          >
            <div class="text-h4 text-bold text-orange-8">
              Welcome
            </div>
            <div class="text-h2 text-weight-bolder text-capitalize text-blue-grey-10 ">
              {{studentInformationForm.firstname + ' ' + studentInformationForm.surname}}
            </div>
            <q-separator
              class="bg-blue-3"
              style="height:10px"
              spaced
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course === 'Elementary education'"
            ></q-separator>
            <q-separator
              class="bg-purple-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Criminology' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-yellow-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Business administration' "
              spaced
            ></q-separator>
            <q-separator
              class="bg-green-3"
              style="height:10px"
              v-else-if="studentInformationForm.course === 'Computer science' "
              spaced
            ></q-separator>
            <div class="text-h2 text-bold text-blue-grey-10">
              {{studentInformationForm.idnumber}}
            </div>
            <q-btn
              class="text-h4 text-bold text-white bg-blue-10 q-mt-lg"
              size="20px"
              v-if="studentInformationForm.course === 'Secondary education' || studentInformationForm.course ===  'Elementary education'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-purple-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Criminology'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-yellow-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Business administration'"
            >{{studentInformationForm.course}}</q-btn>
            <q-btn
              class="text-h4 text-bold text-white bg-green-10 q-mt-lg"
              size="20px"
              v-else-if="studentInformationForm.course === 'Computer science'"
            >{{studentInformationForm.course}}</q-btn>
          </div>
        </div>
      </q-card>
    </transition>
    <!-- test -->
    <q-separator
      v-if="showStudInfo"
      inset
      spaced
    ></q-separator>

    <div class="fit row wrap justify-start items-start content-start">
      <div class=" q-pa-md col-6">
        <div class="col">
          <q-card class="">
            <q-card-section>
              <q-toolbar-title>
                Announcement
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
                <!-- <p class="q-mt-md text-subtitle2">
                  <span class="text-purple">
                    TO ALL STUDENT DON'T FORGET TO LOG IN 👀💖
                  </span>
                </p> -->
              </q-toolbar-title>
              <div class="q-mt-md text-bold">
                <div class="text-justify">
                </div>
              </div>
              <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laborum voluptatum, quas sapiente ad minima molestias voluptates nisi repellendus, ex ut nihil aliquid nostrum at exercitationem suscipit aliquam optio atque. -->
            </q-card-section>
          </q-card>
          <q-separator spaced></q-separator>
          <q-card
            flat
            bordered=""
            class="bg-blue-1"
          >
            <q-card-section>
              <div class="row justify-center">
                <h4
                  style="margin-top: 16px"
                  class="text-blue-grey text-weight-medium"
                >WORD OF THE DAY</h4>
                <img
                  class="q-ml-md"
                  src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f914.png"
                  width=48
                  height=48
                >
              </div>
              <div
                style="margin-top:-40px"
                class="row justify-center"
              >
                <div class="col-8">
                  <q-separator></q-separator>
                </div>
                <div
                  class="col-12 text-center"
                  style="margin-top:-40px"
                >
                  <h2 class="text-weight-bolder text-blue-grey-9">delectation</h2>
                  <h5
                    class="text-body1 text-blue-9"
                    style="margin-top:-50px"
                  >
                    <span class="text-italic">noun</span> | dee-lek-TAY-shun
                  </h5>
                </div>
              </div>

              <div>
                <q-toolbar-title class="text-h5 text-blue-9 text-bold">Definition</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  : delight, enjoyment
                </p>
                <q-toolbar-title class="q-pa-none text-h5 text-blue-9 text-bold">Example</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  "All of Europe is in mourning for its past. Bookstores are stocked with albums of photographs offering up the vanished past for our delectation and reflex nostalgia." <span class="text-blue-7"> — Susan Sontag, Where the Stress Falls, 2001</span>
                </p>
                <br>
                <p class="text-subtitle1 text-blue-grey-10">
                  "Then it was on to the dining room for, among other delectations, Caesar salad, shrimp remoulade, turtle soup, Eggs Benedict, bread pudding and king cake French toast." <span class="text-blue-7"> — Nell Nolan, NOLA.com, 9 July 2019</span>
                </p>
              </div>
            </q-card-section>
          </q-card>

        </div>

      </div>

      <div class="q-pr-md q-pt-md q-pb-md col-6">
        <q-card
          flat
          bordered
          class="q-mb-md bg-green-1"
        >
          <q-toolbar>
            <q-toolbar-title class="text-weight-bolder
            text-red">
              TRIVIA
            </q-toolbar-title>
            <q-space></q-space>
            <q-avatar
              rounded=""
              color="green"
              text-color="white"
            >
              {{timerStat}}
            </q-avatar>
          </q-toolbar>
          <q-card-section class="row wrap">
            <q-avatar
              size="200px"
              class="q-mr-md"
            >
              <img src="https://i0.wp.com/stephenkneale.com/wp-content/uploads/2019/11/Knowledge20Head.png?fit=840%2C840&ssl=1">
            </q-avatar>
            <div class="col">
              <span class="text-red text-h6">Question: </span> <br>
              <span
                class="text-blue-grey-9 text-h5 text-weight-bold"
                v-html="triviaData.data.results[0].question"
              ></span>

              <ol
                type='A'
                v-if="triviaData.data.results[0].type === 'multiple'"
                class="text-h6 text-blue-grey-9"
              >
                <li
                  :key="index"
                  v-for="(ia,index) in sortAnswer"
                >
                  <q-chip
                    v-if="ia === triviaData.data.results[0].correct_answer && answerNow === true"
                    class="text-white bg-light-green text-h6"
                    v-html="ia"
                  ></q-chip>
                  <span
                    v-else
                    v-html="ia"
                  ></span>
                </li>
              </ol>

              <div
                v-else
                class="text-h6 text-blue-grey-9 q-my-lg"
              >
                <div v-if="!answerNow">
                  <q-chip
                    outline=""
                    class="text-white bg-grey"
                    square
                  > True
                  </q-chip>

                  <!-- false -->
                  <q-chip
                    outline=""
                    class="text-white bg-grey "
                    square
                  > False
                  </q-chip>
                </div>
                <div v-else>
                  <q-chip
                    outline=""
                    class="text-white "
                    :class="triviaData.data.results[0].correct_answer ? 'bg-light-green' : 'bg-grey'"
                    square
                  > True
                  </q-chip>

                  <!-- false -->
                  <q-chip
                    outline=""
                    :class="!triviaData.data.results[0].correct_answer ? 'bg-red' : 'bg-grey'"
                    class="text-white "
                    square
                  > False
                  </q-chip>
                </div>
              </div>

              <q-chip
                outline
                class="text-weight-bold bg-white text-subtitle2 text-blue-8"
              >
                Answer's reveal after {{timerReveal}} seconds
              </q-chip>

            </div>

          </q-card-section>
        </q-card>

        <q-card>
          <q-card-section>
            <q-toolbar-title class="text-orange-9 text-weight-bolder text-h5">VISION</q-toolbar-title>
            <p
              class="text-justify "
              style="font-size:16px"
            >
              Christ the King College de Maranding library will envolve as a center of excellence in information storage and retrieval, sharing resources and expertise, playing an important role in the cultural, socio-economic, and political development of Lanao del Norte.
            </p>
          </q-card-section>

          <q-separator spaced></q-separator>

          <q-card-section>
            <q-toolbar-title class="text-orange-9 text-weight-bolder text-h5">MISSION </q-toolbar-title>
            <p
              class="text-justify"
              style="font-size:16px"
            >
              Christ the King College de Maranding library aims to be the information base that will support the teaching, research extension and other goals of the school.
            </p>
          </q-card-section>
        </q-card>
        <!-- <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" /> -->
      </div>
    </div>

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
            mask="#### - ####"
            unmasked-value
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
import axios from 'axios'

// import moment from 'moment'

export default {
  components: {
    'qrcodereader': require('components/qrcodeReader/qrcodereader1.vue').default
    // 'libraryQrLoginCarousel': require('components/carousel/libraryQrcodelogin.vue').default
  },
  data () {
    return {
      triviaData: [],
      timerStat: null,
      timerReveal: null,
      answerNow: false,

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
    ...mapGetters('admin', ['studentLists2']),

    sortAnswer () {
      var indata = this.triviaData.data.results[0].incorrect_answers
      var data = this.triviaData.data.results[0].correct_answer
      indata.push(data)

      // var sortedAnswer = sortBy(indata, indata)

      function shuffle (array) {
        var currentIndex = array.length, temporaryValue, randomIndex

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1

          // And swap it with the current element.
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }

        return array
      }
      var arr = shuffle(indata)
      return arr
    }

  },
  methods: {
    ...mapActions('admin', ['addLibraryStat']),
    getColor (data) {
      console.log(data)
      var color = ''
      if (data === 'Secondary education' || data === 'Elementary education') {
        color = 'blue-7'
      } else if (data === 'Computer science') {
        color = 'green-7'
      } else if (data === 'Business administration') {
        color = 'yellow-7'
      } else if (data === 'Criminology') {
        color = 'purple-7'
      }
      return color
    },
    timerStart () {
      var data = 15
      var timerAns = 10
      let vm = this
      setInterval(function () {
        data -= 1
        vm.timerStat = data
        if (data === 5) {
          vm.answerNow = true
        }
        if (data === 0) {
          data = 15
          vm.answerNow = false
          vm.getTrivia()
        }
      }, 1000)

      setInterval(function () {
        timerAns -= 1
        vm.timerReveal = timerAns
        if (vm.timerReveal === 0) {
          timerAns = 15
        }
      }, 1000)
    },
    getTrivia () {
      axios.get('https://opentdb.com/api.php?amount=1').then(
        response => (this.triviaData = response)
      )
    },
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
      console.log(this.test)
      if (this.test === '') {
        this.testtester = null
        console.log(this.$refs.dummytester.focus)
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
        var audio = new Audio('/statics/ringtone/apple_pay.mp3')
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
  },
  mounted () {
    this.getTrivia()
    this.timerStart()
  }
}
</script>

<style lang="stylus">
.bgPh {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://cdn-images-1.medium.com/max/800/1*hTwl4OGQJtoR3yOSYXCmmg.gif');
}

.schoolBG {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 600px 20px;
  // background-image: url('/statics/svg/svgtria1.svg');
}
</style>
