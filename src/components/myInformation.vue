<template>
	<div class="myInformation-page">
		<div class="List">
			<div class="photo">
				<img :src="img1"  class="animated fadeInDownBig ">
				<p>李彩霞</p>
			</div>
			<ul>
				<li>
					<i class="icon rs-renzhengicondianhua"></i>
					17721291793
				</li>
				<li>
					<i class="icon rs-boshimao2"></i>
					前端开发
				</li>
				<li>
					<i class="icon rs-zhiye2"></i>
					大专
				</li>
				<li>
					<i class="icon rs-custom-wechat"></i>
					lcx1033699626
				</li>
				<li>
					<i class="icon rs-youjian1"></i>
					992381409@qq.com
				</li>
			</ul>
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
		z-index 3
		background-image url('/static/images/1_01.png')
		background-repeat no-repeat
		background-size cover
		position absolute
		.List
			color #ffffff
			font-size 5vw
			.photo
				padding 0 30%
				text-align center
			img
				width 80%
			p
				font-size 8vw
		 ul
			margin 0
			padding 0 0 0 20%
			list-style-type none
			li
				padding 2vw 0
				i
					font-size 6vw
					margin-right 10%
</style>
