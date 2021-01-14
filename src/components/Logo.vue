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
    <!-- <span>{{ A1 }}</span>
    <span>{{ S1 }}</span>
    <span>{{ C }}</span>
    <span>{{ I1 }}</span>
    <span>{{ I2 }}</span>
    <span>{{ I3 }}</span>
    <span>{{ M }}</span>
    <span>{{ A2 }}</span>
    <span>{{ G }}</span>
    <span>{{ E }}</span>
    <span>{{ S2 }}</span> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      logo: {
        a1: "?",
        s1: "?",
        c: "?",
        i1: "?",
        i2: "?",
        i3: "?",
        m: "?",
        a2: "?",
        g: "?",
        e: "?",
        s2: "?"
      },
      A1: ["Ӕ", "Å", "Ä", "Ã", "Â", "Á", "Ą", "4", "A"],
      S1: ["Ś", "Ŝ", "Ş", "$", "Ș", "Ş", "5", "S"],
      C: ["Ç", "Ć", "Ĉ", "Ċ", "Č", "Č", "<", "C"],
      I1: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I"],
      I2: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I"],
      I3: ["1", "1", "Ì", "Í", "Î", "Ï", "Ĭ", "ĺ", "I"],
      M: ["μ", "Ѧ", "ҧ", "м", "m"],
      A2: ["@", "à", "á", "â", "ã", "ä", "å", "a"],
      G: ["ĝ", "&", "ğ", "ġ", "8", "ǵ", "9", "g"],
      E: ["ȅ", "ȇ", "ё", "έ", "з", "e"],
      S2: ["ś", "ŝ", "ş", "š", "ș", "s"]
    };
  },
  mounted() {
    setInterval(() => {
      this.logo.a1 = this.A1[Math.floor(Math.random() * 10) % this.A1.length];
      this.logo.s1 = this.S1[Math.floor(Math.random() * 10) % this.S1.length];
      this.logo.c = this.C[Math.floor(Math.random() * 10) % this.C.length];
      this.logo.i1 = this.I1[Math.floor(Math.random() * 10) % this.I1.length];
      this.logo.i2 = this.I2[Math.floor(Math.random() * 10) % this.I2.length];
      this.logo.i3 = this.I3[Math.floor(Math.random() * 10) % this.I3.length];
      this.logo.m = this.M[Math.floor(Math.random() * 10) % this.M.length];
      this.logo.a2 = this.A2[Math.floor(Math.random() * 10) % this.A2.length];
      this.logo.g = this.G[Math.floor(Math.random() * 10) % this.G.length];
      this.logo.e = this.E[Math.floor(Math.random() * 10) % this.E.length];
      this.logo.s2 = this.S2[Math.floor(Math.random() * 10) % this.S2.length];
    }, 700);
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
  // border: 1px solid #000;
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
