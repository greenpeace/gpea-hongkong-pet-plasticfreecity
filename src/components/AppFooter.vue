<template>
  <footer class="footer app-footer">
    <div class="footer__container container">
      <div class="footer__note">
        <p>
          綠色和平存在，因為脆弱的地球需要改變、需要行動。但保護地球的使命不能僅靠綠色和平來完成，唯有結合你的力量，才能夠讓地球變得更綠色、更和平。
        </p>
        <span class="footer__note-copyright">© GREENPEACE 2019</span>
      </div>
      <div class="footer__links">
        <ul class="footer__links-site">
          <li class="footer__link">
            <a target="_blank" href="http://www.greenpeace.org/hongkong/"
              >首頁</a
            >
          </li>
          <li class="footer__link">
            <a
              target="_blank"
              href="https://act.greenpeace.org/page/4663/donate/1?ref=plasticfreecity"
              >捐助支持</a
            >
          </li>
          <li class="footer__link">
            <a
              target="_blank"
              href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
              >私隱政策與個人資料收集聲明</a
            >
          </li>
        </ul>
      </div>
      <div class="footer__logo">
        <a
          target="_blank"
          href="https://act.greenpeace.org/page/4663/donate/1?ref=plasticfreecity"
        >
          <gplogo />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import gplogo from "@/assets/svg/gp-logo.svg";

export default {
  components: {
    gplogo
  },
  data() {
    return {
      gplogo: gplogo
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem 0;
  background-color: $wod-forest;
  background-image: url("https://api.greenpeace.org.hk/2018/wod/img/texture/texture_cta.jpg");
  background-repeat: repeat;
  color: #fff;
  font-size: 13px;
  &__container {
  }
  &__note {
  }
  &__links {
    a {
      color: #fff;
    }
  }
  &__logo {
    width: 80%;
    max-width: 130px;
    margin: 0 auto;
  }
}

@supports (display: grid) {
  .footer {
    &__container {
      display: grid;
      grid-gap: 2rem;
      grid-template-areas: "note" "links" "logo";
      justify-content: center;
      align-items: center;
      @media (min-width: 1200px) {
        grid-template-columns: 200px 2fr 1fr;
        grid-template-areas: "logo note links";
      }
    }
    &__note {
      grid-area: note;
    }
    &__links {
      grid-area: links;
      text-align: center;
      display: flex;
      flex-flow: columns;
      justify-content: center;
      ul {
        list-style: none;
        li {
          margin-bottom: 1rem;
        }
      }
      @media (min-width: 1200px) {
        text-align: right;
        justify-content: flex-end;
      }
    }
    &__logo {
      grid-area: logo;
    }
  }
}
</style>
