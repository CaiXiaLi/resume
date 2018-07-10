<template>
	<div
		id="app"
		@click="currentIndex++"
	>
		<GuidePage
			:style="{top: currentIndex > 0 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<ClassifyPage
			:style="{top: currentIndex > 1 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<MyInformation
			:style="{top: currentIndex > 2 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<WorkExperience
			:style="{top: currentIndex > 3 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<Skills
			:style="{top: currentIndex > 4 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<Shows
			:style="{top: currentIndex > 5 ? 0 : '100vh'}"
			@onChange="onIndexChange"
		/>
		<Wechat
			:style="{top: currentIndex > 6 ? 0 : '100vh'}"
		/>
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
				currentIndex: 1,
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
			onIndexChange (index) {
				this.currentIndex = index
				console.log(this.currentIndex)
			},
		},
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
