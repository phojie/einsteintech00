<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <q-carousel
          swipeable
          animated
          v-model="slide"
          infinite
          :autoplay=25000
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
  background-image: url("/statics/God/Q6.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc2 {
  background-image: url("/statics/God/Q7.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc3 {
  background-image: url("/statics/God/Q8.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc4 {
  background-image: url("/statics/God/Q9.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.imgsrc5 {
  background-image: url("/statics/God/Q10.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
