<template>
  <q-page>
    <!-- <pre>{{triviaData}}</pre> -->
    <div class="fit row wrap justify-start items-start content-start">
      <div class=" q-pa-md col-6">
        <div class="col">
          <q-card class="">
            <q-card-section>
              <q-toolbar-title>
                Announcement
              </q-toolbar-title>
              <div class="q-mt-md">
                No Announcement yet
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
                  <h2 class="text-weight-bolder text-blue-grey-9">childblain</h2>
                  <h5
                    class="text-body1 text-blue-9"
                    style="margin-top:-50px"
                  >
                    <span class="text-italic">noun</span> | CHIL-blayn
                  </h5>
                </div>
              </div>

              <div>
                <q-toolbar-title class="text-h5 text-blue-9 text-bold">Definition</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  : an inflammatory swelling or sore caused by exposure (as of the feet or hands) to cold
                </p>
                <q-toolbar-title class="q-pa-none text-h5 text-blue-9 text-bold">Example</q-toolbar-title>
                <p class="text-subtitle1 text-blue-grey-10">
                  "If you thought chilblains only belonged in 19th century novels, think again. They crop up in response to extreme cold…. You're more likely to get chilblains in extreme weather through sitting in an under-heated house or working in a chilly office than walking through sub-zero temperatures outside." <span class="text-blue-7">— JR Thorpe, Bustle, 7 Feb. 2019</span>
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
          class="q-mb-md bg-red-1"
        >
          <q-toolbar>
            <q-toolbar-title class="
            text-weight-bolder
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
            <q-avatar size="200px">
              <img src="https://img.icons8.com/color/1600/000000/idea-sharing.png">
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
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      slide: 1,
      triviaData: [],
      timerStat: null,
      timerReveal: null,
      answerNow: false,

      dialogIdtyper: false,
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
      axios.get('https://opentdb.com/api.php?amount=1&category=9').then(
        response => (this.triviaData = response)
      )
    }
  },
  mounted () {
    this.getTrivia()
    this.timerStart()
  }
}
</script>
