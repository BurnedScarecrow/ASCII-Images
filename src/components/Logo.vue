<template>
  <header>
    <div id="logo">
      <!-- <span>{{ logostr }}</span> -->
      <span>{{ logo.a1 }}</span>
      <span>{{ logo.s1 }}</span>
      <span>{{ logo.c }}</span>
      <span>{{ logo.i1 }}</span>
      <span>{{ logo.i2 }}</span>
      <span> </span>
      <span>{{ logo.i3 }}</span>
      <span>{{ logo.m }}</span>
      <span>{{ logo.a2 }}</span>
      <span>{{ logo.g }}</span>
      <span>{{ logo.e }}</span>
      <span>{{ logo.s2 }}</span>
    </div>
    <nav>
      <span @click="showConverter()">Конвертер</span>
      <span @click="showGallery()">Галерея</span>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        a1: "",
        s1: "",
        c: "",
        i1: "",
        i2: "",
        i3: "",
        m: "",
        a2: "",
        g: "",
        e: "",
        s2: ""
      },
      A1: ["Ӕ", "Å", "Ä", "Ã", "Â", "Á", "Ą", "4", "A", "?"],
      S1: ["Ś", "Ŝ", "Ş", "$", "Ș", "Ş", "5", "S", "?", "!"],
      C: ["Ç", "Ć", "Ĉ", "Ċ", "Č", "Č", "<", "C", "?", "!"],
      I1: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I", "?"],
      I2: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I", "?"],
      I3: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I", "?"],
      M: ["μ", "Ѧ", "ҧ", "м", "m", "?", "$", "%", "!", "@"],
      A2: ["@", "à", "á", "â", "ã", "ä", "å", "a", "!", "@"],
      G: ["ĝ", "&", "ğ", "ġ", "8", "ǵ", "9", "g", "!", "@"],
      E: ["ȅ", "ȇ", "ё", "έ", "з", "e", "?", "$", "%", "!"],
      S2: ["ś", "ŝ", "ş", "š", "ș", "s", "?", "$", "%", "!"]
    };
  },
  mounted() {
    let anim_1, anim_2, anim_3, anim_4, anim_5;
    let anim_6, anim_7, anim_8, anim_9, anim_10, anim_11;

    anim_1 = setInterval(() => {
      this.logo.a1 = this.A1[Math.floor(Math.random() * 10) % this.A1.length];
    }, 100);
    this.logo.s1 = "";

    setTimeout(() => {
      anim_2 = setInterval(() => {
        this.logo.s1 = this.S1[Math.floor(Math.random() * 10) % this.S1.length];
      }, 100);
      this.logo.c = "";
    }, 200);

    setTimeout(() => {
      anim_3 = setInterval(() => {
        this.logo.c = this.C[Math.floor(Math.random() * 10) % this.C.length];
      }, 100);
      this.logo.i1 = "";
    }, 400);

    setTimeout(() => {
      anim_4 = setInterval(() => {
        this.logo.i1 = this.I1[Math.floor(Math.random() * 10) % this.I1.length];
      }, 100);
      this.logo.i2 = "";
    }, 600);

    setTimeout(() => {
      anim_5 = setInterval(() => {
        this.logo.i2 = this.I2[Math.floor(Math.random() * 10) % this.I2.length];
      }, 100);
      this.logo.i3 = "";
    }, 800);

    setTimeout(() => {
      anim_6 = setInterval(() => {
        this.logo.i3 = this.I3[Math.floor(Math.random() * 10) % this.I3.length];
      }, 100);
      this.logo.m = "";
    }, 1000);

    setTimeout(() => {
      anim_7 = setInterval(() => {
        this.logo.m = this.M[Math.floor(Math.random() * 10) % this.M.length];
      }, 100);
      this.logo.a2 = "";
    }, 1200);

    setTimeout(() => {
      anim_8 = setInterval(() => {
        this.logo.a2 = this.A2[Math.floor(Math.random() * 10) % this.A2.length];
      }, 100);
      this.logo.g = "";
    }, 1400);

    setTimeout(() => {
      anim_9 = setInterval(() => {
        this.logo.g = this.G[Math.floor(Math.random() * 10) % this.G.length];
      }, 100);
      this.logo.e = "";
    }, 1600);

    setTimeout(() => {
      anim_10 = setInterval(() => {
        this.logo.e = this.E[Math.floor(Math.random() * 10) % this.E.length];
      }, 100);
      this.logo.s2 = "";
    }, 1800);

    setTimeout(() => {
      anim_11 = setInterval(() => {
        this.logo.s2 = this.S2[Math.floor(Math.random() * 10) % this.S2.length];
      }, 100);
    }, 2000);

    //  ending

    setTimeout(() => {
      clearInterval(anim_1);
      this.logo.a1 = "A";
    }, 1000);
    setTimeout(() => {
      clearInterval(anim_2);
      this.logo.s1 = "S";
    }, 1200);
    setTimeout(() => {
      clearInterval(anim_3);
      this.logo.c = "C";
    }, 1400);
    setTimeout(() => {
      clearInterval(anim_4);
      this.logo.i1 = "I";
    }, 1600);
    setTimeout(() => {
      clearInterval(anim_5);
      this.logo.i2 = "I";
    }, 1800);
    setTimeout(() => {
      clearInterval(anim_6);
      this.logo.i3 = "I";
    }, 2000);
    setTimeout(() => {
      clearInterval(anim_7);
      this.logo.m = "m";
    }, 2200);
    setTimeout(() => {
      clearInterval(anim_8);
      this.logo.a2 = "a";
    }, 2400);
    setTimeout(() => {
      clearInterval(anim_9);
      this.logo.g = "g";
    }, 2600);
    setTimeout(() => {
      clearInterval(anim_10);
      this.logo.e = "e";
    }, 2800);

    setTimeout(() => {
      clearInterval(anim_11);
      this.logo.s2 = "s";
    }, 3000);

    setTimeout(() => {
      document.getElementsByTagName("nav")[0].style.opacity = "1";
    }, 3200);
  },
  methods: {
    pause: function(milliseconds) {
      var dt = new Date();
      while (new Date() - dt <= milliseconds) {
        /* Do nothing */
      }
    },
    showGallery: function() {
      this.$emit("showGallery");
    },
    showConverter: function() {
      this.$emit("showConverter");
    }
  }
};
</script>

