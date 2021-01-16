<template>
  <footer>
    <h3>ASCII Images <span></span></h3>
    <div id="tech">
      <a
        href="https://github.com/"
        target="_blank"
        title="Serving on Github Pages"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
            fill="#FAFAFA"
          />
        </svg>
      </a>
      <a
        href="https://github.com/BurnedScarecrow/"
        target="_blank"
        id="author"
        title="Made with ❤️ by BurnedScarecrow (Cawa)"
      >
        <img src="@/assets/info/BurnedScarecrow.svg" alt="" />
      </a>
      <a href="https://vuejs.org/" target="_blank" title="Powered by Vue.js">
        <img src="@/assets/info/vue.svg" alt="" />
      </a>
    </div>
    <div>Cawa prod. &copy; 2021 {{ data > 2021 ? `- ${data}` : "" }}</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      data: 2021
    };
  },
  mounted() {
    this.data = new Date().getFullYear;
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  background: var(--dark-text);
  color: var(--bgColor);
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px;
  border-radius: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
  }

  svg {
    height: 40px;
    path {
      fill: var(--bgColor);
    }
  }

  #tech {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  #author {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 20px;
    font-size: 18px;

    text-decoration: none;
    color: var(--bgColor);
    img {
      border-radius: 50%;
    }

    div {
      background: #262627;
      padding: 3px 8px;
      border-radius: 4px;
    }
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: inline-block;
      width: 12px;
      height: 1em;
      background: var(--bgColor);
      animation: blink 1.5s linear infinite;
      margin-right: 2px;
    }
  }
}

@media screen and (max-width: 800px) {
  footer {
    flex-direction: column;
    width: 95%;
    padding: 20px;
    gap: 20px;
    font-size: 0.9em;
    h3 {
      font-size: 1.2em;
    }
  }
}
</style>
