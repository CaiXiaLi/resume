<template>
	<div class="shows-page">
		<div class="icon rs-xiangzuojiantou"
			@click="$emit('onChange', 1)"
			>
		</div>
		<div class="imager__wrapper">
			<div
				class="icon rs-left1"
				@click.stop="activeIndex++"
				v-bind:class="activeIndex >= 0 && activeIndex > images.length-1  ? 'hidden':'show' "
			>
			</div>
			<div class="imager__content">
				<template v-for="item,index in images">
					<img :src="item" :style="getStyle(index, item)" />
				</template>
			</div>
			<div
				class="icon rs-right"
				@click.stop="activeIndex--"
				v-bind:class="activeIndex < 0 && activeIndex < images.length-1 ?'hidden':'show' "
			>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	data: () => ({
		images: [
			require('@Images/6-4.png'),
			require('@Images/6-5.png'),
			require('@Images/6-6.png'),
			require('@Images/6-7.png'),
			require('@Images/6-8.png'),
			require('@Images/6-9.png'),
			require('@Images/6-10.png'),
			require('@Images/6-11.png'),
			require('@Images/6-12.png'),
			require('@Images/6-13.png')
			],
		activeIndex: 6,
		img1: require('@Images/6-2.png'),
		img2: require('@Images/6-3.png')
	}),

	mounted () {
		// setInterval(() => {
		// 	this.activeIndex++
		// }, 1000)
	},
	methods: {
		getStyle (index, item) {
			const position = index - this.activeIndex
			return {
				opacity: 1 - 0.2 * Math.abs(position),
				left: position * 15 + 'px',
				zIndex: 10 - Math.abs(position),
			}
		},
	},
}
</script>

<style lang="stylus">
.shows-page
	width 100vw
	height 100vh
	display flex
	flex-direction column
	justify-content space-start
	z-index 6
	background-image url('/static/images/1_01.png')
	background-repeat no-repeat
	background-size cover
	position absolute
	.icon
		font-size 40px
		z-index 16
	.rs-xiangzuojiantou
			font-size 30px
			padding 5vw
	.hidden
		visibility hidden
	.show
		visibility visible
	.imager__wrapper
		flex 1
		width 100vw
		display flex
		align-items center
		justify-content space-between
		.icon
			font-size 50px !important
	.imager__content
		width 60vw
		height 97.86vw
		// flex 1
		position relative
		text-align center
	.imager__content img
		position absolute
		width 60vw
		transition all .5s ease
	.footer_btn
		position absolute
		width 100%
		bottom 20%
		left 0
		img:nth-of-type(1)
			position absolute
			width 30%
			left 2%
		img:nth-of-type(2)
			position absolute
			width 26%
			right 2%
</style>
