export default {
  methods: {
    drag(e) {
      const DIV = this.$refs.draggable;
      const saros = document.getElementById('Saros');
      const rect = saros.getBoundingClientRect();
      const offset = { x: rect.x - e.clientX, y: rect.y - e.clientY };
      this.isDragging = true
      // console.log(offset)
      const onMove = e => {
        DIV.style.top = (e.clientY + offset.y) + 'px'
        DIV.style.left = (e.clientX + offset.x) + 'px'
      }

      const onDone = () => {
        this.positionSaros(this.over, saros);
        this.isDragging = false
        this.current = this.over
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onDone);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onDone);
    },

    positionSaros(position, saros = document.getElementById('Saros')) {
      if (position === 'right')
        this.dockRight(saros);
      else if (position === 'bottom')
        this.dockBottom(saros);
      else
        this.float(saros);
    },

    dockBottom(saros) {
      const codeRect = this.$refs.code.getBoundingClientRect();
      saros.style.top = `calc(100% - ${this.dragHeight} - 22px)`;
      saros.style.left = codeRect.left + 'px';
      saros.style.width = codeRect.width + 'px';
      saros.style.height = this.dragHeight;

    },
    dockRight(saros) {
      const codeRect = this.$refs.code.getBoundingClientRect();
      saros.style.top = codeRect.top + 'px';
      saros.style.left = `calc(100% - ${this.dragWidth})`;
      saros.style.width = this.dragWidth;
      saros.style.height = codeRect.height + 'px';
    },
    float(saros) {
      const DIV = this.$refs.draggable;
      saros.style.top = DIV.style.top;
      saros.style.left = DIV.style.left;
      saros.style.width = DIV.style.width;
      saros.style.height = DIV.style.height;
    }
  }
}
