<template lang='pug'>
  div
    Wizard.wizard
    #app
      transition(name='fade' mode='out-in')
        router-view
</template>

<script>
import Wizard from './components/Wizard'
export default {
  name: 'app',
  components: {Wizard}
}
</script>

<style lang='stylus'>
#app {
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  text-align center
  background-color white

  .btn-outline-primary {
    color $darkGreen
    border-color $darkGreen

    &:hover,
    &:active {
      color white
      background-color $darkGreen
    }
  }
}
</style>
