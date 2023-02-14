<template>
  <headerComponente/>
  <mainPrincipal/>
  <footerComponente/>
</template>

<script>
import headerComponente from './components/Header.vue';
import mainPrincipal from './components/MainPrincipal.vue';
import footerComponente from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    headerComponente,
    mainPrincipal,
    footerComponente
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
