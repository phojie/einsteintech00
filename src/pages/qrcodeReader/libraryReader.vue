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
            bordered=""
            class="bg-blue-1 shadow-12"
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
          class="q-mb-md bg-pink-1"
        >
          <q-toolbar>
            <q-toolbar-title class="text-weight-bolder
            text-pink-9">
              TRIVIA
            </q-toolbar-title>
            <q-space></q-space>
            <q-avatar
              rounded=""
              color="pink"
              text-color="white"
            >
              {{timerStat}}
            </q-avatar>
          </q-toolbar>
          <q-card-section class="row wrap">
            <q-avatar
              size="200px"
              class="q-mr-md shadow-20"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADcCAMAAAC4YpZBAAABdFBMVEX4+Pb/2AD///8AAAD7+/n///339/X/2gD/3AAAAA3/4AbKysrp6en/3QD8/PwAAAvw8O7i4uCpqanExMR6enqQkJCcnJw7OztwcHDc3NtWVlaxsbFNTU3OzsyVlZWsrKy7u7t2dnZoaGiHh4eDg4NGRkYrKyseHh0UFBQoKChfX181NTVTU1OioqLV1dVqamoXFxj///ZqXABHOgCKdAD10wvPsQCXggtDPgmrlQZvZAn/5wufigCWgA1USQBzd30AABkgLDiLkZmopa28pxr/6m3/9XP/9ov/+qX//b3//9rQ08eqpn9yaTdFOg42KgUjGwAfEwAkHACCf01bXml6bQDkwgdKS1geJDzKrwDoyyWxrXIYCAD/6Vz8++QpJwrh1H9YXlHy1kJjTgD/64s+PhIPDy8QGQkkJhC5qVREQlefl2RgWg4KFihtbUw0Mwq+vp7m48v/98UzIw7Ds21WTyCpiwmAZxD56J3kykL/6EVRRADPJR9TAAAS4UlEQVR4nO1d+3sa15mGc2GGMxeG+2UAgbgNIEaypAEjkNLEJG2yrSypYVy8jrSNkzrbVVaN29rZ+p/fc2YAgS5Aktqe4/D+kEdSJD/z8t2/851vfL411lhjjTXWWGONNdZYY401+AYKvO8neAdA2/h9P8I7AK7K6H0/w9sHim/8GlhKm78GlQ0YvwaWOBn+NahsfnXDRNx+HkhaOZYgM8Otdq9umBpMcytM0JRX/MWsrnKbKOFYYSUJ4cgm4JakD+mllVRWhvxypCzDlVVY4k2dW9fjwFhBY1G4rr79J3mLAJXw8l/CmSi3/tUBLi13PyhcA+/iWd4eVnE/uBThW5Q+lF6e0mCovYtHeZtQDbwkSKBchnOFpe6nviz7wSWdc4VlodBcwgF8AH0TvLQrou3wobCLaKDCEieLcpy0TaILHnOpk0WRPBcscW1RfqNVF5NYJW/wAlB0a4FloZ3FJMC2xAVLH0hG78+2aSG9kAXY4qQDhtJwQU2R1hamBaCyYjvhvQPnYz/bgyCJmwJarS/ys4vBh746kCH/CcxyIMlY9hvoF/aVvfAp4o3mfTqLMMaaJsvhsKwFMKDf/Qy+WNMDHjBgkL+zkUUpSvEtCGuVzFalasBaslFKRNOAkv0J/zjWyrDkBZY+EE/ekhHCZgo2ImkVuNCkSHGrBimSMT2M8GoyRSgOI6pH8kAcqcnzcROHs4YeYPRUytP86Dcff/TJo0etfCxLedbqtWJhFaIgZ8QDHuFIgaNQmn0aHIe6wxDT/5rZvcGnn3322W9/9/kXDwCQ9UZts7QNUyZYzFMNxJph73D0MdkZpekzo0A2GxhT/I/f/wHC48cnpyenp2eP93b/mJBkoOrNjFRoNqOLeAITJlZU7HcGhMuTrBRptZKrqdEvqX4O27ZtWw5suz14tb8Hn+TT0UpGS2eruXvdMyrXvCVIF9efez1POaog96e90SA4IKLgwC+IiqgQhRDx6X9+aZTjtTww65vaneICORj39OktzpYdkuVn7V4H2orgpxAoPctuj0ajtm1Rol+dF5KVZlMGrXmDdoECqWra090SkEgCFavgya7Ye/2t5XBUiN0/CoYuji53L9+chozLvk0+B1LdgFEgw8RNPiDqPYu8gTDUqCgfZPeJcnmpMI7EPgye7I8sqqwKFSMh1ujwW7j/XwCUIGwBtRKbO8HEWiMpe9AiZwGyEYDV8z8cEHJ5QETK8elR8NBWqHH6J6AGSqzu2Z9loMNmHICt8ow0QQFGPC5IH8rtUEmedx87JKnHsV4Hu6J4zXDKVCAjKshCtUH9cTYxkR2Ws1uaxwXJRFkAKvoa2r39I0IF2Q4OLeIXbrIUHIlazz8CpdgmVVqYc6WHNmDB8xx9vjQEGHxz0CfdK0qNdENt5bYcp1zJ7kegbiYlkIbun2upuwOLt4BLeQBe2iHBDlLvSg4vrPs5OvHlsZSuqtRflccdag4ESRUWyuCBMuyT0FNG8ts7DHKepv0XkJVMGns4OuND6TpQv7ZC4m6f+JXB2TKSNJI+j0pbIBYB8TgXYmTAiTj40T/YbV9Rj0OVdhlHv19sfwlgAEBNg57OdWYBMhIQyMHghS34xe9GSyXJdBaCVAFEyiCbe99PvyoQVH/0k2f7+8Qv9odkFZZk74dCDACobpSWHV17BVTtLNE2nrECJLjYvU6gDP9bbgKQb8lJTibVkPnkC78wCHUUv9LvKKuQ9AuH/XOoArkOeBlVUwupb6iqUq8jiC9WcD2OLF8d/u57DQAjwMupCY7EqRQPhopfaLP8bhWIg+FXfw0DUIymchykPT52NPQ/ip88HAmCMOyuZJUOy96fcwBEWnFOBkbUT7qK3wpRt6MsSe3mWV5KABTKOidXUPAnXVEYhRTqYo0VFdYvdvd7zylLqVhI8JH94E8GirIfomHEXtUsKcuOyzIV5STHoxorkDchhanhbZaieCfLfqd3ZHqKpba4jMeJVyIJnShMDW9FS9Ie3UVTPHxFjqmPLcSiq42Av3UgE5YX8USP+ooVOlOYgG6yJJ0XRueOxog47PZOabzU456RpQ+3YPx+nig6JPbJGct8+jdYCu2gaMHb6ZCgHIwILUpAXC94hqUPB/Iw77tnLgSZz8noIdVY5dVNWZJLarIXd0QX8tAWvscAbEobLc+wZD2LOGzd07nQrsjg6AWzy8P5do9gBWky9/COrI+8sOwkUEFdy3srK2DHwxt3Hp0GIOnvOiyHN2RpPySO2G5prBUio/8FtPQCKa8N6mOtCDfQbb19cGX3D2hCII4O3EgiEtaTpWRGz4lfuZqR5ZivYF/0+r9nZ5wg671JLiCnjMKt00f8x0FnGGLdkGOHpTI6OW4rjvM5oik8nPRlBVEZ0xQHB73dv9H6Mg882d/CcsaI3mj1q//Y7x+GRKqHboZnBUejIAuT9AeUV2giSHFw+NRlqRx2e2c/YJA0Azsecj7XQNisNqU5eao/nnU6L5hPcTpbVFCE2EFmjeTUFu3jsbEKD6+6QZcmtVU/fAA0CKIpT7KkPEG0Wdc1cP14L/cO+szHKG/azBq7NKCQPiUnCN3LXmccXtgJChn7JyEotrcA2EiBoneHZak8izB5PXB43g/19weiX+n0qZ6Ko12quApkzTwBjq5s93ike0Vp28+ZTou02u5/AkBS8nZDBGEcvi7yVRseDg5Yr4BGDidKioIwYF/77eC3PYfliPW9RPZb9BPY7xKaq8sQSF6/WjJz/q9+uje0aIHpF0PMMAnrsVOvY7OTn8tgh9DS0wo63/1zwHJ35ZlFoApKecDTtTb1x8Fe781IYK1nxRHmiGYDQ2ae3WPrKNhpCwcD4rfs198p42jZfgJUGJB52m+gnlOXOnpDI2b7mDWdBTvYUYj9HSF9qqeKfbgXCsJQKPT3fadjQg77ZD8CIjFQ5OtaG4EHPYO6GRo63AzuIHjQDQ6NI4udPyvk6RURFUJcb6sYVGE1AGUZciRKZpiXIXtwRJO8zriQVqxB/+jSHvcOFFpfT5NZoX1F7L8CPQUa+iRdDFB3Btjc5Ty8JWn18+7VVe9ixHp5YzrUSF31dWLl7uC6Y0CGXbL/iKZ26dp0riBmGMZOPZndyjQ2N1MONjczlWVXxt4xzq2Tg85TmuCRg+6EjyBOD02U755e1yX0x1/9JqDHQPP6YgkGaiDABofT6dwU6bDHgqlKBWTYQ1pf2sa0+lKGY8aCGLrWV2FwSf7xJYA+vXH7IAjN431QWQD1t5ZB/SxNXsnxtJ0ljMady0mx4irs0YgcSYk44G++X30p9ocjY3CliO2TqaOhInTH8QYH12ZpBUX7exWCMh+X2uZw7ifH3f7xZVchxwNhKra2O5DX6U81ln4avf1HqQ3OoogL9V+CYIwOL4KWaAcnrlXsHjoypCnRlCU5sS34t49BhaPcbgr1G5bY2YehS0IOOmMrFJ7uOV+Rh+2prdpnvcP+P3NmkpeT9jm8ZLNnIasTHClW8OnEy566RfPptMFF/S7Ncp+AOp/bfQJMQ22oDKGgjIyx6MilY5hiyLp2SMp+f9eMer3iugfq10xSg4c91hI4fO7qrPKKHdsKNCGaKOzgORU4t6Kk1ZcrvIEV7CrK467b+WgP3UpsEi7J5ehy0H9kZrm0SooHTkvAMsiQ5gaWm9wJFksHBPt04o6skH3ae4waPDpYB+qn46Bhh44I6bppD7lgsrT/TiahZf9yZD8BPBXP81DP2divMNrrHRsjQXHdKjmyhZkET7kanPS6CanMLUsWMv1OE7Lz+luidF87fazX7RmWgn3R6ZNds8StwvpY/uNkAPZoeNxm5z2MZZ+WJVOW4mH32P7qezXpxVODVaF+IThMrMfdoUIes5JSGHSUa5aKQQPqec2X5FdhfawyYbx2CbRCAnGKS6HN2rT2Y4el2H5oH72MFpdtGvE6EA2altHbsx/aSnefJUA26+xZFy7Lg0E3D8qFBifLJ+4FzQ2UE+uw0+mS9htGzboigmCdESdYQtZRN9I81lzzoOX0ftc2BgeEVsuM2YUo+C0nKxAHl1+EgJlNxDkXpY+Fzf876x0PHxLhlKU/gsGuJ0LH3x6Z8RJoJDx9AHQ37hDLgy9HdvCCKLusdBafMV1lLL/+4eM0VE2jzl+wxOnbglFl+E0XWuKAGaZwyu6ZQvHrl2AjCdOgDr00+bISsJbauWNUWY1+/CB49pQ86/aU3pmokH/Bc03Kw4YGMpC3NZzYl4cbdxbDam5nZ+NPBe3Js6NL+Gbv4i8QwsxWGciVavrWblzZE6s07gECOizdt1UA+Wp1A27l0ulwXdYC8g4AoBZpwNbtMRrUMnKe7RsAs9pYcPUVN9JaNJ6FsGKUE5FWLZ4yINy88w9wurrtzbuXqtyomoueDBWSzoKNjQYco5kP33OEhXCEar731BYV4O3ZpnngYtV0NonUw6aUqcfSYMExHdY26W//u5/yF0NeuuYDgWiyXoqGAwbQIgZmR5OLDndAbqfoodUhKwKHN8rF5kRbt4rFYrmlp7X75YlwAhY8diq7DGqiGtelsCzLJjRNU5KiBT1SysBM2HdveoflTMWLyzXuB4jFfc5yGC2WBDMow0Xv3AFRGpv4eSkPCscgNOo1o1aPaS4/VZNNSW9kF+ok2160cGGMl4DSUM/p8e1ss1ozHMOs1avJbKOUl5Y1m7FcyXp9A8UYOFEBbMMYACigBQKqXMiXNrPJSuzehTezf1yAfBzfIik59paUq1mqN0u6ZKZlOQ9XmfnAvvIOF7aJ4zsFZ3zHLMGs7lhmoFCqZ83VXAuWuWDpA+EqzCQhTOoqJRgulKu1ciEAuNDElYHTzUwhmtiu7tSZo82U8roeSWxE+QqHS4AkmAPInTlDmhSv1LKxeCKRiG8u3VLOEdB43RQG6UQSpnR5nBMEEvADYulztuLRLL1Jy61xRlDIb0KjzMPql1WBzCSsVyosTa8k6zWaBW2laFrLVnNylo8vBAIgByNyOEzzdS0gRyOxRn1cnnj3ysFPB5JhGiMMNL1Yg5VyREprAbYPECRbHxBLnM9jrCWqM67HQWlxts4ZcKsBotXIHENgxmGM79cF3QQqGbAY0QuSJNH6OVHazhow0/Jmq+4XAMgwspEvp7a3Y/F8pJCTNWdx7vt+rH83UMFotMzAVF+xlmtl4AoviOILCOXyNIA0M7FyOZZpwlojYQY+JOfjwr09IadzkpQzmSNSPzyOU3hz0H6NNdZYY4013g9YDnB3Ns767B9Inq5Kie1m9q7BV1RIxFL5DyMtYK/nSG3ewRIVnFYIH+3yJUA5LRm5U2NxCubCd4x4cQkEKtPO1Zx24hYMz6exPBspqEyGewMFdabzgaLzb2xH6VKD37n1KUtcgo2oNm0LoPA8S7wBofc2F62Ka5aUxg6MTapJJMO5CW76IUBOb3n5GMvx4CtKwxIwja0JTRnOTcSCbbjSaa03gZMT7xOGLQDU+vjWCJXlXEMdV6DB3yDwBCC5MWWpAxWEYdy5qU9Zbsy9QgluVgv8zLvcAEiOV59QdxNl7w8qu4pJv50bbw7A1hZ3885TTF/EQYXnsAzDLPsBZTm7+QWZUGp4Z2vjTwXYmlz50RyWKqg4W+Aoy1m7RDoMxIr8smyUpywlh2XCCSHU5c46G1w2QKLB61VaHy5u32ApQf02S9BsAD3J7VECLk0kNGGZhsxSKUtz5oWJGkwAk593PNwEjk8kNGEpQ+ZlqLtJxLMTf4Ny9H9yuV3DBc7Xb7DUXJZpVl42JiwjUAYBTy6nXAm4ZUwjicsyABOuXepgWnniGKQZA7+JLI6M33WEJpFEha1b3gdnG5Rlk9sbmLQUmSauLksA2R1ElhVcm6FKnY8KGhFeQwkqTJYvaVOWLPpT0jPr8R2bBbE4rwMGKDopjsPXsnRZXt+DRhJ7Hx+IL3rdvadBY4TrU1hKN2bpZAXyjMbiiEGLMpBY9rJpz4KyNCcs9bH3cZyMNlOT4HKDJfItbgcMWLEx0djIOF46KhyYYQmScZclr5NqNGIUJrJMjDM8x+nOslRhjA2MFCCvm0RY9HcenbJ031BbcO/IyNcsqY1CmIm3ynCLV5ZhqE80tuSwLDqbNNAsywKM6LFiqgIzvAbMwLUs3Rfxwti4VzBliRPQuWmiUo3llCWG7lgoFV6RuZiom9lRTZ5GErzp1lx4Z5NTjWUs3UfXYIbGRJB089o5ljW3NsENbitMmgS4N9E0yC7qxScKLE+vNE2/xCVOay9Ma+N8NOoGyCYjOW5hUbtssOhB/S11Pm55QusXLtvrqObOpbMl7AEIi5lp8sqOTdjNPVqf4NT4sJb+jM+0ICDp29G0k/2gzWwlG50YHko3qtXqVjnMdhOMGyM0G+T0EAEhPBkqxGD2SgVy91KzH1yfa/Jyl3SNNdZYY4011lhjjTXWWGONNdZYY4011ljj5+H/AXHG/vYCMiIrAAAAAElFTkSuQmCC"/>
            </q-avatar>
            <div class="col">
              <span class="text-pink text-h6">Question: </span> <br>
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
