<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <q-carousel
          swipeable
          animated
          v-model="slide"
          infinite
          :autoplay=15000
          fullscreen
        >
          <q-carousel-slide
            :name="1"
            class="imgsrc"
          />
          <q-carousel-slide
            :name="2"
            class="imgsrc2"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="imgsrc3"
          />
          <q-carousel-slide
            :name="4"
            class="imgsrc4"
          />
          <q-carousel-slide
            :name="5"
            class="imgsrc5"
          />
        </q-carousel>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style>
.imgsrc {
  background-image: url("/statics/God/Q1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc2 {
  background-image: url("/statics/God/Q2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc3 {
  background-image: url("/statics/God/Q3.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc4 {
  background-image: url("/statics/God/Q4.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc5 {
  background-image: url("/statics/God/Q5.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
