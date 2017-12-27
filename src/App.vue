<template>
  <div id="app"
   v-bind:class="{move: move}"
   @click="startMove"
   >
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
    },
    methods: {
      startMove () {
        this.move = true
      }
    }
  }
</script>

<style lang="stylus">
  body
    margin 0
    padding 0
    background red
  #app
    height 100vh
    width 100vw
    position relative
  .move
    animation moveUp 0.5s forwards

  @keyframes moveUp
    0% {
      transform translate(0, 0)
    }
    100% {
      transform translate(0, -100%)
    }
</style>
