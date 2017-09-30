<template>
  <div
    class="index-page"
    v-bind:class="{move: move}"
    @click="startMove"
  >
    <div class="imglist">
      <img :src="img1">
      <img :src="img2">
      <img :src="img3">
      <img :src="img4">
      <img :src="img5">
    </div>
    <div class="bottom">
      <img :src="img6">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img1: require('@Images/circle.png'),
        img2: require('@Images/01-2.png'),
        img3: require('@Images/01-3.png'),
        img4: require('@Images/01-4.png'),
        img5: require('@Images/01-5.png'),
        img6: require('@Images/01-6.png'),
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
      img
        position absolute
        top 0
        right 0
      img:nth-of-type(1)
        width 90vw
        padding 0 5%
       
      img:nth-of-type(2)
        width 45vw
        left 2%
        top 20%
      img:nth-of-type(3)
        width 35vw
        right 2%
        top 30%
      img:nth-of-type(4)
        width 20vw
        right 5%
        top 10%
      img:nth-of-type(5)
        width 55vw
        left 20%
        top -5%
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
