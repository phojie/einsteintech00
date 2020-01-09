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
            <q-badge>Announcement!</q-badge>
            <q-card-section style="margin-top:-10px">
              <q-toolbar class="bg-light-green-8 text-white shadow-12 rounded-borders">
                <q-toolbar-title class="text-weight-bolder text-dark-orange">
                  NATIONAL BIBLE MONTH 2020
                </q-toolbar-title>
                <span class="text-h3">🙌 b 2 😇</span>
              </q-toolbar>
              <q-input
                autofocus=""
                input-class=" text-transparent text-h3 text-bold text-center"
                v-model="testtester"
                @keyup="idnumbertypetest"
                mask="#### - ####"
                color="blue"
                style="width:40px;margin-top:-40px"
                class=" text-weight-bold dense"
                ref="dummytester"
              />
              <div class="q-mt-md text-medium text-grey-9 text-body2">
                <div class="text-justify">
                  God’s Word contains a message so <span class="text-deep-orange-9 text-weight-bolder text-subtitle1">beautiful</span>, <span class="text-purple-9 text-weight-bolder text-subtitle1">true</span>, and <span class="text-indigo-9 text-weight-bolder text-subtitle1">powerful</span> that it can become life-changing for anyone who gets to read it. To this day, wherever you are in the world, the Bible remains relevant and timely. And when heeded and obeyed, it can change a nation for the better.
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
                  <h2 class="text-weight-bolder text-blue-grey-9">surfeit</h2>
                  <h5
                    class="text-body1 text-blue-9"
                    style="margin-top:-50px"
                  >
                    <span class="text-italic">noun</span> | SER-fut
                  </h5>
                </div>
              </div>

              <div>
                <q-toolbar-title class="text-h5 text-blue-9 text-bold">Definition</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  1 : an overabundant supply : excess
                  <br>
                  2 : an intemperate or immoderate indulgence in something (such as food or drink)
                  <br>
                  3 : disgust caused by excess
                </p>
                <q-toolbar-title class="q-pa-none text-h5 text-blue-9 text-bold">Example</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  "The fracking boom in the United States has led to a surfeit of natural gas worldwide." <span class="text-blue-7"> — Robinson Meyer, The Atlantic, 3 Dec. 2019</span>
                </p>
                <p class="text-subtitle1 text-blue-grey-10">
                  "Her voice alone is a stunner, a mellifluous soprano, more delicate than her big sister's powerhouse belt." <span class="text-blue-7"> — Peter Larsen, The Orange County Register (Anaheim, California), 10 Nov. 2019</span>
                </p>
              </div>
            </q-card-section>
          </q-card>

        </div>

      </div>

      <div
        v-if="bibleWeek"
        class="q-pr-md q-pt-md q-pb-md col-6"
      >
        <bibleCarousel class="q-mb-md">
          <!-- <template v-slot:BibleData>
            {{BibleData}}
          </template> -->
          {{BibleData}}
        </bibleCarousel>

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
              <img src="data:image/png;base64,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">
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

        <q-card v-if="!bibleWeek">
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

      <div
        v-else
        class="q-pr-md q-pt-md q-pb-md col-6"
      >
        <bibleCarousel>
          <!-- <template v-slot:BibleData>
            {{BibleData}}
          </template> -->
          {{BibleData}}
        </bibleCarousel>
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
    'qrcodereader': require('components/qrcodeReader/qrcodereader1.vue').default,
    'bibleCarousel': require('components/carousel/bibleCarousel.vue').default
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
      },
      BibleData: [],
      bibleWeek: true
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
    getWordApi () {
      // axios.get('https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=j7nn0y30zqfvdsgd4c5yzwenypk9bn888o3qhx1d1zhq48soz')
      //   .then(response => (this.wordInfo = response))
    },
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
          vm.getBibleVerses()
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
    getBibleVerses () {
      let vm = this
      // axios.get('http://quotes.rest/bible/verse.json')
      axios.get('https://beta.ourmanna.com/api/v1/get/?format=text&order=random')
        .then(function (response) {
          console.log(response)
          vm.BibleData = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
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
    this.getBibleVerses()
    // this.getWordApi()
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
