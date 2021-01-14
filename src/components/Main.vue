<template>
  <div>
    <form id="form">
      <input
        type="file"
        ref="myFiles"
        hidden
        accept=".png,.jpg,.gif,.bmp"
        id="file"
        @change="onFileChange($event)"
      />
      <span id="file-span">
        <label id="file-button" for="file">Файл</label>
      </span>
      <span title="Инвертировать">
        <label for="invert" id="invert-label">
          <svg
            viewBox="0 0 459 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M357 229.5C357 158.1 300.9 102 229.5 102V357C300.9 357 357 300.9 357 229.5ZM408 0H51C22.95 0 0 22.95 0 51V408C0 436.05 22.95 459 51 459H408C436.05 459 459 436.05 459 408V51C459 22.95 436.05 0 408 0ZM408 408H229.5V357C158.1 357 102 300.9 102 229.5C102 158.1 158.1 102 229.5 102V51H408V408Z"
              fill="black"
            />
          </svg>

          {{ invert ? "Вкл" : "Выкл" }}
        </label>
        <input
          id="invert"
          type="checkbox"
          v-model="invert"
          @change="fillCanvas()"
        />
      </span>
      <span title="Размер символов">
        <label for="text-size">
          <svg
            viewBox="0 0 512 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M464.707 432L270.707 0H241.127L55.127 432H0V462H160V432H87.79L135.582 321H311.974L361.821 432H312V462H512V432H464.707ZM148.498 291L221.921 120.47L298.501 291H148.498Z"
              fill="black"
            />
          </svg>
        </label>
        <select id="text-size" v-model="fontSize" @change="fillCanvas()">
          <option
            :value="i"
            v-for="i in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]"
            :key="i"
            >{{ i }}px</option
          >
        </select>
      </span>
      <span title="Контрастность">
        <label for="contrast">
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256 0C114.509 0 0 114.497 0 256C0 397.491 114.497 512 256 512C397.491 512 512 397.503 512 256C512 114.509 397.503 0 256 0ZM271 481.513V30.487C387.26 38.051 482 134.618 482 256C482 377.349 387.315 473.945 271 481.513Z"
              fill="black"
            />
          </svg>
        </label>
        <select id="contrast" v-model="contrast" @change="fillCanvas()">
          <option
            :value="i"
            v-for="i in [
              -100,
              -90,
              -80,
              -70,
              -60,
              -50,
              -40,
              -30,
              -20,
              -10,
              0,
              10,
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90,
              100
            ]"
            :key="i"
            >{{ i }}%</option
          >
        </select>
      </span>
    </form>

    <div id="container">
      <textarea
        id="textbox"
        v-show="filename && output"
        spellcheck="false"
      ></textarea>
      <canvas id="image" v-show="filename && output"></canvas>
      <label v-show="!filename" for="file" id="file-icon">
        <svg
          viewBox="0 0 200 200"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M123.577 34.1064V-0.390625H42.3069C31.7768 -0.390625 23.0472 8.28705 23.0472 18.8156V180.403C23.0472 190.933 31.7768 199.609 42.3069 199.609H158.286C168.814 199.609 177.544 190.932 177.544 180.403V56.2225H145.745C133.471 56.2225 123.577 46.3287 123.577 34.1064ZM66.222 98.6038L97.2279 65.3244C98.0213 64.4775 99.1322 64.0015 100.348 64.0015C101.566 64.0015 102.623 64.4775 103.47 65.3244L134.476 98.6038C136.063 100.298 135.958 102.995 134.264 104.584C133.471 105.324 132.412 105.695 131.408 105.695C130.295 105.695 129.132 105.219 128.286 104.372L104.529 78.9749V139.45C104.529 141.779 102.625 143.683 100.296 143.683C97.9679 143.683 96.0636 141.779 96.0636 139.45V78.9749L72.4125 104.372C70.8256 106.064 68.1263 106.171 66.4341 104.584C64.7404 102.995 64.6351 100.351 66.222 98.6038ZM148.073 167.334C148.073 169.663 146.169 171.567 143.84 171.567H56.7509C54.4224 171.567 52.5181 169.663 52.5181 167.334C52.5181 165.006 54.4224 163.101 56.7509 163.101H143.894C146.222 163.101 148.073 165.007 148.073 167.334Z"
            fill="none"
          />
          <path
            d="M145.746 47.757H171.724L132.042 6.11731V34.1065C132.042 41.6733 138.126 47.757 145.746 47.757Z"
            fill="none"
          />
        </svg>
      </label>
      <div id="file-icon" v-show="filename && !output" class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <canvas id="compressed" hidden></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filename: "",
      compressed: null,
      container: null,
      textbox: null,
      image: null,
      img: null,
      WIDTH: 500,
      oldWidth: 0,
      fontSize: 5,
      invert: false,
      contrast: 0,
      output: "",
      lightness: { r: 0.2126, g: 0.7152, b: 0.0722 },
      chars: `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^\`'.\u00A0`
    };
  },
  mounted() {
    this.checkWidth();
    this.oldWidth = this.WIDTH;
    this.image = document.getElementById("image");
    this.compressed = document.getElementById("compressed");
    this.container = document.getElementById("container");
    this.textbox = document.getElementById("textbox");
    this.img = new Image();
    let cont = this;
    window.addEventListener("resize", () => {
      cont.onResize();
    });
  },
  watch: {
    output: function(val) {
      if (val != "") {
        this.$emit("showCopy");
      } else {
        this.$emit("hideCopy");
      }
    },
    filename: function(val) {
      if (val != "") {
        this.$emit("showCopy");
      } else {
        this.$emit("hideCopy");
      }
    }
  },
  methods: {
    copyIt: function() {
      this.textbox.select();
      document.execCommand("copy");
      this.textbox.blur();
      this.textbox.value = this.output;
    },

    checkWidth: function() {
      if (window.innerWidth > 1024) {
        this.WIDTH = (window.innerWidth * 0.9) / 2 - 100;
      } else {
        this.WIDTH = window.innerWidth * 0.9 - 50;
      }
    },

    onResize: function() {
      this.checkWidth();
      if (this.WIDTH != this.oldWidth) this.fillCanvas();
      this.oldWidth = this.WIDTH;
    },

    onFileChange(e) {
      this.filename = "";
      this.output = "";
      this.textbox.value = "";
      this.checkWidth;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.filename = files[0].name;
      this.createImage(files[0]);
    },

    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.img.src = e.target.result;
      };
      let cont = this;
      reader.onloadend = function() {
        setTimeout(() => {
          cont.fillCanvas();
        }, 500);
      };

      reader.readAsDataURL(file);
    },

    contrastImage: function(imageData, contrast) {
      // contrast as an integer percent
      var data = imageData.data; // original array modified, but canvas not updated
      contrast *= 2.55; // or *= 255 / 100; scale integer percent to full range
      var factor = (255 + contrast) / (255.01 - contrast); //add .1 to avoid /0 error

      for (var i = 0; i < data.length; i += 4) {
        data[i] = factor * (data[i] - 128) + 128; //r value
        data[i + 1] = factor * (data[i + 1] - 128) + 128; //g value
        data[i + 2] = factor * (data[i + 2] - 128) + 128; //b value
      }
      return imageData; //optional (e.g. for filter function chaining)
    },

    fillCanvas: function() {
      this.checkWidth();
      let context = this.image.getContext("2d");
      let ctx = this.compressed.getContext("2d");
      if (!this.img.src) {
        return;
      }

      this.image.style.width = this.WIDTH + "px";
      this.image.width = this.WIDTH;
      this.image.height = this.img.height * (this.WIDTH / this.img.width);
      context.scale(this.WIDTH / this.img.width, this.WIDTH / this.img.width);

      context.drawImage(this.img, 0, 0);

      this.textbox.style.fontSize = this.fontSize + "px";
      this.textbox.style.lineHeight = this.fontSize + "px";

      let cols = Math.round((context.canvas.width / this.fontSize) * 1.66);
      let rows = Math.round(context.canvas.height / (this.fontSize * 1));

      this.textbox.style.width = this.image.width + "px";
      this.textbox.style.height = context.canvas.height + "px";

      if (ctx) {
        this.compressed.width = cols; // DO NOT TOUCH
        this.compressed.height = rows; // DO NOT TOUCH
        this.image.style.filter = `contrast(${1 + this.contrast / 100})`;

        let scaleX = this.img.width / cols;
        let scaleY = this.img.height / rows;
        ctx.scale(1 / scaleX, 1 / scaleY);
        ctx.drawImage(this.img, 0, 0);

        let imageData = ctx.getImageData(0, 0, cols, rows);
        ctx.putImageData(this.contrastImage(imageData, this.contrast), 0, 0);

        // let pixels = ctx.getImageData(0, 0, cols, rows).data;
        let pixels = imageData.data;
        let col = 1;
        this.output = "";
        for (let i = 0; i < pixels.length; i += 4) {
          let r = pixels[i];
          let g = pixels[i + 1];
          let b = pixels[i + 2];
          let luminance =
            (r * this.lightness.r + //0.3
            g * this.lightness.g + //0.59
              b * this.lightness.b) / //0.11
            3.69;

          if (Math.round(luminance) > 69 || Math.round(luminance) < 0) {
            console.log("out of array");
          }

          let c = null;
          if (this.invert) {
            c = this.chars[this.chars.length - 1 - Math.round(luminance)];
          } else c = this.chars[Math.round(luminance)];

          this.output += c;
          if (col == cols) {
            col = 1;
            this.output += "\n";
          } else {
            col += 1;
          }
        }
        this.textbox.innerHTML = this.output;
        this.textbox.innerText = this.output;
        this.textbox.value = this.output;
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#file {
  display: flex;
  text-align: center;
  background: #888;
  width: 0;
  height: 0;
  padding: 0px;
  margin: 0px;
}

#form {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  position: fixed;
  top: 150px;
  left: 50%;
  padding: 20px 0;
  transform: translate(-50%);
  background: var(--bgColor);
  border-radius: 4px;
  z-index: 1;
  transition: 0.4s;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Courier New Cyr", "Courier New", monospace;
    color: var(--bgColor);
    margin: 0 10px;
    color: var(--bgColor);
    border-radius: 4px;
    padding: 5px;
    background: var(--dark-text);

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img,
      svg {
        height: 20px;
        float: left;
        margin-right: 5px;
        path {
          fill: var(--bgColor);
        }
      }

      &#invert-label {
        width: 100%;
        justify-content: space-between;
      }
    }

    input,
    select {
      height: 20px;
      border: 0;
      background: transparent;
      font-family: "Courier New Cyr", "Courier New", Courier, monospace;
      font-size: 1em;
      color: var(--bgColor);
      outline: none;
      cursor: pointer;

      option {
        background-color: var(--dark-text);
        color: var(--bgColor);
      }
    }

    input[type="checkbox"] {
      visibility: hidden;
      width: 0;
    }

    &#file-span {
      padding: 0;
      border: 0;

      #file-button {
        width: 100%;
        padding: 5px 10px;
        border-radius: 4px;
        text-align: center;
        border: 1px solid var(--normal-text);
        background: var(--dark-text);
        color: var(--bgColor);
        font-weight: bolder;

        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: #fafafa;
          background: var(--dark-text);
        }

        i {
          padding: 5px 0;
          text-align: center;
          overflow: hidden;
        }
      }
    }
  }
}

