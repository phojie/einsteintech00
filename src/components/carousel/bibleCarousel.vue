<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="white"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      padding
      infinite
      arrows
      height="300px"
      :autoplay="15000"
      class="bg-purple text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg"
        name="1"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2017/09/04/09/38/cross-2713356_960_720.jpg"
        name="2"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2016/01/19/17/49/bible-1149924_960_720.jpg"
        name="3"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2016/11/21/16/09/bible-1846174_960_720.jpg"
        name="4"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2016/10/26/20/28/god-1772560_960_720.jpg"
        name="5"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2017/08/02/15/25/book-2572101_960_720.jpg"
        name="6"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2018/08/30/18/42/jesus-3643027_960_720.jpg"
        name="7"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
        name="8"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_960_720.jpg"
        name="9"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg"
        name="10"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2017/02/19/15/28/italy-2080072_960_720.jpg"
        name="11"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        img-src="https://cdn.pixabay.com/photo/2014/09/10/00/59/utah-440520_960_720.jpg"
        name="12"
        class="column no-wrap flex-center"
      >
        <div class=" custom-caption">
          <div class="text-h6 text-weight-bold">
            <slot></slot>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: '1',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>

<style >
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
