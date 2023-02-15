<template>
  <RouterView></RouterView>
  <footerComponente/>
</template>

<script>
import footerComponente from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    footerComponente
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
