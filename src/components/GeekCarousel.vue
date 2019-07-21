<script>
export default {
  data: () => ({
    slide: 1,
    slides: [
      { name: 1, src: 'https://cdn.quasar.dev/img/mountains.jpg' },
      { name: 2, src: 'https://cdn.quasar.dev/img/parallax1.jpg' },
      { name: 3, src: 'https://cdn.quasar.dev/img/parallax2.jpg' },
      { name: 4, src: 'https://cdn.quasar.dev/img/quasar.jpg' }
    ]
  })
}
</script>

<template>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left">
    <q-carousel-slide
      v-for="(page, index) of slides"
      :key="index"
      :name="page.name"
      :img-src="page.src" />
    </q-carousel>
</template>
