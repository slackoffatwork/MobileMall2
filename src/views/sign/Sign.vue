<template>
  <div class="sign">
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      v-model="show"
      type="range"
      :min-date="minDate"
      :max-date="maxDate"
      :allow-same-day = "true"
      :style="{ height: '450px' }"
    />
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      show: true,
      minDate: new Date(2023, 0, 1),
      maxDate: new Date(2023, 11, 31),
    };
  },
  methods: {
  },
};
</script>

<style>
</style>