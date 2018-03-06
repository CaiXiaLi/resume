<template>
	<div
		class="classify-page"
	>
		<div class="imageList">
			<img
				:src="img1"
				class="animated fadeInDown "
				@click.stop="$emit('onChange', 4)"
			>
			<img
				:src="img2"
				class="animated fadeInRight "
				@click.stop="$emit('onChange', 5)"
			>
			<img
				:src="img3"
				class="animated swing infinite"
			>
			<img
				:src="img4"
				class="animated pulse infinite"
				@click.stop="$emit('onChange', 3)"
			>
			<img
				:src="img5"
				@click.stop="$emit('onChange', 6)"
				class="animated flip infinite"
			>
			<img
				:src="img6"
				class="animated slideInUp"
				@click.stop="$emit('onChange', 7)"
			>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
			},
		},

		data () {
			return {
				img1: require('@Images/2-01.png'),
				img2: require('@Images/2-02.png'),
				img3: require('@Images/2-03.png'),
				img4: require('@Images/2-04.png'),
				img5: require('@Images/2-05.png'),
				img6: require('@Images/2-06.png'),
			}
		},
	}
</script>

<style lang="stylus">
	.classify-page
		width 100vw
		height 100vh
		display flex
		flex-direction column
		justify-content space-around
		z-index 2
		background-image url('/static/images/1_01.png')
		background-repeat no-repeat
		background-size cover
		font-size 20vh
		color white
		position absolute
	.imageList
		position relative
		width 100vw
		height 100vh
		overflow hidden
		img
			width 30%
		img:nth-of-type(1)
			position absolute
			top 10%
			left 15%
			width 20%
		img:nth-of-type(2)
			position absolute
			top 20%
			right 10%
			width 20%
		img:nth-of-type(3)
			position absolute
			top 25%
			left 10%
			width 4%
		img:nth-of-type(4)
			position absolute
			top 30%
			left 25%
			width 30%
		img:nth-of-type(5)
			position absolute
			top 60%
			right 15%
			width 15%
		img:nth-of-type(6)
			position absolute
			bottom 0
			left 0
			width 40%
		.fadeInDown
			animation-delay 3s
			-webkit-animation-delay 3s
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

