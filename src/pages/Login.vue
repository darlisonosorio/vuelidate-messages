<script>
import AppIcon from 'components/AppIcon'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  components: { AppIcon },
  data: () => ({
    savePassword: false,
    model: {
      username: '',
      password: ''
    }
  }),
  validations: {
    model: {
      username: { required, minLength: minLength(4) },
      password: { required }
    }
  },
  // created () { // função que executa após o componente ser criado
  // updated () { // função que executa após o componente se atualizar
  // beforeDestroy (next) { // função que executa antes do componente ser destruído
  mounted () { // função que executa após a tela renderizar
    this.setDirty()
  },
  methods: {
    setDirty () {
      this.$v.$touch()
    }
  }
}
</script>

<template>
    <q-layout class="flex flex-center bg-red-1 q-pa-md">
      <q-card class="login-card q-pa-md">

        <app-icon class="q-mb-md" />

        <geek-input
          label="Login.username"
          v-model="model.username"
          :error="$v.model.username"
          @input="setDirty" />

        <geek-input
          type="password"
          label="Login.password"
          v-model="model.password"
          :error="$v.model.password"
          @input="setDirty" />

        <geek-check
          label="Login.save_password"
          v-model="savePassword" />

        <q-btn
          class="full-width q-py-md"
          color="primary"
          :disable="$v.model.$error"
          :label="$t('Login.enter')" />

        <q-btn flat
          class="full-width q-py-md"
          color="primary"
          :label="$t('Login.register')" />

      </q-card>
    </q-layout>
</template>

<style lang="stylus" scoped>
  .login-card
    width 100%
    max-width 400px
</style>
