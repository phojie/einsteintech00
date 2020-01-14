<template>
  <q-drawer
    :value="drawerActivityList"
    :width="250"
    content-class="navNachos"
    content-style="padding-bottom:40px;"
  >

    <q-item
      clickable
      class="bg-secondary text-white"
      style="border-bottom: 1px solid #1d3346"
     >
      <q-item-section avatar>
        <q-avatar
          size="28px"
          class="q-ml-sm"
        >
          <img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section
        class="text-h6 text-weight-bold"
        style="letter-spacing:-1px;font-family: manjari;padding-top:2px"
      >
        Einstein Tech
      </q-item-section>

    </q-item>
    <q-scroll-area
      :thumb-style="thumbStyle"
      style="height: 90%;overflow-x:hidden"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
     >
      <q-list class="q-pb-md text-blueGreyfire">
        <div class="row bg-secondary">
          <div class="col">
            <q-item
              clickable
              exact
              to="/"
              class="q-py-md bg-secondary"
              active-class="text-blue-5"
              @mouseover="inset = false"
              @mouseleave="inset = true"
            >
              <q-item-section
                avatar
                class=""
              >
                <q-icon
                  class="on-right"
                  size="22px"
                  name="home"
                />
              </q-item-section>
              <q-item-section class="text-subtitle2">System Overview</q-item-section>
            </q-item>
          </div>

          <q-separator
            vertical
            class="bg-separatorFire"
            :inset="inset"
          />

          <div class="bg-secondary">
            <q-avatar
              v-ripple
              @click="test"
              @mouseover="hoverIcon = true"
              @mouseleave="hoverIcon = false"
              class="cursor-pointer q-mt-xs"
            >
              <q-icon
                size="20px"
                name="settings"
                :class="hoverIcon ? 'rotate-315' : ''"
              />
              <q-icon
                style="margin-left:-3px; "
                v-if="hoverIcon || showSetting"
                size="15px"
                name="play_arrow"
              />

              <q-menu
                v-model="showSetting"
                :offset="[-45,-45]"
              >
                <q-list
                  bordered
                  dense
                  class="q-py-sm"
                >
                  <q-item clickable>
                    <q-item-section> System Settings </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section> Users and permissions </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-avatar>
            <!-- </q-btn> -->
          </div>

        </div>

        <q-separator style="background-color: #404854" />

        <registrarList :registrarMenuList="registrarMenuList" />

        <q-separator class="bg-secondaryTransSeparator" />

        <libraryList :libraryMenuList="libraryMenuList" />

        <q-separator class="bg-secondaryTransSeparator" />

        <dsaList :dsaList="dsaList" />

        <q-separator class="bg-secondaryTransSeparator" />

        <!-- <cmoList :cmoList="cmoList" /> -->
      </q-list>

    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  props: ['thumbStyle', 'contentStyle', 'contentActiveStyle', 'drawerActivityList'],
  components: {
    'registrarList': require('./drawerListItem/registrarList.vue').default,
    'libraryList': require('./drawerListItem/libraryList.vue').default,
    'dsaList': require('./drawerListItem/dsaList.vue').default
    // 'cmoList': require('./drawerListItem/cmoList.vue').default

  },
  data () {
    return {
      inset: true,
      hoverIcon: false,
      showSetting: false,
      registrarMenuList: [
        {
          title: 'Students',
          avatar: 'person',
          nameRoute: '/registrarStudents'
        },
        {
          title: 'Parents',
          avatar: 'face',
          nameRoute: ''
        },
        {
          title: 'Personnel',
          avatar: 'supervisor_account',
          nameRoute: '/registrarPersonnel'
        }
      ],
      libraryMenuList: [
        {
          title: 'Catalog',
          avatar: 'library_books',
          nameRoute: 'libraryCatalog'
        },
        {
          title: 'Statistics',
          avatar: 'perm_contact_calendar',
          nameRoute: '/libraryStatistics'
        },
        {
          title: 'Borrowers',
          avatar: 'book',
          nameRoute: '/libraryBorrowers'
        },
        {
          title: 'Penalties',
          avatar: 'monetization_on',
          nameRoute: ''
        }
      ],
      dsaList: [
        // {
        //   title: 'Voting',
        //   avatar: 'library_books'
        // },
        // {
        //   title: 'Statistics',
        //   avatar: 'perm_contact_calendar'
        // },
        // {
        //   title: 'Borrowers',
        //   avatar: 'book'
        // },
        // {
        //   title: 'Penalties',
        //   avatar: 'monetization_on'
        // }

      ]
    }
  },
  methods: {
    test () {
      console.log('test')
      // alert('test')
    }
  }
}
</script>
