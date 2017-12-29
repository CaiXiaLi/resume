<template>
    <div
        class="classify-page"
        v-bind:class="{move: move}"
        @click="startMove"
    >
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
    .classify-page
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

