<template>
<div class='sign'>
  <van-calendar
  title="日历"
  :poppable="false"
  :show-confirm="false"
  v-model="show" 
  type="range" 
  :style="{ height: '450px' }"
/>
</div>
</template>

<script>

export default {
  name: 'sign',
  data(){
    return{
      show: true,
    }
  },
  methods:{
  }

}

</script>

<style>

</style>