<template>
  <div
    class="myInformation-page"
  >
    <div class="photo">
      <img :src="img1"  class="animated fadeInDownBig ">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img1: require('@Images/3-01.png')
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  .myInformation-page
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content space-around
    z-index 7
    background-image url('/static/images/1_01.png')
    background-repeat no-repeat
    background-size cover
    .backgroundImage
      position relative
      width 100vw
      height 100vh
      overflow hidden
</style>
