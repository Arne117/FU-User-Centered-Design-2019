<template lang="pug">
  .dropdown
    .dropbtn
      | Saros
    .dropdown-content
      item(@click='showWizard') Create Session
      item Join Session
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Dropdown',
  methods: {
    ...mapMutations({setWizardView: 'Wizard/setWizardView'}),
    showWizard(){
      this.setWizardView('visible');
    },
    toggleSaros: function () {
      this.displaySaros = !this.displaySaros
    }
  }
}

</script>

<style lang='stylus' scoped>
/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown item{
  // padding top+bottom max. 15px damit Headline max 39px (inkl. 24px fontsize)
  float: left
  padding 7.5px 10px 7.5px 10px
  color white
  margin 0px
  width 160px
  text-decoration: none
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  padding 7.5px 10px 7.5px 10px
  color #fff
  margin 0px
  width 85px
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  background-color: $uiGrey;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content item {
  float: none;
  background-color: $uiGrey
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content item:hover {
  background-color: $darkGrey;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  background-color: $darkGrey
}
</style>
