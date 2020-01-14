<template>
  <q-card
    class="text-blue-grey-9 row wrap inset-shadow"
  >
      <q-card-section class=" col-12">
        <div class="text-h5 text-weight-bolder text-primary"><slot></slot></div>
        <q-card flat class="q-mt-md">
          <q-card-section class="q-pt-xs">
            <div style="font-size:15px" class="text-bold">Visitor</div>
            <q-item class="q-pa-none" dense>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="libraryVisitor[0].profileImgUrl">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{libraryVisitor[0].fullname}}</q-item-label>
                <q-item-label caption>
                  {{libraryVisitor[0].course}}
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" outline text-color="white">
                  <span class="text-subtitle2">{{libraryVisitor[0].numberVisit}}</span>
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
        <q-separator></q-separator>
        <q-card flat>
          <q-card-section class="q-pt-xs">
            <div style="font-size:15px" class="text-bold">Borrower</div>
            <q-item class="q-pa-none" dense>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>TBD</q-item-label>
                <q-item-label caption>
                  TBD
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                 <q-avatar color="primary" outline text-color="white">
                  <span class="text-subtitle2"></span>
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
        <q-separator></q-separator>
        <q-card flat>
          <q-card-section class="q-pt-xs">
            <div style="font-size:15px" class="text-bold">Reader</div>
            <q-item class="q-pa-none" dense>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>TBD</q-item-label>
                <q-item-label caption>
                  TBD
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" outline text-color="white">
                  <span class="text-subtitle2"></span>
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
        <q-separator></q-separator>
        <q-card flat>
          <q-card-section class="q-pt-xs">
            <div style="font-size:15px" class="text-bold">Internet User</div>
            <q-item class="q-pa-none" dense>
              <q-item-section avatar>
                <q-avatar color="deep-orange" text-color="white">
                  T
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>TBD</q-item-label>
                <q-item-label caption>
                  TBD
                </q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" outline text-color="white">
                  <span class="text-subtitle2"></span>
                </q-avatar>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('admin', ['libraryVisitor'])
  }
}
</script>
