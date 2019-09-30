<template>
    <div class="gameDisplay" :style="style" :class="klass">
        <!-- <time-bar></time-bar> -->
        <display-string></display-string>
        <strings></strings>
        <div class="text-muted text-center">↑のアルファベットの文字をタイプしてください</div>
    </div>
</template>

<script>
//   import Strings from './parts/Strings'
//   import DisplayString from './parts/DisplayString'
//   import TimeBar from './parts/TimeBar'
    import Strings from '~/components/parts/Strings.vue'
    import DisplayString from '~/components/parts/DisplayString.vue'

  export default {
    name: 'GameDisplay',
    components: {
      Strings,
      DisplayString
    //   TimeBar
    },
    data() {
      return {
        style: {},
        klass: []
      }
    },
    computed: {
      missCount() {
        return this.$store.state.missCount
      }
    },
    watch: {
      missCount() {
        this.klass = ['damaged']
        setTimeout(() => {
          this.klass = []
        }, 200)
      }
    }
  }
</script>