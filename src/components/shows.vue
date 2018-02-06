<template>
	<div
		class="shows-page"
	>
		<div class="titleHead">
			<img :src="img1" >
		</div>
		<!-- <div class="showList">
			<ul>
				<li>
					<img :src="img4" >
				</li>
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
				<li>
					<img :src="img13" >
				</li>
			</ul>
		</div>
		<div class="footer_btn">
			<img :src="img2" >
			<img :src="img3" >
		</div> -->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				img1: require('@Images/6-1.png'),
				img2: require('@Images/6-2.png'),
				img3: require('@Images/6-3.png'),
				img4: require('@Images/6-4.png'),
				img5: require('@Images/6-5.png'),
				img6: require('@Images/6-6.png'),
				img7: require('@Images/6-7.png'),
				img8: require('@Images/6-8.png'),
				img9: require('@Images/6-9.png'),
				img10: require('@Images/6-10.png'),
				img11: require('@Images/6-11.png'),
				img12: require('@Images/6-12.png'),
				img13: require('@Images/6-13.png'),
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
	.shows-page
		width 100vw
		height 100vh
		display flex
		flex-direction column
		justify-content space-around
		z-index 6
		background-image url('/static/images/1_01.png')
		background-repeat no-repeat
		background-size cover
		position absolute
		.titleHead
			img
				position absolute
				top 8%
				left 30%
				width 40%
</style>
