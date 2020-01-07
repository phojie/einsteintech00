<template>
  <q-page class="q-pa-md-md">
    <!-- <pre>{{personnelLists}}</pre> -->
    <q-table
      card-style="overflow:auto !important"
      :loading="loading"
      :fullscreen.sync="isFullscreen"
      class="text-blue-grey-9 q-pb-xl"
      :data="personnelLists"
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
        <div class="text-h4 text-bold"> Ckcm Personnel</div>

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
            key="idnumber"
            :props="props"
          >
            # {{ props.row.idnumber }}
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
            {{props.row.prefix}} {{ props.row.fullname }} {{props.row.suffix}}
          </q-td>

          <q-td
            key="position"
            :props="props"
          >
            {{ props.row.position }}
          </q-td>
          <q-td
            key="department"
            :props="props"
          >
            <q-chip
              v-if="props.row.department === 'Top administrator'"
              class="glossy text-caption"
              color="orange"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

            <q-chip
              v-else-if="props.row.department === 'Middle administrator'"
              class="glossy text-caption"
              color="light-green"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

            <q-chip
              v-else-if="props.row.department === 'College faculty'"
              class="glossy text-caption"
              color="cyan"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

            <q-chip
              v-else-if="props.row.department === 'High school faculty'"
              class="glossy text-caption"
              color="purple"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

            <q-chip
              v-else-if="props.row.department === 'Elementary faculty'"
              class="glossy text-caption"
              color="pink"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

            <q-chip
              v-else-if="props.row.department === 'Service unit personnel'"
              class="glossy text-caption"
              color="red"
              dense
              text-color="white"
              icon-right="star"
            >
              {{props.row.department}}
            </q-chip>

          </q-td>

          <q-td
            key="keyIndex"
            :props="props"
          >
            <div class="text-blue-grey-6 full-width row wrap justify-center content-start">
              <q-avatar
                flat
                class="cursor-pointer viewActiveHover"
                v-ripple
                round
                size="lg"
                icon="remove_red_eye"
              >
                <q-tooltip>
                  View {{ props.row.surname }}'s Profile
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
              />

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

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        ref="testref"
        @click="addStudentData"
        fab
        icon="add"
        color="secondary"
      />

    </q-page-sticky>

    <q-dialog v-model="addStudentDialog">
      <personnelFormModal
        ref="personnelFormModal"
        @added="addPhoto"
        :options="options"
        :idnumber.sync="studentInformationForm.idnumber"
        :prefix.sync="studentInformationForm.prefix"
        :suffix.sync="studentInformationForm.suffix"
        :position.sync="studentInformationForm.position"
        :firstname.sync="studentInformationForm.firstname"
        :middlename.sync="studentInformationForm.middlename"
        :surname.sync="studentInformationForm.surname"
        :course.sync="studentInformationForm.course"
        :studentInformationForm="studentInformationForm"
        :loading="loading"
        :validations="$v.studentInformationForm"
      >
        <template slot="headerTitle">Add Personnel</template>
        <template slot="dialogBtn">
          <q-btn
            color="primary"
            label="Submit"
            @click="submitAddPersonnel"
            :loading="loading"
            :disable="jie1"
            size="20px"
            class="full-width q-mt-lg"
          />
        </template>
      </personnelFormModal>
    </q-dialog>

    <q-dialog v-model="updateStudentDialog">
      <personnelFormModal
        ref="personnelFormModal"
        @added="addPhoto"
        :options="options"
        :idnumber.sync="studentInformationForm.idnumber"
        :prefix.sync="studentInformationForm.prefix"
        :suffix.sync="studentInformationForm.suffix"
        :position.sync="studentInformationForm.position"
        :firstname.sync="studentInformationForm.firstname"
        :middlename.sync="studentInformationForm.middlename"
        :surname.sync="studentInformationForm.surname"
        :course.sync="studentInformationForm.course"
        :studentInformationForm="studentInformationForm"
        :loading="loading"
        :validations="$v.studentInformationForm"
      >
        <template slot="headerTitle">Edit Personnel Profile</template>
        <template slot="dialogBtn">
          <q-btn
            color="primary"
            label="Update"
            @click="submitUpdatePersonnel"
            :loading="loading"
            :disable="jie1"
            class="full-width q-mt-lg"
          />
        </template>
      </personnelFormModal>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import isEqualWith from 'lodash/isEqual'
