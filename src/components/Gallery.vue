<template>
  <div class="container">
    <div class="gallery" v-if="show">
      <div class="column" v-for="(col, counter) in cols" :key="counter">
        <Card
          v-for="(card, counter) in col"
          :key="counter"
          :img="card.img"
          :text="card.text"
          :size="card.size"
        />
      </div>
    </div>
    <div id="spinner" v-else class="lds-roller">
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
</template>

<script>
import Card from "@/components/Card.vue";

// import i1 from "@/assets/gallery/1.png";
// import i2 from "@/assets/gallery/2.png";
import i3 from "@/assets/gallery/3.png";
import i4 from "@/assets/gallery/4.png";
import i5 from "@/assets/gallery/5.png";
import i6 from "@/assets/gallery/6.png";
import i7 from "@/assets/gallery/7.png";
import i8 from "@/assets/gallery/8.png";
import i9 from "@/assets/gallery/9.png";
import i10 from "@/assets/gallery/10.png";
import i11 from "@/assets/gallery/11.png";
import i12 from "@/assets/gallery/12.png";
import i13 from "@/assets/gallery/13.png";
import i14 from "@/assets/gallery/14.png";
import i15 from "@/assets/gallery/15.png";
import i16 from "@/assets/gallery/16.png";
import i17 from "@/assets/gallery/17.png";

// import t1 from "raw-loader!@/assets/txt/1.txt";
// import t2 from "raw-loader!@/assets/txt/2.txt";
import t3 from "raw-loader!@/assets/txt/3.txt";
import t4 from "raw-loader!@/assets/txt/4.txt";
import t5 from "raw-loader!@/assets/txt/5.txt";
import t6 from "raw-loader!@/assets/txt/6.txt";
import t7 from "raw-loader!@/assets/txt/7.txt";
import t8 from "raw-loader!@/assets/txt/8.txt";
import t9 from "raw-loader!@/assets/txt/9.txt";
import t10 from "raw-loader!@/assets/txt/10.txt";
import t11 from "raw-loader!@/assets/txt/11.txt";
import t12 from "raw-loader!@/assets/txt/12.txt";
import t13 from "raw-loader!@/assets/txt/13.txt";
import t14 from "raw-loader!@/assets/txt/14.txt";
import t15 from "raw-loader!@/assets/txt/15.txt";
import t16 from "raw-loader!@/assets/txt/16.txt";
import t17 from "raw-loader!@/assets/txt/17.txt";

export default {
  components: {
    Card
  },
  data() {
    return {
      texts: [
        t3,
        t4,
        t5,
        t6,
        t7,
        t8,
        t9,
        t10,
        t11,
        t12,
        t13,
        t14,
        t15,
        t16,
        t17
      ],
      images: [
        i3,
        i4,
        i5,
        i6,
        i7,
        i8,
        i9,
        i10,
        i11,
        i12,
        i13,
        i14,
        i15,
        i16,
        i17
      ],
      cols: [],
      show: true,
      colnum: Math.floor((window.innerWidth * 0.9 - 20) / 340),
      oldcolsnum: Math.floor((window.innerWidth * 0.9 - 20) / 340),
      vw: window.innerWidth
    };
  },
  mounted() {
    let cont = this;
    this.sort();
    window.addEventListener("resize", () => {
      let new_colnumber = Math.floor((window.innerWidth * 0.9 - 20) / 340);
      if (this.colnum == new_colnumber || this.vw == window.innerWidth) return;
      this.colnum = new_colnumber;
      cont.show = false;
      cont.sort();
      setTimeout(() => {
        cont.show = true;
      });
    });
  },
  methods: {
    sort: function() {
      this.cols = [];
      let cards = [];
      for (let i = 0; i < this.images.length; i++) {
        let arr = this.texts[i].split("Я");
        cards.push({
          img: this.images[i],
          text: arr[1],
          size: arr[0]
        });
        if (
          (i + 1) % (this.images.length / this.colnum) < 1 ||
          i + 1 == this.images.length
        ) {
          this.cols.push(cards);
          cards = [];
        }
      }
    }
  }
};
</script>

<style lang="scss">
.gallery {
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  min-height: 0;
  min-width: 0;

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 320px;
  }
}

#spinner {
  display: block;
  margin: 100px auto;
}
</style>
