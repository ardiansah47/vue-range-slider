<template>
  <div class="app-wrapper">
    <RangeSlider v-model:range="range" :min="0" :max="100" />
    <p>Min Value: {{ range[0] }}</p>
    <p>Max Value: {{ range[1] }}</p>
  </div>
</template>

<script>
import RangeSlider from './components/RangeSlider.vue'
export default {
  components: {
    RangeSlider
  },
  data: () => ({
    range: [0, 100]
  })
}
</script>
<style>
.app-wrapper {
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
}
</style>
