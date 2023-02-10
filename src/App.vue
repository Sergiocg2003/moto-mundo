<template>
  <headerComponente/>
  <h1>Hola</h1>
  <footerComponente/>
</template>

<script>
import headerComponente from './components/Header.vue';
import footerComponente from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    headerComponente,
    footerComponente
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
