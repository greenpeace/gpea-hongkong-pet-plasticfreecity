<template>
  <section class="toolkit">
    <header>
      <h2 class="text-white">兩分鐘看懂走塑小貼士</h2>
      <p class="text-white">
        想知道餐廳﹑小店同學校如何做到走塑？
        <br>立即下載走塑小貼士！
      </p>
    </header>
    <div class="toolkit__wrapper wrapper">
      <template v-for="toolkit in toolkits">
        <a
          :key="toolkit.id"
          @click.prevent="toggleBox(toolkit)"
          href="https://api.greenpeace.org.hk/2018/oceans/documents/GP_plasticfree_restaurant_compressed.pdf"
          target="_blank"
        >
          <div class="toolkit-img" :class="'toolkit-img--' + toolkit.id">
            <span class="toolkit-img__overlay"></span>
            <span class="toolkit-img__text">{{toolkit.headline}}</span>
            <img :src="toolkit.cover" alt>
          </div>
        </a>
      </template>
    </div>
    <!-- tookit -->
    <v-dialog v-model="toolkitBox.status" width="90%" max-width="600px">
      <img :src="toolkitBox.image" style="width: 100%; height: auto;" alt>
    </v-dialog>
    <!-- mission -->
    <header>
      <h2 class="text-white">尋找走塑食堂</h2>
    </header>
    <div class="mission__wrapper wrapper">
      <div class="mission__text">
        <p>
          在2018年9月至2019年6月間，綠色和平會聯同走塑支持者，鼓勵食肆成為「走塑食堂」。
          <br>大家可以自選喜愛和熟悉的餐廳，親身落鋪游說，或找出城中的隱世走塑食堂，然後為餐廳貼上貼紙﹑再將餐廳資料交給綠色和平進一步跟進。
        </p>
        <p>
          <strong>目的：</strong>透過計劃，希望讓走塑食堂的善行更廣為人知﹑讓更多市民輕易識別出走塑食堂，安心要求走塑。
        </p>
        <p>
          <strong>目標:</strong>於2019年6月或之前，鼓勵及找出500間走塑餐廳。
        </p>
        <h3>參加方法：</h3>
        <p>如你是餐廳負責人，也有興趣加入走塑食堂計劃，請按此登記，我們會於兩星期內跟你聯絡。</p>
        <a href="#" v-scroll-to="'#join'">
          <button class="btn">加入走塑食堂計劃</button>
        </a>
        <p>如你是走塑支持者，並希望一起尋找走塑食堂：</p>
        <p>
          我們在2018月8月﹑12月﹑2019年3月﹑6月，均會招募義工一起尋找「走塑食堂」, 如你有興趣參加，請填妥以下
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
            target="_blank"
          >報名表</a>，在招募下一輪義工時，我們會發電郵通知。
        </p>
        <p>
          如在此日子之前想參與計劃，可電郵至
          <a href="mailto:szng@greenpeace.org">szng@greenpeace.org</a>聯絡我們，我們會為合適的朋友派發指南及貼紙。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
          target="_blank"
        >
          <button class="btn">我要成為義工</button>
        </a>
      </div>
    </div>
    <!-- guideline -->
    <header>
      <h2 class="text-white">走塑食堂等級指南</h2>
    </header>
    <div class="mission__wrapper wrapper">
      <div class="mission__stamp">
        <div class="stamp__wrapper">
          <h3>一級走塑食堂</h3>
          <img src="../assets/images/grade-1-both.jpg" alt>
          <ul>
            <li>1. 完全淘汰即棄塑膠, 及</li>
            <li>2. 提供可重用餐具，並回收餐具</li>
          </ul>
        </div>
        <div class="stamp__wrapper">
          <h3>二級走塑食堂</h3>
          <img src="../assets/images/grade-2-both.jpg" alt>
          <ul>
            <li>1. 可走飲管 / 可走塑膠</li>
            <li>2. 不主動提供即棄塑膠</li>
            <li>3. 同時提供即棄塑膠和可重用餐具</li>
            <li>4. 可自携杯/餐具器皿</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      toolkitBox: {
        status: false,
        image: require("@/assets/images/GP_plasticfree_restaurant_PRINT_Page_2.jpg")
      },
      toolkits: [
        {
          id: "restaurant",
          headline: "成為走塑友善餐廳",
          cover: require("@/assets/images/GP_plasticfree_restaurant_PRINT-page-001.jpg"),
          contentImage: require("@/assets/images/GP_plasticfree_restaurant_PRINT_Page_2.jpg")
        },
        {
          id: "school",
          headline: "加入校園走塑行列",
          cover: require("@/assets/images/GP_plasticfree_school_PRINT-page-001.jpg"),
          contentImage: require("@/assets/images/GP_plasticfree_school_PRINT_Page_2.jpg")
        },
        {
          id: "shop",
          headline: "成為下一間裸買商店",
          cover: require("@/assets/images/GP_plasticfree_school_PRINT-page-001.jpg"),
          contentImage: require("@/assets/images/GP_plasticfree_shop_PRINT_Page_2.jpg")
        }
      ]
    };
  },
  methods: {
    toggleBox(target) {
      this.toolkitBox.image = target.contentImage;
      this.toolkitBox.status = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.mission__wrapper {
  padding: 2rem;
  background-color: #fff;
  .mission__text {
    p {
      a {
        display: inline-block;
        border-bottom: 1px solid #0f0f0f;
      }
    }
    .btn {
      border: 1px solid #000;
    }
  }

  .mission__stamp {
    display: flex;
    flex-flow: row;
    justify-content: space-around;

    h3 {
      text-align: center;
      color: $wod-green;
    }

    img {
      width: 100%;
      max-width: 280px;
      border: 1px solid #ccc;
    }

    ul {
      list-style: none;
      margin-top: 1rem;

      li {
        padding-left: 8px;
      }

      li + li {
        margin-top: 8px;
      }
    }
  }

  .stamp__wrapper {
    padding: 0 4px;
  }
}

.toolkit {
  background-color: $wod-light-blue;
  padding: 2rem 0;
  &__wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    @include for-mobile-only {
      flex-flow: row wrap;
    }
  }
}

.toolkit-img {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  flex: 33.3333%;
  padding: 1rem 2rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  opacity: 1;
  @include for-mobile-only {
    width: 100%;
    flex: 100%;
  }

  img {
    width: 100%;
  }

  &:hover {
    .toolkit-img__overlay {
      opacity: 0.7;
    }

    .toolkit-img__text {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}

/* If have the overlay layer */
.toolkit-img__overlay {
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #50c3ca no-repeat center 20%;
  background-size: cover;
  opacity: 0;
  filter: alpha(opacity=0);
  /*For IE6 - IE8*/
  transition: all 0.5s;

  @include for-mobile-only {
    font-size: 1.8rem;
  }
}

/* If have captions */
.toolkit-img__text {
  padding: 0 30px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  opacity: 0;
  filter: alpha(opacity=0);
  /*For older IE*/
  transform: translateY(-60px);
  transition: all 0.6s;
}
</style>