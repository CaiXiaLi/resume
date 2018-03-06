<template>
	<div
	class="workExperience-page"
	>
		<div class="icon rs-left1"
			@click="$emit('onChange', 1)"
		>
		</div>
		<div class="Imagelist">
			<img :src="img1">
			<img :src="img2">
			<img :src="img3">
			<img :src="img4">
			<img :src="img5">
		</div>
		<div class="text">
			<h4>上海魅妆网络科技有限公司</h4>
			<h5>移动端开发</h5>
			<p>职位范围：
				<span>用html5,css3,JavaScript,angularJs,less,Zepto.js等前端技术，构建移动端页面应用开发，根据设计图完成微信商城-订单-社区交互-发帖-个人中心等开发，交互体验效果，前后端数据对接与bug调试。
				</span>
			</p>
			<h4>杭州牛图文化创意有限公司</h4>
			<h5>平面设计师</h5>
			<p>职位范围：
				<span>运用photoShop，LR等修图设计软件对商品图片进行美化，修饰，海报设计。
				</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			img1: require('@Images/4-0.png'),
			img2: require('@Images/4-1.png'),
			img3: require('@Images/4-2.png'),
			img4: require('@Images/1_08.png'),
			img5: require('@Images/1_10.png'),
			}
		}
	}
</script>

<style lang="stylus">
	.workExperience-page
		width 100vw
		height 100vh
		display flex
		flex-direction column
		justify-content space-start
		z-index 4
		background-image url('/static/images/1_01.png')
		background-repeat no-repeat
		background-size cover
		position absolute
		.rs-left1
			font-size 30px
			padding 5vw 2vw
			z-index 4
		.Imagelist
			img:nth-of-type(1)
				position absolute
				top 8%
				left 30%
				width 50%
			img:nth-of-type(2)
				position absolute
				top 5%
				left 3%
				width 15%
			img:nth-of-type(3)
				position absolute
				top 50%
				right -5%
				width 25%
			img:nth-of-type(4)
				position absolute
				top 15%
				left 10%
				width 5%
			img:nth-of-type(5)
				position absolute
				bottom -30%
				left -10%
				width 100%
		.text
			position absolute
			top 15%
			left 15%
			padding 0 2vw
			h4
				margin 3vw 0
			h4:nth-of-type(2)
				margin-top 10vh
				color #dadad7
			h5
				margin 3vw 0
				color #dadad7
			p
				font-size 4vw
				color #dadad7
				span
					word-break break-all
</style>
