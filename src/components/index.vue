<template>
  <div
    class="index-page"
    v-bind:class="{move: move}"
    @click="startMove"
  >
    <div class="imglist">
    </div>
    <div class="bottom">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        move: false
      }
    },
    methods: {
      startMove () {
        this.move = true
      }
    }
  }
</script>

<style lang="stylus">
  .index-page
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content space-around
    z-index 9
    background #df6550
    .imglist
      position relative
      width 100vw
      height 100vw
    .bottom
      width 100vw
      text-align center
      position absolute
      bottom 2vh
      img
        width 20vw
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
