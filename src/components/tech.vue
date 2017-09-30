<template>
	<div
		class="tech-page"
		v-bind:class="{move: move}"
		@click="startMove"
	>
		<h2>
			专业技能
			<img :src="img1">
		</h2>
		<div class="techImg">
			<img :src="img2" >
			<img :src="img3" >
			<img :src="img4" >
			<img :src="img5" >
			<img :src="img6" >
			<img :src="img7" >
			<img :src="img8" >
			<img :src="img9" >
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				move: false,
				img1: require('@Images/02-1.png'),
				img2: require('@Images/02-2.png'),
				img3: require('@Images/02-3.png'),
				img4: require('@Images/02-4.png'),
				img5: require('@Images/02-5.png'),
				img6: require('@Images/02-6.png'),
				img7: require('@Images/02-7.png'),
				img8: require('@Images/02-8.png'),
				img9: require('@Images/02-9.png')
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
	.tech-page
		height 100vh
		width 100vw
		background #212136
		h2
			position relative
			z-index 1
			color #212136
			font-size 20%
			img
				position absolute
				top 2%
				left 5%
				z-index -1
				width 80vw
				
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

