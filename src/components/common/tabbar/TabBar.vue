<template>
<div class="tab-bar">
  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'TabBar'
}

</script>

<style>
.tab-bar{ 
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: aliceblue;
  /* text-shadow: 2px 0 black; */
}
</style>