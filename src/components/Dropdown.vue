<template lang="pug">
  .dropdown(@mouseleave="showMenu = false" )
    .dropbtn(@click="switchMenuDisplay") Saros
    .dropdown-content(v-show="showMenu" @click="showMenu = false")
      template(v-if="isInSession")
        div(v-if="SarosIsOpen" @click="hideSaros") Hide Saros
        div(v-else @click="showSaros") Show Saros
        div(@click="onSessionClose") Leave Session
      template(v-else)
        div(@click='createSession') Create Session
        div Join Session
</template>


<script>
import SessionUtils from './mixins/SessionUtils'
import { mapGetters } from 'vuex';

export default {
  name: 'Dropdown',
  mixins: [SessionUtils],
  data(){
    return {
      showMenu: false
    }
  },
  computed:{
    ...mapGetters({
      isInSession: 'Saros/isInSession',
      SarosIsOpen: 'Saros/isOpen',
      sessionName: 'Wizard/getSessionName'
    }),
  },
  methods: {
    switchMenuDisplay(){
      this.showMenu = !this.showMenu
    }
  }
}

</script>

<style lang='stylus' scoped>
/* The dropdown container */
.dropdown {
  &:hover {
    background-color $darkGrey
  }
}


/* Dropdown button */
.dropdown .dropbtn {
  padding 7.5px 10px
  color $white
  margin 0px
  width 85px
  cursor pointer
}


/* Links inside the dropdown */
.dropdown-content div {
  background-color: $uiGrey
  color: $white;
  padding: 12px 16px;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content div:hover {
  background-color: $darkGrey;
}

</style>
