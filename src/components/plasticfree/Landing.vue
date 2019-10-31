<template>
  <div>
    <modal
      :show.sync="toolkitBox.status"
      gradient=""
      modal-classes="modal-dialog-centered"
    >
      <div class="py-3 text-center">
        <img
          :src="toolkitBox.image"
          style="width: 100%; height: auto;"
          alt=""
        >
      </div>
      <template slot="footer">
      </template>
    </modal>
    <section class="section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-1">
            <h2 class="text-light-blue display-1 mb-2 font-weight-bold">尋找走塑店鋪<br />建立無塑社區</h2>
            <div class="toolkit-content mt-4">
              <p><strong>活動背景：</strong><br />
                針對即棄塑膠，如餐具、膠袋等污染問題<br />
                進一步擴大「走塑店鋪」的版圖，讓更多人認識走塑食堂、店鋪，讓有心市民輕鬆走塑。</p>
              <p>「尋找走塑食堂」計劃由2018年9月至今，已招募<strong>約150位義工參與一連串社區活動、親身與餐廳店主溝通，並找到近400間走塑友善的餐廳</strong>，在這些餐廳貼上「全城走塑」貼紙，讓消費者輕鬆認出走塑食堂。今年我們將擴大活動範圍至不同店鋪，如街市、糖果店等，希望有更多商家加入，擴大走塑版圖。</p>
              <p><strong>我們的目標：</strong><br />2019年6月或之前，令500間餐廳成為「走塑食堂」。</p>
              <p>你的參與會帶來改變，無塑未來由你創造！請加入義工行列，並呼籲親朋好友和我們一起尋找走塑餐廳！</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
                target="_blank"
              >
                <button class="join-btn btn mb-0">我要成為義工</button>
              </a>
              <hr />
              <p>走塑不只是個人的事，歡迎餐廳及店鋪負責人或團體參與走塑店鋪計劃！如果你未有時間參與活動，但發現到走塑店舖，請報料讓我們跟進！</p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftxg-EbQSAl44hf_5g1-fVt4DJVlCjwJrEGuKxVdhM2J9aHg/viewform"
                target="_blank"
              >
                <button class="join-btn btn mr-4">店鋪登記</button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScotCS-3l8gRR5z7dh9fU_1SFYmceYG1IgvINIf8sH5a4MMsA/viewform"
                target="_blank"
              >
                <button class="join-btn btn mr-4">團體參與</button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFcbTQ09G08cRI_2iuKP3Z7IJqaoKaSo17FZ9s-p-d1u38vQ/viewform"
                target="_blank"
              >
                <button class="join-btn btn">我要報料</button>
              </a>
            </div>
          </div>
          <div class="col-md-6 order-md-2">
            <h2 class="text-light-blue display-1 mb-2 font-weight-bold text-right">兩分鐘<br />看懂走塑小貼士</h2>
            <div class="slick-toolkit card border-0 mt-4">
              <div
                class="toolkit-img"
                v-for="toolkit in toolkits"
                :key="toolkit.id"
                @click.prevent="toggleBox(toolkit)"
                :class="'toolkit-img--' + toolkit.id"
              >
                <span class="toolkit-img__overlay"></span>
                <span class="toolkit-img__text">{{toolkit.headline}}</span>
                <img
                  class="card-img-top"
                  :src="toolkit.cover"
                  alt=""
                >
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="section pb-0">
      <div class="container">
        <header>
          <h2 class="display-1 text-light-blue font-weight-bold">走塑等級指南</h2>
          <p>「走塑非難事，貼紙等級話你知」！走塑貼紙分為兩個等級，顯示不同程度的走塑措施</p>
        </header>
        <div class="mission__stamp row row-grid align-items-center">
          <div class="col-md-6">
            <div class="stamp__wrapper mt-4">
              <h3 class="display-0 text-light-blue font-weight-bold">一級走塑店鋪</h3>
              <img
                src="@/assets/images/GP_PlasticFreeStickers_grade1.png"
                alt=""
                class="mt-4 img-fluid rounded-circle shadow"
              >
              <ul class="mt-4">
                <li>- 提供走塑優惠</li>

              </ul>
              <!--
              <p class="lead font-weight-bold">「餐廳做主動，塑膠冇得用」</p>
              -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="stamp__wrapper mt-4">
              <h3 class="display-0 text-light-blue font-weight-bold">二級走塑店鋪</h3>
              <img
                src="@/assets/images/GP_PlasticFreeStickers_grade2.png"
                alt=""
                class="mt-4 img-fluid rounded-circle shadow"
              >
              <ul class="mt-4">
                <li>- 提供走包裝的選擇；及</li>
                <li>- 提供自備袋／器皿的選擇</li>
              </ul>
              <!--
              <p class="lead font-weight-bold">「餐廳順你意，走塑你話事」</p>
              -->
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
</style>