import find from 'lodash/find'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    studentInformationForm: {
      prefix: { required },
      firstname: { required },
      surname: { required },
      position: { required },
      idnumber: {
        required,
        minLength: minLength(11),
        isUnique (value) {
          let vm = this
          // standalone validator ideally should not assume a field is required
          if (value === '') return true
          let isUnique = find(vm.personnelLists, ['idnumber', value])
          // console.log(vm.dummyStudentInformationForm.idnumber, value)
          if (isUnique && vm.dummyStudentInformationForm.idnumber !== value) {
            // error alert
            return false
          }
          // simulate async call, fail for all logins with even length
          return new Promise((resolve, reject) => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          })
        }

      },
      course: { required },
      profileImgUrl: ''
    }
  },
  components: {
    'personnelFormModal': require('components/shared/modals/personnelFormModal.vue').default
  },
  data () {
    return {
      dataLoad: false,
      incrementNo: 0,
      pagination: {
        rowsPerPage: 6, // current rows per page being displayed
        recentRowsPerPage: 0
      },
      hidebottom: false,
      isFullscreen: false,
      filter: '',
      visibleColumns: ['idnumber', 'profileImgUrl', 'fullname', 'position', 'department', 'keyIndex'],
      columns: [
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
          name: 'position',
          label: 'Position',
          align: 'left',
          field: 'position'
        },
        {
          name: 'department',
          label: 'Department',
          align: 'left',
          field: 'department'
        },
        {
          name: 'keyIndex',
          label: 'Actions',
          align: 'center',
          field: 'keyIndex'
        }
      ],
      studentInformationForm: {
        prefix: '',
        firstname: '',
        middlename: '',
        surname: '',
        suffix: null,
        idnumber: '',
        keyIndex: '',
        course: '',
        position: '',
        profileImgUrl: '',
        fullname: ''
      },
      dummyStudentInformationForm: {
        prefix: '',
        firstname: '',
        middlename: '',
        surname: '',
        suffix: null,
        idnumber: '',
        keyIndex: '',
        course: '',
        position: '',
        profileImgUrl: '',
        fullname: ''
      },
      addStudentDialog: false,
      updateStudentDialog: false,
      model: null,
      options: [
        'Top Administrator', 'Middle Administrator', 'College Faculty', 'High School Faculty', 'Elementary Faculty', 'Service Unit Personnel'
      ],
      url: 'https://threadreaderapp.com/images/avatars/unknown.jpg'
    }
  },
  computed: {
    ...mapGetters('admin', ['personnelLists', 'loading', 'loadingProgress']),
    jie1 () {
      return isEqualWith(this.dummyStudentInformationForm, this.studentInformationForm)
    }
  },
  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },
  methods: {
    ...mapActions('admin', ['getPersonnelLists', 'addPersonnelLists', 'deletePersonnelLists', 'updatePersonnelLists']),
    ...mapMutations('admin', ['commitLoading']),
    submitAddPersonnel () {
      let vm = this
      if (this.$v.studentInformationForm.$invalid) {
        this.$v.studentInformationForm.$touch()
        console.log(this.$v.studentInformationForm)
      } else {
        this.addPersonnelLists(this.studentInformationForm).then(function (result) {
          var fullname = `${vm.studentInformationForm.firstname} ${vm.studentInformationForm.middlename.charAt(0)}. ${vm.studentInformationForm.surname}`
          vm.$q.notify({
            message: 'Successfully added ' + fullname,
            color: 'positive',
            timeout: 4000,
            icon: 'playlist_add'
          })
          vm.$v.studentInformationForm.$reset()
          vm.clearStudentForm()
        }, function (error) {
          console.log(error)
          vm.$q.notify({
            message: 'Something is wrong',
            color: 'warning',
            timeout: 2000,
            icon: 'warning'
          })
        })
      }
    },
    addPhoto (data) {
      let imgData = data[0].__img['src']
      this.studentInformationForm.profileImgUrl = imgData
    },
    dataReloader () {
      let vm = this
      this.commitLoading(true)
      this.getPersonnelLists().then(function (result) {
        vm.commitLoading(false)
      }, function (err) {
        console.log(err)
      })
    },
    deleteStudent (data) {
      let vm = this
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to <span class='text-red text-bold'>Delete</span> <span class="text-bold text-subtitle1">${data.fullname}</span>`,
        html: true,
        ok: {
          label: 'Delete',
          color: 'negative'
        },
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deletePersonnelLists(data).then(function (result) {
          vm.$q.notify({
            message: 'Successfully deleted ' + result[1].fullname,
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
    addStudentData () {
      this.studentInformationForm = {
        prefix: '',
        firstname: '',
        middlename: '',
        surname: '',
        suffix: null,
        idnumber: '',
        keyIndex: '',
        course: '',
        position: '',
        profileImgUrl: '',
        fullname: ''
      }
      this.addStudentDialog = true
    },
    updateStudentData (data) {
      // console.log('TCL: updateStudentData -> data', data)
      // console.log(data)
      this.studentInformationForm = {
        firstname: data.firstname,
        middlename: data.middlename,
        surname: data.surname,
        idnumber: data.idnumber,
        keyIndex: data.keyIndex,
        prefix: data.prefix,
        suffix: data.suffix,
        position: data.position,
        course: data.department,
        profileImgUrl: data.profileImgUrl
      }
      this.dummyStudentInformationForm = {
        firstname: data.firstname,
        middlename: data.middlename,
        surname: data.surname,
        idnumber: data.idnumber,
        keyIndex: data.keyIndex,
        prefix: data.prefix,
        suffix: data.suffix,
        position: data.position,
        course: data.department,
        profileImgUrl: data.profileImgUrl
      }
      this.updateStudentDialog = true
    },
    submitUpdatePersonnel () {
      if (this.$v.studentInformationForm.$invalid) {
        this.$v.studentInformationForm.$touch()
      } else {
        if (!this.jie1) {
          let vm = this
          let jie2 = isEqualWith(this.dummyStudentInformationForm.profileImgUrl, this.studentInformationForm.profileImgUrl)
          if (jie2) {
            var falseUpload = {
              'studentInfo': this.studentInformationForm,
              'uploaded': false
            }
            this.updatePersonnelLists(falseUpload).then(function (result) {
              vm.updateStudentData(result)
              var fullname = `${vm.studentInformationForm.firstname} ${vm.studentInformationForm.middlename.charAt(0)}. ${vm.studentInformationForm.surname}`
              vm.$q.notify({
                message: 'Successfully updated ' + fullname,
                color: 'positive',
                timeout: 4000,
                icon: 'update'
              })
              vm.$v.studentInformationForm.$reset()
            }, function (error) {
              console.log(error)
              vm.$q.notify({
                message: 'Something is wrong',
                color: 'warning',
                timeout: 2000,
                icon: 'warning'
              })
            })
            // if picture is not data_url
          } else {
            // console.log('test')
            var trueUpload = {
              'studentInfo': this.studentInformationForm,
              'uploaded': true
            }
            this.updatePersonnelLists(trueUpload).then(function (result) {
              vm.updateStudentData(result)
              var fullname = `${vm.studentInformationForm.firstname} ${vm.studentInformationForm.middlename.charAt(0)}. ${vm.studentInformationForm.surname}`
              vm.$q.notify({
                message: 'Successfully edited ' + fullname,
                color: 'positive',
                timeout: 4000,
                icon: 'update'
              })
              vm.$v.studentInformationForm.$reset()
            }, function (error) {
              console.log(error)
              vm.$q.notify({
                message: 'Something is wrong',
                color: 'warning',
                timeout: 2000,
                icon: 'warning'
              })
            })
            // if picture is data_url
          }
          this.$refs.personnelFormModal.$refs.refUploaderImage.reset()
        }
      }
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
    },
    clearStudentForm () {
      this.studentInformationForm = {
        prefix: '',
        firstname: '',
        middlename: '',
        surname: '',
        suffix: null,
        idnumber: '',
        keyIndex: '',
        course: '',
        position: '',
        profileImgUrl: '',
        fullname: ''
      }
      this.$refs.personnelFormModal.$refs.refIdnumber.$el.focus()
      this.$refs.personnelFormModal.$refs.refUploaderImage.reset()
    },
    test (test) {
      console.log(test)
      // console.log('test1', this.$refs.personnelFormModal.$refs.refIdnumber)
      // console.log('test', this.$refs.personnelFormModal.$refs.refUploaderImage)
      // console.log(this.$el.personnelFormModal.$refs)
      // var message = test[0].__img['src']
      // var storageRef = fireStorage.ref('images')
      // storageRef.putString(message, 'data_url').then(function (snapshot) {
      //   console.log('Uploaded a data_url string!')
      // })
    }
  },
  created () {
    this.dataReloader()
    // console.log(this.$v.studentInformationForm)
  }
}
</script>
