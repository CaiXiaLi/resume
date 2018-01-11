<template>
	<div class="skills-page">
		<div class="backgroundImage">
			<img :src="img1" >
			<img :src="img2" >
			<img :src="img3" >
			<img :src="img4" >
		</div>
		<ul>
			<li>
				<img :src="img5" >
			</li>
			<li>
				<img :src="img6" >
			</li>
			<li>
				<img :src="img7" >
			</li>
			<li>
				<img :src="img8" >
			</li>
			<li>
				<img :src="img9" >
			</li>
			<li>
				<img :src="img10" >
			</li>
			<li>
				<img :src="img11" >
			</li>
			<li>
				<img :src="img12" >
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			img1: require('@Images/5-1.png'),
			img2: require('@Images/5-2.png'),
			img3: require('@Images/5-3.png'),
			img4: require('@Images/5-4.png'),
			img5: require('@Images/5-5.png'),
			img6: require('@Images/5-6.png'),
			img7: require('@Images/5-7.png'),
			img8: require('@Images/5-8.png'),
			img9: require('@Images/5-9.png'),
			img10: require('@Images/5-10.png'),
			img11: require('@Images/5-11.png'),
			img12: require('@Images/5-12.png'),
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
	.skills-page
		width 100vw
		height 100vh
		display flex
		flex-direction column
		justify-content space-around
		z-index 5
		background-image url('/static/images/1_01.png')
		background-repeat no-repeat
		background-size cover
		position absolute
		.backgroundImage
			img:nth-of-type(1)
				position absolute
				top 5vh
				left 10vw
				width 10%
			img:nth-of-type(2)
				position absolute
				top 0
				right -10%
				width 45%
			img:nth-of-type(3)
				position absolute
				top 10%
				left 15%
				width 45%
			img:nth-of-type(4)
				position absolute
				bottom 10%
				left 20%
				width 15%
		ul
			list-style-type none
			padding 0
			margin 0
			position absolute
			li
				display inline-block
				padding 3vh
			img
				height 5vh
</style>
