<template>
  <div id="app">
    <Logo
      :activeTab="comp"
      @showGallery="showGallery()"
      @showConverter="showConverter()"
      @hideAll="hideAll()"
      ref="header"
      id="header"
    />
    <section id="content">
      <Main
        ref="converter"
        v-show="comp == 'converter'"
        @showCopy="showCopy()"
        @hideCopy="hideCopy()"
      />
      <Gallery v-show="comp == 'gallery'" />
    </section>

    <div class="round-buttons">
      <div
        id="top-button"
        ref="scrollToTopBtn"
        @click="rootElement.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.2929 18.2929C31.6834 17.9024 32.3166 17.9024 32.7071 18.2929L45.7071 31.2929C46.0976 31.6834 46.0976 32.3166 45.7071 32.7071C45.3166 33.0976 44.6834 33.0976 44.2929 32.7071L32 20.4142L19.7071 32.7071C19.3166 33.0976 18.6834 33.0976 18.2929 32.7071C17.9024 32.3166 17.9024 31.6834 18.2929 31.2929L31.2929 18.2929Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 18C32.5523 18 33 18.4477 33 19V45C33 45.5523 32.5523 46 32 46C31.4477 46 31 45.5523 31 45V19C31 18.4477 31.4477 18 32 18Z"
            fill="black"
          />
        </svg>
      </div>
      <div v-show="copyEnabled" id="copy-button" @click="emitCopy()">
        <svg
          viewBox="0 0 392 489"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M266.25 85.4H39.25C17.95 85.4 0.649994 102.7 0.649994 124V449.7C0.649994 471 17.95 488.3 39.25 488.3H266.25C287.55 488.3 304.85 471 304.85 449.7V124C304.75 102.7 287.45 85.4 266.25 85.4ZM277.75 449.6C277.75 456 272.55 461.2 266.15 461.2H39.15C32.75 461.2 27.55 456 27.55 449.6V124C27.55 117.6 32.75 112.4 39.15 112.4H266.15C272.55 112.4 277.75 117.6 277.75 124V449.6Z"
            fill="black"
          />
          <path
            d="M353.05 0H126.05C104.75 0 87.45 17.3 87.45 38.6C87.45 46.1 93.45 52.1 100.95 52.1C108.45 52.1 114.45 46.1 114.45 38.6C114.45 32.2 119.65 27 126.05 27H353.05C359.45 27 364.65 32.2 364.65 38.6V364.3C364.65 370.7 359.45 375.9 353.05 375.9C345.55 375.9 339.55 381.9 339.55 389.4C339.55 396.9 345.55 402.9 353.05 402.9C374.35 402.9 391.65 385.6 391.65 364.3V38.6C391.65 17.3 374.35 0 353.05 0Z"
            fill="black"
          />
        </svg>
      </div>
      <div id="q-button" @click="showHelp()">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8926 47C32.5182 47 33.0254 46.4928 33.0254 45.8672C33.0254 45.2416 32.5182 44.7344 31.8926 44.7344C31.2669 44.7344 30.7598 45.2416 30.7598 45.8672C30.7598 46.4928 31.2669 47 31.8926 47Z"
            fill="black"
          />
          <path
            d="M40.7849 26.8232C40.7476 21.9515 36.7729 18 31.8926 18C26.9892 18 23 21.9892 23 26.8926C23 27.5182 23.5072 28.0254 24.1328 28.0254C24.7585 28.0254 25.2656 27.5182 25.2656 26.8926C25.2656 23.2385 28.2385 20.2656 31.8926 20.2656C35.5467 20.2656 38.5195 23.2385 38.5195 26.8926C38.5195 26.9127 38.52 26.9328 38.5211 26.9527C38.4982 29.59 36.9223 31.9568 34.4928 32.9941C32.2251 33.9623 30.7598 36.2042 30.7598 38.7057V41.3359C30.7598 41.9616 31.2669 42.4688 31.8926 42.4688C32.5182 42.4688 33.0254 41.9616 33.0254 41.3359V38.7057C33.0254 37.1131 33.9506 35.6891 35.3824 35.0778C38.6664 33.6757 40.7878 30.4627 40.787 26.8923C40.787 26.8691 40.7862 26.8461 40.7849 26.8232Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <div id="popUp"><span v-html="msg"></span></div>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Logo from "./components/Logo.vue";
