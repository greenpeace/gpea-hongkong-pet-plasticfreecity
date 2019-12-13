<template>
  <div>
    <modal
      :show.sync="toolkitBox.status"
      gradient
      modal-classes="modal-dialog-centered"
    >
      <div class="py-3 text-center">
        <img :src="toolkitBox.image" style="width: 100%; height: auto;" alt />
      </div>
      <template slot="footer"></template>
    </modal>
    <section class="section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-1">
            <h2 class="text-light-blue display-1 mb-2 font-weight-bold">
              尋找走塑店鋪
              <br />建立無塑社區
            </h2>
            <div class="toolkit-content mt-4">
              <p>
                <strong>活動背景：</strong>
                <br />針對即棄塑膠，如餐具、膠袋等污染問題，進一步擴大「走塑店鋪」的版圖，讓更多人認識走塑食堂、店鋪，讓有心市民輕鬆走塑。
              </p>
              <p>
                「尋找走塑店鋪」計劃由2018年9月至今，已招募約200位義工參與一連串社區活動、親身與餐廳店主溝通，並找到超過600間走塑友善的店鋪，在這些餐廳貼上「全城走塑」貼紙，讓消費者輕鬆認出走塑店鋪。除了餐廳食店外，我們將擴大活動範圍至不同類型店鋪，如街市檔、小食店、手搖飲品店等等，希望有更多商家加入，擴大走塑版圖。
              </p>
              <p>
                <strong>我們的目標：</strong>
                <br />2020年底前，令1000間店鋪加入成為「走塑店鋪」。
              </p>
              <p>
                無塑未來由您創造！請<a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
                  target="_blank"
                  >加入義工</a
                >行列，並呼籲親朋好友和我們一起尋找走塑店鋪餐廳。
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
                target="_blank"
              >
                <button class="join-btn btn mr-4">我要成為義工</button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftxg-EbQSAl44hf_5g1-fVt4DJVlCjwJrEGuKxVdhM2J9aHg/viewform"
                target="_blank"
              >
                <button class="join-btn btn">店鋪登記</button>
              </a>
              <hr />
              <p>
                走塑不只是個人的事，歡迎餐廳、店鋪負責人或團體參與走塑店鋪計劃！如有機構、團體、學校的活動策劃人，也有興趣協辦「尋找走塑店鋪計劃」活動，帶領參加者在您們所屬的地區游說更多店鋪加入走塑行列，擴大走塑版圖。
              </p>
              <p>
                下載此<a
                  href="https://change.greenpeace.org.hk/publications/handbooks/2019/Greenpeace_Hunt_Day_Toolkits_GPEA_HK_2019.pdf"
                  target="_blank"
                  >小冊子</a
                >，您可以先了解整個活動流程，再與我們<a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScotCS-3l8gRR5z7dh9fU_1SFYmceYG1IgvINIf8sH5a4MMsA/viewform"
                  target="_blank"
                  >商討細節</a
                >。
              </p>
              <a
                href="https://change.greenpeace.org.hk/publications/handbooks/2019/Greenpeace_Hunt_Day_Toolkits_GPEA_HK_2019.pdf"
                target="_blank"
              >
                <button class="join-btn btn mr-4">尋找走塑店鋪計劃</button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScotCS-3l8gRR5z7dh9fU_1SFYmceYG1IgvINIf8sH5a4MMsA/viewform"
                target="_blank"
              >
                <button class="join-btn btn">團體參與</button>
              </a>
            </div>
          </div>
          <div class="col-md-6 order-md-2">
            <h2
              class="text-light-blue display-1 mb-2 font-weight-bold text-right"
            >
              兩分鐘
              <br />看懂走塑小貼士
            </h2>
            <div class="slick-toolkit card border-0 mt-4">
              <div
                class="toolkit-img"
                v-for="toolkit in toolkits"
                :key="toolkit.id"
                @click.prevent="toggleBox(toolkit)"
                :class="'toolkit-img--' + toolkit.id"
              >
                <span class="toolkit-img__overlay"></span>
                <span class="toolkit-img__text">{{ toolkit.headline }}</span>
                <img class="card-img-top" :src="toolkit.cover" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- youtube video -->
    <section>
      <div class="container">
        <lazy-component tag="div">
          <div class="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NC9qmrS-Cg4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </lazy-component>
      </div>
    </section>
    <!-- badges -->
    <section class="section pb-0">
      <div class="container">
        <header>
          <h2 class="display-1 text-light-blue font-weight-bold">
            走塑等級指南
          </h2>
          <p>
            「走塑非難事，貼紙等級話您知」！走塑貼紙分為兩個等級，顯示不同程度的走塑措施
          </p>
        </header>
        <div class="mission__stamp row row-grid align-items-center">
          <div class="col-md-6">
            <div class="stamp__wrapper mt-4">
              <h3 class="display-0 text-light-blue font-weight-bold">
                一級走塑店鋪
              </h3>
              <img
                src="@/assets/images/GP_PlasticFreeStickers_grade1.png"
                alt
                class="mt-4 img-fluid rounded-circle shadow"
              />
              <ul class="mt-4">
                <li>- 完全淘汰即棄塑膠 或</li>
                <li>- 提供走塑優惠</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="stamp__wrapper mt-4">
              <h3 class="display-0 text-light-blue font-weight-bold">
                二級走塑店鋪
              </h3>
              <img
                src="@/assets/images/GP_PlasticFreeStickers_grade2.png"
                alt
                class="mt-4 img-fluid rounded-circle shadow"
              />
              <ul class="mt-4">
                <li>- 不主動提供即棄塑膠 或</li>
                <li>- 歡迎自備餐具 / 器皿購物</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//
