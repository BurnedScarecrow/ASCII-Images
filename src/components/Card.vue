<template>
  <div class="card">
    <img :src="img" />
    <div class="text" :style="'font-size: ' + size + 'px'">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "text", "size"],
  mounted() {}
};
</script>

<style scoped>
.text {
  font-family: "Courier New Cyr, " Courier New "", arial, monospace;
}
</style>