<style lang="scss">
header {
  font-family: "Courier New Cyr", "Courier New", "Courier", monospace;
  font-weight: bolder;
  color: var(--normal-text);
  padding: 0px;
  background: var(--bgColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;
  user-select: none;
}

#logo {
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  span {
    width: 30px;
  }
}

nav {
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  opacity: 0;
  transition: all 1s;

  span {
    width: 130px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    border: 1px solid var(--normal-text);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #fafafa;
      background: var(--normal-text);
    }
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.01% {
    opacity: 1;
  }
  to {
    opacity: 1;
  }
}

@media screen and (min-width: 700px) {
  header {
    font-size: 14px;
    min-height: 150px;
  }
  #logo {
    font-size: 3rem;
    width: 400px;
    height: 55px;
    margin: 0 auto;
    text-align: center;
  }
  nav {
    width: 400px;
    margin-left: auto;
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 700px) {
  header {
    font-size: 14px;
    min-height: 150px;
  }
  #logo {
    width: 320px;
    height: 50px;
    font-size: 2.5rem;
    span {
      width: 24px;
    }
  }
  nav {
    width: 320px;
    font-size: 1.1rem;
  }
}

//iPhone 7PLUS
@media screen and (max-width: 414px) {
  header {
    font-size: 12px;
    min-height: 80px;
  }
  #logo {
    width: 270px;
    height: 30px;
    font-size: 1.6rem;
    span {
      width: 18px;
    }
  }
  nav {
    width: 270px;
    font-size: 0.9rem;
    margin-top: 0px;
    justify-content: space-evenly;
    span {
      width: 100px;
      padding: 2px 2px;
    }
  }
}
</style>
