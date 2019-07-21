<template>
  <q-page class="column items-center">

    <geek-carousel class="carousel" />

    <div>{{ $t('disclaimer_more') }}</div>

    <div class="full-width row justify-around" >
      <geek-product
        class="card q-ma-md"
        v-for="(product, index) of products"
        :key="index"
        :product="product" />
    </div>

  </q-page>
</template>

<script>
import GeekCarousel from 'components/GeekCarousel'
import GeekProduct from 'components/GeekProduct'

export default {
  name: 'PageIndex',
  components: { GeekCarousel, GeekProduct },
  data: () => ({
    products: [
      {
        name: 'Batom',
        price: 15.00,
        description: 'BATOM LÍQUIDO DE LONGA DURAÇÃO AVON TRUE POWER STAY - 7 ML',
        src: 'https://avon.vteximg.com.br/arquivos/ids/179289-1000-1000/batom-liquido-avon-true-power-stay--caramelito--7-ml-avn4542-ct-1.jpg?v=636965502593100000'
      },
      {
        name: 'Creme',
        price: 20.00,
        description: 'CREME LÍQUIDO DE LONGA DURAÇÃO AVON TRUE POWER STAY - 7 ML',
        src: 'https://avon.vteximg.com.br/arquivos/ids/179136-1000-1000/creme-facial-renew-platinum-fps-30--dia--50-g-avn4408-1.jpg?v=636954225447030000'
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
  .carousel
    height 300px
    width 80%

  .card
    width 100%
    max-width 200px
</style>
