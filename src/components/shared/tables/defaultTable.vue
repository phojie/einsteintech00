<template>
  <q-table
    :loading="dataLoad"
    :fullscreen.sync="isFullscreen"
    class="text-blue-grey-9"
    :data="studentLists"
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
      <div class="text-h4 text-bold"> All Students</div>

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
      <q-tr :props="props">
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
          <q-avatar size="md">
            <img
              src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
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
</template>
