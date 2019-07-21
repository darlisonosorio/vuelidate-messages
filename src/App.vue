<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import GeekInput from 'components/atoms/GeekInput'
import GeekCheck from 'components/atoms/GeekCheck'
import GeekErrorMessages from 'components/atoms/GeekErrorMessages'

Vue.component('geek-input', GeekInput)
Vue.component('geek-check', GeekCheck)
Vue.component('geek-error-messages', GeekErrorMessages)

export default {
  name: 'App'
}
</script>

<style>
</style>
