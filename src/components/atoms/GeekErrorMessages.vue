<script>
export default {
  props: {
    error: Object,
    label: String
  },
  computed: {
    requiredError () {
      return this.error && this.error.required === false
    },
    minLengthError () {
      return this.error && this.error.minLength === false
    }
  }
}
</script>

<template>
  <div>
    <div v-if="requiredError">
      {{ label }} é obrigatório
    </div>

    <div v-if="minLengthError">
      {{ label }} deve ter no mínimo {{ error.$params.minLength.min }} caracteres
    </div>
  </div>
</template>
