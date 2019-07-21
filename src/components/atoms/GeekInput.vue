<script>
export default {
  props: {
    value: [Object, String, Number],
    type: { // parâmetro para configurar o tipo de input
      type: String,
      defaultValue: 'text'
    },
    disabled: { // parâmetro para desabilitar
      type: Boolean,
      default: false
    },
    label: String, // parâmetro para label
    error: Object
  },
  computed: {
    translatedLabel () {
      return this.$t(this.label)
    }
  }
}
</script>

<template>
  <q-input
    class="q-mb-md"
    standout="bg-primary text-white"
    bottom-slots
    :type="type"
    :disabled="disabled"
    :label="translatedLabel"
    :dense="false"
    :value="value"
    :error="error && error.$error"
    @input="$emit('input', $event)">

    <template v-slot:error>
      <geek-error-messages
        :label="translatedLabel"
        :error="error" />
    </template>

  </q-input>
</template>
