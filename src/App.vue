<template>
  <div id="app"
   v-bind:class="{move: move}"
   @click="startMove"
   >
    <GuidePage/>
    <ClassifyPage/>
  </div>
</template>

<script>
  import GuidePage from './components/guide.vue'
  import ClassifyPage from './components/classify.vue'

  export default {
    name: 'app',
    data () {
      return{
        img1: require('@Images/1_01.png'),
        move: false
      }
    },
    components: {
      GuidePage,
      ClassifyPage
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
