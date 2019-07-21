<script>
export default {
  props: {
    value: Boolean,
    label: String,
    disabled: Boolean
  }
}
</script>

<template>
  <q-checkbox
    class="q-mb-md"
    :value="value"
    :label="$t(label)"
    @input="$emit('input', $event)" />
    <!-- Todo callback tem um $event -->
</template>