#container {
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 70px 0;

  #file-icon {
    user-select: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    width: 150px;
    margin: 100px;
    transition: 0.3s;

    &:hover {
      width: 155px;
    }

    path {
      fill: rgba(0, 0, 0, 0.1);
    }
  }
}

#image {
  margin: 2px 10px;
}

#textbox {
  font-family: "Courier New Cyr", "Courier New", monospace;
  margin: 2px 10px;
  overflow: hidden;
  outline: none;
  border: 0px;
  resize: none;
  background-color: transparent;

  &::selection {
    background: transparent;
  }
}

@media screen and (min-width: 1024px) {
  #container {
    flex-direction: row;
  }
  #form {
    font-size: 1.1em;
  }
}

@media screen and (max-width: 1024px) {
  #container {
    flex-direction: column;
  }
  #form {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 414px) {
  #container {
    flex-direction: column;
    // border: 1px solid black;
    padding-top: 0;
    margin-top: 0;
  }
  #form {
    font-size: 0.9rem;
    top: 80px;
    padding: 10px 0;

    span {
      height: 25px;
      &#file-span label {
        height: 25px;
      }
      svg {
        width: 15px;
      }
    }
  }

  #file-icon svg {
    width: 120px;
  }
}

// spinner

.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--light-text);
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
