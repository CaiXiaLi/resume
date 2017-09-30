<template>
  <div id="app">
    <IndexPage />
    <TechPage />
  </div>
</template>

<script>
  import IndexPage from './components/index.vue'
  import TechPage from './components/tech.vue'

  export default {
    name: 'app',
    components: {
      IndexPage,
      TechPage
    }
  }
</script>

<style lang="stylus">
  body
    margin 0
    padding 0
  #app
    height 100vh
    width 100vw
    position relative
    > div
      position absolute
      top 0
      left 0
</style>
