<template>

  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row no-wrap">
      <div class="text-h6">
        <slot name="headerTitle"></slot>
      </div>
      <q-space />
      <q-btn
        icon="close"
        flat
        round
        size="md"
        class="text-negative"
        v-close-popup
      />

    </q-card-section>

    <q-card-section>
      <div class="row items-center ">
        <!-- <q-form
          autocorrect="off"
          autocapitalize="off"
          autocomplete="off"
          spellcheck="false"
        > -->
        <div class="fit row wrap justify-center  content-center">
          <div class="col-md-6 col-xs-12 q-pr-md-lg">
            <q-uploader
              ref="refUploaderImage"
              label="Student Picture"
              flat
              class="full-width uploaderBug"
              hide-upload-btn
              bordered
              accept="image/*"
              v-on:added="$emit('added', $event)"
            >
              <template v-slot:list="scope">
                <img
                  style="overflow:hidden !important; height:100%; width:100%"
                  :src="studentInformationForm.profileImgUrl"
                  alt=""
                >
              </template>
            </q-uploader>
          </div>
          <div class="q-pt-xs-md q-pt-md-none col-md-6 col-xs-12 q-gutter-y-sm">
            <q-input
              outlined
              dense
              :value="studentInformationForm.idnumber"
              @change="setIdnumber($event.target.value)"
              label="ID number"
              autofocus
              ref="refIdnumber"
              class="col-10"
              mask="#### - ####"
              hide-bottom-space
              :error="validations.idnumber.$error"
            >
              <template
                v-slot:error
                v-if="!validations.idnumber.required"
              >
                Id number is required
              </template>
              <template
                v-slot:error
                v-else-if="!validations.idnumber.minLength"
              >
                Please enter a valid Id number
              </template>
              <template
                v-slot:error
                v-else-if="!validations.idnumber.isUnique"
              >
                ID already registered
              </template>
            </q-input>
            <q-input
              dense
              outlined
              :value="studentInformationForm.firstname"
              @input="setFirstname($event)"
              label="Firstname"
              class="text-capitalize"
              :error="validations.firstname.$error"
              hide-bottom-space
            >
              <template
                v-slot:error
                v-if="!validations.firstname.required"
              >
                Alien is not valid
              </template>
            </q-input>
            <q-input
              dense
              outlined
              :value="studentInformationForm.middlename"
              @input="$emit('update:middlename', $event)"
              label="Middlename"
              class="text-capitalize"
              :error="false"
              hide-bottom-space
            />
            <q-input
              dense
              outlined
              type="text"
              :value="studentInformationForm.surname"
              @input="setSurname($event)"
              label="Surname"
              class="text-capitalize"
              :error="validations.surname.$error"
              hide-bottom-space
            >
              <template
                v-slot:error
                v-if="!validations.surname.required"
              >
                Paul kinahanglan jd ang familyname oi
              </template>
            </q-input>

            <q-select
              dense
              outlined
              :value="studentInformationForm.course"
              @input="$emit('update:course', $event)"
              :options="options"
              label="Course"
              class="text-capitalize"
              :error="validations.course.$error"
              hide-bottom-space
            >
              <template
                v-slot:error
                v-if="!validations.course.required"
              >
                Student Program is required to fill
              </template>
            </q-select>

            <slot name="dialogBtn"></slot>

          </div>
        </div>

        <!-- </q-form> -->

      </div>
    </q-card-section>
    <!-- <pre>{{this.studentInformationForm}}</pre> -->
    <q-inner-loading :showing="loading">
      <q-spinner-gears
        size="50px"
        color="primary"
      />
    </q-inner-loading>
  </q-card>
</template>

<script>

export default {
  props: [
    'studentInformationForm',
    'options',
    'loading',
    'validations'
  ],
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
    test () {
      console.log('test')
    },
    setFirstname (event) {
      this.$emit('update:firstname', event)
      this.validations.firstname.$touch()
    },
    setSurname (event) {
      this.$emit('update:surname', event)
      this.validations.surname.$touch()
    },
    setIdnumber (event) {
      console.log(this.validations.idnumber.required)
      this.$emit('update:idnumber', event)
      this.validations.idnumber.$touch()
    }
  }
}
</script>

<style>
.scroll,
.scroll-x,
.scroll-y .uploaderBug {
  overflow: hidden;
}
</style>
