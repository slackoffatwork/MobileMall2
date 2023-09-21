<template>
<div class='tab-control'>
  <div v-for="(item,index) in titles" 
  class="tab-control-item" 
  :class="{active: index === currentIndex}"
  @click="itemClick(index)">
    <span >{{item}}</span>
  </div>
</div>
</template>

<script>

export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}

</script>

<style>
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: aliceblue;
}
.tab-control-item{
  flex: 1;
  text-align: center;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: rgb(255, 87, 119);
  
}
.active span {
  border-bottom: 2px solid rgb(255, 87, 119);
}
</style>