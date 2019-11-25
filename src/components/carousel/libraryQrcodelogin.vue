<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="300px"
      class="transparent text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide
        name="style"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="style"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="live_tv"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="layers"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="map"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="terrain"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
