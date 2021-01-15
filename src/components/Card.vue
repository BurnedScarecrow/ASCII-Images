<template>
  <div class="card" ref="card">
    <textarea ref="txt" class="invisible"></textarea>
    <div class="text" ref="text">
      {{ text }}
    </div>
    <img :src="img" alt="" />
    <span class="copy" @click="copyText()">
      <svg viewBox="0 0 392 489" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M266.25 85.4H39.25C17.95 85.4 0.649994 102.7 0.649994 124V449.7C0.649994 471 17.95 488.3 39.25 488.3H266.25C287.55 488.3 304.85 471 304.85 449.7V124C304.75 102.7 287.45 85.4 266.25 85.4ZM277.75 449.6C277.75 456 272.55 461.2 266.15 461.2H39.15C32.75 461.2 27.55 456 27.55 449.6V124C27.55 117.6 32.75 112.4 39.15 112.4H266.15C272.55 112.4 277.75 117.6 277.75 124V449.6Z"
          fill="black"
        />
        <path
          d="M353.05 0H126.05C104.75 0 87.45 17.3 87.45 38.6C87.45 46.1 93.45 52.1 100.95 52.1C108.45 52.1 114.45 46.1 114.45 38.6C114.45 32.2 119.65 27 126.05 27H353.05C359.45 27 364.65 32.2 364.65 38.6V364.3C364.65 370.7 359.45 375.9 353.05 375.9C345.55 375.9 339.55 381.9 339.55 389.4C339.55 396.9 345.55 402.9 353.05 402.9C374.35 402.9 391.65 385.6 391.65 364.3V38.6C391.65 17.3 374.35 0 353.05 0Z"
          fill="black"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: ["img", "text", "size"],
  mounted() {
    this.$refs.text.style.fontSize = this.size + "px";
    this.$refs.text.style.lineHeight = this.size + "px";
  },
  methods: {
    toast: function(message, time) {
      this.msg = message;
      let label = document.getElementById("popUp");
      label.style.transform = "translateX(calc(0% + 20px))";
      label.style.opacity = "1";

      setTimeout(() => {
        label.style.transform = "translateX(-100%)";
        label.style.opacity = "0";
      }, time || 2000);
    },
    copyText() {
      var range = document.createRange();
      this.$refs.txt.value = this.text;
      range.selectNode(this.$refs.txt);
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
      this.toast("Скопировано", 2000);
    }
  }
};
</script>

<style scoped lang="scss">
.invisible {
  position: absolute;
  z-index: -100;
}

.card {
  position: relative;
  display: block;
  border-radius: 8px;
  width: 320px;
  height: fit-content;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background-repeat: no-repeat;

  &:hover img {
    opacity: 0;
  }

  &:hover .copy {
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.38);
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

  .copy {
    display: flex;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.4);
    transition: 0.3s;
    opacity: 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

    &:hover {
      background: var(--bgColor);
    }

    svg {
      width: 13px;
      fill: var(--dark-text);
    }
  }
}
</style>
