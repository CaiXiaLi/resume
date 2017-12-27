<template>
    <div
        class="tech-page"
        v-bind:class="{move: move}"
        @click="startMove"
    >
        <h2>
            专业技能
        </h2>
        <div class="techImg">
         
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                move: false
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

