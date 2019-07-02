<template lang='pug'>
  .Wrapper(ref="wrapper")
    div.draggable(v-show="isDragging" ref="draggable")
    .dragSurface.dragSurfaceRight(v-show="isDragging" @mouseover="enter('right')" @mouseleave="exit('right')")
    .dragSurface.dragSurfaceBottom(v-show="isDragging" @mouseover="enter('bottom')" @mouseleave="exit('bottom')")
    div.content(:class="getClasses" ref="code")
      SourceCode
</template>

<script>
import SourceCode from './SourceCode'
import Drag from './mixins/drag'
import { mapGetters } from 'vuex';

export default {
  name: 'Layout',
  components: {SourceCode},
  mixins: [Drag],
  data(){
    return {
      isDragging: false,
      over: '',
      current : '',
      dragWidth: '350px',
      dragHeight: '250px'
    }
  },
  computed:{
    ...mapGetters({
      SarosIsOpen: 'Saros/isOpen'
    }),
    getClasses(){
      if(!this.SarosIsOpen) return '';

      switch(this.current){
        case 'bottom': return 'dockBottom';
        case 'right': return 'dockRight';
        default: return '';
      }
    }
  },
  created(){
    window.drag = (e) => this.drag(e);
    document.addEventListener('resize', () => this.positionSaros(this.current))
  },
  methods: {
    enter(name){
      this.over = name;
    },
    exit(name){
      if(name === this.over)
        this.over = ''
    }
  }

}
</script>

<style lang='stylus' scoped>

$dragSurfaceSpace = 100px;
$dragWidth = 350px;
$dragHeight = 250px;

.Wrapper {
  flex 80%
}

.content {
  height 100%
  transition height 200ms, width 200ms
}
.draggable {
  position: absolute;
  width: 400px;
  height: 300px;
  border: 1px solid grey
}
.dragSurface {
  position fixed
  border: 1px solid grey
  transition width 300ms, height 300ms, top 300ms
  transition-timing-function ease-in-out
  &:hover {
    background-color rgba(35, 119, 255, 0.1)
  }
  &Right {
    right 0
    top 0
    width $dragSurfaceSpace
    height "calc(100% - %s)" % $dragSurfaceSpace
    &:hover {
      top 0
      height 100%
      width $dragWidth
    }
  }
  &Bottom {
    bottom 0
    height $dragSurfaceSpace
    width  100%
    &:hover {
      height $dragHeight
    }

  }

}

.dockBottom {
  height "calc(100% - %s)" % $dragHeight
}
.dockRight {
  width  "calc(100% - %s)" % $dragWidth
}
</style>
