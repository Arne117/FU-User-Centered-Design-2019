<template lang="pug">
  #IDE
    Header
    .PageContent
      Iconbar
      Sidebar
      SourceCode
      //- keep-alive
      //-   component(:is='state')
    Bottombar
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import SourceCode from './SourceCode'
import Bottombar from './Bottombar'
import Saros from './Saros'
import Iconbar from './Iconbar'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    SourceCode,
    Bottombar,
    Saros,
    Iconbar
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
    min-height 90vh
    display flex
    flex-direction row
    justify-content center
    align-items stretch
  }
</style>
