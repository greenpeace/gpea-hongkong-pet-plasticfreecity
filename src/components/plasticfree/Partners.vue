<template>
  <section class="page-section partners mt-5">
    <div class="container">
      <header class="mb-2">
        <h2 class="display-1 mb-2 text-forest font-weight-bold">走塑聯盟</h2>
        <p class="text-black">
          走塑聯盟志在努力推動餐廳、學校、商店及大型活動走塑，目前為止，一共有六個團體加入了走塑聯盟。
          <br />如果你也擁有共同願景，歡迎加入我們！集結群眾與團體的走塑決心，一起推動雙倍的餐廳、學校加入走塑行列，帶動社會各界正視塑膠污染問題。
        </p>
      </header>
      <div class="alliance">
        <ul class="alliance__list">
          <a
            v-for="alliance in alliances"
            :key="alliance.name"
            v-bind:href="alliance.url"
            target="_blank"
          >
            <li>{{alliance.name}}</li>
          </a>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      alliances: [
        {
          name: "走杯",
          logo: "",
          url: "http://www.gocup.hk/"
        },
        {
          name: "環保觸覺",
          logo: "",
          url: "http://greensense.org.hk/"
        },
        {
          name: "思網絡",
          logo: "",
          url: "http://project-see.net/?lang=hk"
        },
        {
          name: "搞乜東東",
          logo: "",
          url: "https://gaomadyeah.weebly.com/"
        },
        {
          name: "有叉用",
          logo: "",
          url: "https://www.facebook.com/utentials/"
        },
        {
          name: "馬灣坊會",
          logo: "",
          url:
            "https://www.facebook.com/%E9%A6%AC%E7%81%A3%E5%9D%8A%E6%9C%83-Ma-Wan-Neighborhood-Association-921558694579182/"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
section {
  padding: 4rem 0 4rem;
  background-color: $wod-gray-3;
  background-image: require("@/assets/texture/texture_organization.jpg");
  background-repeat: repeat;
}

header {
  .header__image img {
    max-width: 160px;
  }
}

.alliance__list {
  max-width: 780px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 20px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-items: center;

  @include for-mobile-only {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  li {
    font-weight: bold;
    text-align: center;
    background-color: #fff;
    color: $wod-forest;
    border: 1px solid transparent;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    position: relative;
    text-decoration: none;
    backface-visibility: hidden;
    transition: all 0.3s ease-out;

    &:hover {
      color: $wod-green;
      box-shadow: 0 0 0 2px $wod-green;
      /* emulate the border */
    }
  }
}

.vision__statement {
  text-align: center;
}

.vision__toggle {
  font-size: 1.6rem;
  margin: 2rem auto;
  color: $wod-green;
  border: 2px solid $wod-green;
  background-color: transparent;
  padding: 0.5rem 3rem;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-property: transform;
  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>