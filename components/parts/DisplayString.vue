<template>
    <div :style="style">
        <!-- <fuwa-moji v-for="(char, i) in string" :key="i" :char="char" :index="i"></fuwa-moji> -->
        <span v-for="(char, i) in string" :key="i" :index="i">{{ char }}</span>
    </div>
</template>

<script>
//   import FuwaMoji from './FuwaMoji'
  export default {
    name: 'DisplayString',
    components: {
    //   FuwaMoji
    },
    data() {
      return {
        style: {
        },
      }
    },
    computed: {
      string() {
        return this.$store.state.displayString.split('')
      }
    }
  }
</script>

<style scoped>
    div {
        font-size: 50px;
        margin: 70px auto 0 auto;
        text-align: center;
        position: relative;
        display: table;
    }
</style>