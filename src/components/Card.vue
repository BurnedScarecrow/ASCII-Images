<template>
  <div class="card" ref="card">
    <div class="text" ref="text" :value="text">
      {{ text }}
    </div>
    <img :src="img" alt="" />
  </div>
</template>

<script>
export default {
  props: ["img", "text", "size"],
  mounted() {
    this.$refs.text.style.fontSize = this.size + "px";
    this.$refs.text.style.lineHeight = this.size + "px";
    // this.$refs.card.style.background = `url(${this.img})`;
  }
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: block;
  border-radius: 8px;
  width: 320px;
  height: fit-content;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  // min-width: 0;
  background-repeat: no-repeat;

  &:hover img {
    opacity: 0;
  }

  img {
    transition: 0.3s;
    position: absolute;
    top: 0;
    opacity: 1;
  }

  .text {
    display: block;
    width: 320px;
    overflow: hidden;
    height: fit-content;
    color: var(--dark-text);
    background: var(--bgColor);
    border: 0;
    resize: none;
    cursor: default;
    font-family: "Courier New Cyr", "Courier New", monospace;
  }
}
</style>
