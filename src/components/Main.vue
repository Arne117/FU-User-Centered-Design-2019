<template lang="pug">
  #IDE
    Header
    .PageContent
      Sidebar
      SourceCode
      //- keep-alive
      //-   component(:is='state')
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import SourceCode from './SourceCode'
import Saros from './Saros'
import Wizard from './Wizard'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    SourceCode,
    Saros,
    Wizard
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  #IDE {
    background-color #c2c2c2
  }

  .PageContent {
    min-height 95vh
    display flex
    flex-direction row
    justify-content center
    align-items stretch
  }
</style>
