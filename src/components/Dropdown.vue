<template lang="pug">
  .dropdown
    .dropbtn Saros
    .dropdown-content
      div(@click='showWizard') Create Session
      div Join Session
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Dropdown',
  methods: {
    ...mapMutations({setWizardView: 'Wizard/setWizardView'}),
    showWizard(){
      this.setWizardView('visible');
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
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
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

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