import Modal from "@/components/Modal.vue";
export default {
  name: "home",
  components: {
    Modal
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false
      },
      toolkitBox: {
        status: false,
        image:
          "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_restaurant_PRINT_Page_2.jpg"
      },
      toolkits: [
        {
          id: "poster",
          headline: "認住藍色白色走塑貼紙",
          cover: require("@/assets/images/community_hunt_poster.jpg"),
          contentImage: require("@/assets/images/community_hunt_poster.jpg")
        },
        {
          id: "restaurant",
          headline: "成為走塑友善餐廳",
          cover:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_restaurant_PRINT-page-001.jpg",
          contentImage:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_restaurant_PRINT_Page_2.jpg"
        },
        {
          id: "school",
          headline: "加入校園走塑行列",
          cover:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_school_PRINT-page-001.jpg",
          contentImage:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_school_PRINT_Page_2.jpg"
        },
        {
          id: "shop",
          headline: "成為下一間裸買商店",
          cover:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_shop_PRINT-page-001.jpg",
          contentImage:
            "https://api.greenpeace.org.hk/2018/wod/img/GP_plasticfree_shop_PRINT_Page_2.jpg"
        }
      ],
      number: 0
    };
  },
  methods: {
    toggleBox(target) {
      this.toolkitBox.image = target.contentImage;
      this.toolkitBox.status = true;
    }
  },
  computed: {
    totalPlastic: function() {
      const total = this.plasticItems
        .map(item => {
          return item.numbers;
        })
        .reduce((sum, numbers) => {
          return sum + numbers;
        }, 0);
      return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  watch: {},
  filters: {
    withCommas(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
<style lang="scss">
.toolkit-img {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

.toolkit-content {
  p {
    font-weight: normal;
  }

  .join-btn {
    background-color: $wod-light-blue;
    color: #fff;
    font-size: 1.2rem;
  }
}

.pf_hunt_button {
  display: block;
  background-color: $wod-light-blue;
  padding: 8px 20px;
  margin-right: 20px;
  img {
    width: 100%;
    max-width: 200px;
  }
}

.stamp__wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 240px;
    transition: transform 200ms ease-in;
    &:hover {
      transform: scale(0.95);
    }
  }

  ul {
    list-style: none;
  }
}

hr {
  height: 1px;
  border-top: 1px solid #ccc;
  padding: 1px;
}
</style>
