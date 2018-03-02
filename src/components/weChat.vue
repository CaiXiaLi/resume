<template>
	<div class="wechat-page">
		<div class="backgroundImage">
			<img :src="img1" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				img1: require('@Images/7-01.png')
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
			width 50vw
			margin-left 15vh
			img
				width 100%
</style>
