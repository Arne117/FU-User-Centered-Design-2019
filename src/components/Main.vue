<template lang="pug">
  #IDE
    Header
    .PageContent
      Iconbar
      Sidebar
      Layout
    Bottombar
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import SourceCode from './SourceCode'
import Bottombar from './Bottombar'
import Saros from './Saros'
import Iconbar from './Iconbar'
import Layout from './Layout'

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    SourceCode,
    Bottombar,
    Saros,
    Iconbar,
    Layout
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  #IDE {
    background-color #c2c2c2
    height 100vh
  }

  .PageContent {
    height calc(100% -  63px) // 39 px for the header and 24 px for the bottom bar
    display flex
    flex-direction row
    justify-content center
    align-items stretch
  }
</style>
