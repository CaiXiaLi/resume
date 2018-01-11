<template>
  <div
    class="wechat-page"

  >
    <div class="backgroundImage">
      微信
      <!-- <img :src="img2"  class="animated fadeInDownBig ">
      <img :src="img3"  class="animated swing infinite">
      <img :src="img6" class="animated slideInRight ">
      <img :src="img7" >
      <img :src="img8" >
      <img :src="img9" class="animated jello ">
      <img :src="img10" class="animated rotateIn "> -->
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img2: require('@Images/1_02.png'),
        img3: require('@Images/1_03.png'),
        img6: require('@Images/1_06.png'),
        img7: require('@Images/1_07.png'),
        img8: require('@Images/1_08.png'),
        img9: require('@Images/1_09.png'),
        img10: require('@Images/1_10.png'),
        move: false
      }
    },
    methods: {
      startMove () {
        this.move = true
        console.log("1ture")
      }
    }
  }
</script>

<style lang="stylus">
  .wechat-page
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content space-around
    z-index 7
    background-image url('/static/images/1_01.png')
    background-repeat no-repeat
    background-size cover
    position absolute
    .backgroundImage
      position relative
      width 100vw
      height 100vh
      overflow hidden
      img:nth-of-type(1)
        position absolute
        top 20%
        left 20%
        width 70%
      img:nth-of-type(2)
        position absolute
        top 5vh
        left 10%
        width 10%
      img:nth-of-type(3)
        position absolute
        top 55%
        right 15%
        width 10%
      img:nth-of-type(4)
        position absolute
        bottom 24%
        left 20%
        width 8%
      img:nth-of-type(5)
        position absolute
        bottom 18%
        right 17%
        width 8%
      img:nth-of-type(6)
        position absolute
        bottom 20%
        right 40%
        width 18%
        z-index 8
      img:nth-of-type(7)
        position absolute
        bottom -20%
        right 10%
        width 80%
  .move
    animation moveUp 0.5s forwards
  @keyframes moveUp
    0% {
      transform translate(0, 0)
    }
    100% {
      transform translate(0, 100%)
    }
</style>