import Gallery from "./components/Gallery.vue";

export default {
  name: "App",
  components: {
    Gallery,
    Logo,
    Main
  },
  data() {
    return {
      rootElement: document.documentElement,
      comp: "",
      copyEnabled: false,
      msg: "Скопировано"
    };
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
    document.getElementById("header").style.height = window.innerHeight + "px";
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

    emitCopy: function() {
      this.$refs.converter.copyIt();
      this.toast("Скопировано");
    },
    showCopy: function() {
      setTimeout(() => {
        this.copyEnabled = true;
      }, 1000);
    },
    hideCopy: function() {
      this.copyEnabled = false;
    },
    showGallery: function() {
      if (this.comp == "gallery") {
        this.comp = "";
        document.getElementById("header").style.height =
          window.innerHeight + "px";
        this.$refs.header.slideDownOff();
      } else {
        this.comp = "gallery";
        document.getElementById("header").style.height = "80px";
      }
    },

    showHelp: function() {
      this.toast(`Скоро тут что-то будет`);
    },

    showConverter: function() {
      if (this.comp == "converter") {
        this.comp = "";
        document.getElementById("header").style.height =
          window.innerHeight + "px";
        this.$refs.header.slideDownOff();
      } else {
        this.comp = "converter";
        document.getElementById("header").style.height = "80px";
      }
    },

    hideAll: function() {
      this.comp = "";
      document.getElementById("header").style.height =
        window.innerHeight + "px";
      this.$refs.header.slideDownOff();
    },

    handleScroll: function() {
      var scrollTotal =
        this.rootElement.scrollHeight - this.rootElement.clientHeight;
      if (this.rootElement.scrollTop / scrollTotal > 0.5) {
        this.$refs.scrollToTopBtn.style.opacity = 1;
      } else {
        this.$refs.scrollToTopBtn.style.opacity = 0;
      }
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Courier New Cyr";
  src: url(./assets/courier-new-cyr.ttf);
}
:root {
  --bgColor: #fafafa;
  --light-text: #999;
  --dark-text: #444;
  --normal-text: #666;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--bgColor);
}

#header {
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
  position: fixed;
  z-index: 100;
}

#content {
  position: absolute;
  top: 170px;
  width: 100%;
}

#popUp {
  position: fixed;
  display: flex;
  z-index: 9000;
  max-width: 295px;
  width: fit-content;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  color: var(--bgColor);
  border-radius: 5px;
  background: var(--dark-text);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  font-family: "Courier New Cyr", "Courier New", Courier, monospace;
  font-size: 1.1em;
  letter-spacing: 1px;
  text-align: justify;
  left: 0px;
  bottom: 30px;
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.3s;

  span {
    display: block;
    width: 100%;
    img {
      display: block;
    }
  }
}

.round-buttons {
  width: 50px;
  height: fit-content;
  z-index: 1001;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    margin: 10px 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: "Courier New Cyr", "Courier New", "Courier", monospace;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    background: var(--dark-text);
    color: var(--bgColor);
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;

    &#copy-button svg {
      width: 15px;
    }

    svg {
      border-radius: 50%;
      width: 50px;
      height: 50px;

      path {
        fill: var(--bgColor);
        transition: 0.3s;
      }
    }

    &#top-button {
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      background: var(--bgColor);

      svg path {
        fill: var(--dark-text);
      }
    }
  }
}
@media screen and (max-width: 414px) {
  #content {
    position: absolute;
    top: 130px;
    width: 100%;
  }
}
</style>
