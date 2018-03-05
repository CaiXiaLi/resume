<template>
	<div
		id="app"
		@click="currentIndex++"
	>
		<GuidePage :style="{top: currentIndex > 0 ? 0 : '100vh'}"/>
		<ClassifyPage
			v-model="currentIndex"
			:style="{top: currentIndex > 1 ? 0 : '100vh'}"
		/>
		<MyInformation :style="{top: currentIndex > 2 ? 0 : '100vh'}"/>
		<WorkExperience :style="{top: currentIndex > 3 ? 0 : '100vh'}"/>
		<Skills :style="{top: currentIndex > 4 ? 0 : '100vh'}"/>
		<Shows :style="{top: currentIndex > 5 ? 0 : '100vh'}"/>
		<Wechat :style="{top: currentIndex > 6 ? 0 : '100vh'}"/>
	</div>
</template>

<script>
	import GuidePage from './components/guide.vue'
	import ClassifyPage from './components/classify.vue'
	import MyInformation from './components/myInformation.vue'
	import WorkExperience from './components/workExperience.vue'
	import Skills from './components/skills.vue'
	import Shows from './components/shows.vue'
	import Wechat from './components/wechat.vue'
	export default {
		name: 'app',
		data () {
			return{
				currentIndex: 2,
			}
		},
		components: {
			GuidePage,
			ClassifyPage,
			MyInformation,
			WorkExperience,
			Skills,
			Shows,
			Wechat
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
	body
		margin 0
		padding 0
	#app
		height 100vh
		width 100vw
		position relative
		overflow hidden
		color #ffffff
		font-size 5vw
		> div
			top: 100vh
			transition: all .5s ease
	.move
		animation moveUp 0.3s forwards
	@keyframes moveUp
		0% {
			transform translate(0, 0)
		}
		100% {
			transform translate(0, 100%)
		}
</style>
