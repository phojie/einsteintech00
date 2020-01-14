<template>
  <q-page class="q-pa-md-md">
    <div class="row wrap">
      <div class="col-md-8 q-pr-md col-xs-12">
        <dashStatistics>Statistics</dashStatistics>
      </div>
      <div class="col-md-4 col-xs-12">
        <libraryAwardee>Library Awardees</libraryAwardee>
      </div>
    </div>
    <q-separator
      spaced
      inset
    ></q-separator>
    <q-table
      card-style="overflow:auto !important"
      :loading="loading"
      :fullscreen.sync="isFullscreen"
      class="text-blue-grey-9 q-pb-xl q-mt-lg"
      :data="libraryStat"
      :columns="columns"
      :filter="filter"
      row-key="keyIndex"
      no-data-label="I didn't find anything for you"
      no-results-label="The filter didn't uncover any results"
      :visible-columns="visibleColumns"
      :hide-bottom="hidebottom"
      :pagination.sync="pagination"
    >
      <template v-slot:top="props">
        <div class="text-h4 text-bold">Library Visitors</div>
        <q-space />

        <q-input
          dense
          clearable
          debounce="300"
          v-model="filter"
          placeholder="Search"
          class="print-hide q-mr-md-lg text-body1"
        >
          <q-icon
            slot="append"
            name="search"
          />
        </q-input>

        <q-select
          class="print-hide"
          v-model="visibleColumns"
          multiple
          dense
          outlined=""
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-avatar
          icon="print"
          class="print-hide q-ml-md-md cursor-pointer"
          @click="printStudents"
        >
          <q-tooltip>
            Print
          </q-tooltip>
        </q-avatar>

        <q-avatar
          size="55px"
          @click="props.toggleFullscreen"
          flat
          round
          class="cursor-pointer print-hide"
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        >
          <q-tooltip>
            <span v-if="!props.inFullscreen">Fullscreen</span>
            <span v-else>Exit Fullscreen</span>
          </q-tooltip>
        </q-avatar>
      </template>

      <template v-slot:body="props">
        <q-tr
          :props="props"
          class="text-capitalize"
        >
          <q-td
            class="text-bold"
            key="date"
            :props="props"
          >
            <!-- {{ props.row }} -->
            {{ props.row.date }} || {{ props.row.time }}
          </q-td>
          <q-td
            class="text-bold text-purple-10"
            key="idnumber"
            :props="props"
          >
            {{ props.row.idnumber }}
          </q-td>
          <q-td
            key="profileImgUrl"
            :props="props"
          >
            <q-avatar
              color="green-2"
              size="lg"
              rounded
            >
              <img
                style="padding:1px"
                :src="props.row.profileImgUrl"
                :alt="props.row.profileImgUrl"
              >
            </q-avatar>
          </q-td>
          <q-td
            key="fullname"
            :props="props"
          >
            {{ props.row.fullname }}
          </q-td>

          <q-td
            key="course"
            :props="props"
          >
            {{ props.row.course }}
          </q-td>

          <q-td
            key="keyIndex"
            :props="props"
          >
            <div class="text-blue-grey-6 full-width row wrap justify-center content-start">
              <!-- <q-avatar
                flat
                class="cursor-pointer viewActiveHover"
                v-ripple
                round
                size="lg"
                icon="remove_red_eye"
              >
                <q-tooltip>
                  View {{ props.row.data.surname }}'s Profile
                </q-tooltip>
              </q-avatar>

              <q-separator
                class="q-mx-xs"
                inset
                vertical
              />

              <q-avatar
                @click="updateStudentData(props.row)"
                flat
                class="cursor-pointer editActiveHover"
                v-ripple
                round
                size="lg"
                icon="edit"
              >
                <q-tooltip>
                  Edit
                </q-tooltip>
              </q-avatar>

              <q-separator
                class="q-mx-xs"
                inset
                vertical
              /> -->
              <q-avatar
                @click="deleteStudent(props.row)"
                flat
                class="cursor-pointer deleteActiveHover"
                v-ripple
                round
                size="lg"
                icon="delete"
              >
                <q-tooltip>
                  Delete
                </q-tooltip>
              </q-avatar>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'dashStatistics': require('components/libraryCompo/statisticsCompo/dash.vue').default,
    'libraryAwardee': require('components/libraryCompo/statisticsCompo/libraryAwardee.vue').default
  },
  data () {
    return {
      isFullscreen: false,
      filter: '',
      visibleColumns: ['date', 'idnumber', 'profileImgUrl', 'fullname', 'course'],
      hidebottom: false,
      pagination: {
        rowsPerPage: 6, // current rows per page being displayed
        recentRowsPerPage: 0
      },
      columns: [
        {
          name: 'date',
          label: 'Data & Time',
          align: 'left',
          field: 'date',
          sortable: true
        },
        {
          name: 'idnumber',
          label: 'Id number',
          align: 'left',
          field: 'idnumber',
          sortable: true
        },
        {
          name: 'profileImgUrl',
          label: 'Photo',
          align: 'left',
          field: 'profileImgUrl'
        },
        {
          name: 'fullname',
          label: 'Name',
          align: 'left',
          field: 'fullname'
        },
        {
          name: 'course',
          label: 'Course',
          align: 'left',
          field: 'course'
        },
        // {
        //   name: 'course',
        //   label: 'Date & Time',
        //   align: 'left',
        //   field: 'course'
        // },
        {
          name: 'keyIndex',
          label: 'Actions',
          align: 'center',
          field: 'keyIndex'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('admin', ['studentLists', 'loading', 'libraryStat'])
  },
  methods: {
    ...mapActions('admin', ['deleteStatistics']),
    deleteStudent (data) {
      let vm = this
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to <span class='text-red text-bold'>Delete</span> <span class="text-bold text-subtitle1">${data.fullname} </span> record on ${data.date} @ ${data.time} `,
        html: true,
        ok: {
          label: 'Delete',
          color: 'negative'
        },
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteStatistics(data).then(function (result) {
          console.log(result)
          vm.$q.notify({
            message: 'Successfully deleted ' + result.fullname + 'record',
            color: 'negative',
            timeout: 2000,
            icon: 'delete_sweep',
            classes: 'dense'
          })
        }, function () {
          vm.$q.notify({
            message: 'Something is wrong!',
            color: 'warning',
            timeout: 2000,
            icon: 'warning'
          })
        })
      })
    },
    printStudents () {
      this.isFullscreen = true
      this.hidebottom = true
      this.pagination.recentRowsPerPage = this.pagination.rowsPerPage
      this.pagination.rowsPerPage = 0
      this.$q.loading.show()
      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
        window.print(event)
        this.isFullscreen = false
        this.hidebottom = false
        this.pagination.rowsPerPage = this.pagination.recentRowsPerPage

        // window.onafterprint = function () {
        //   console.log('Printing completed...')
        // }
      }, 200)
    }
  },
  created () {
  }
}
</script>
