<template>
  <q-card>
    <q-img
      :src="product.src"
      basic>
      <div class="absolute-bottom text-h6">{{ product.name }}</div>
    </q-img>

    <q-card-section>
      <div>{{ product.price }}</div>
      <div>{{ product.description }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="stylus" scoped>

</style>
