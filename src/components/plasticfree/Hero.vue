<template>
  <div class="hero">
    <div class="hero__content">
      <div class="text" v-bind:class="{ slideup: !loading}">
        <h1 class="text-white display-2 mb-2">
          全城走塑
          <br />讓香港不一樣
        </h1>
        <h4 class="text-white font-weight-bold">2020年，更多店鋪、學校參與走塑</h4>
        <p class="lead">
          塑膠圍城，香港塑膠污染問題日益嚴峻。
          <br />無論你想在餐廳、學校、商鋪，或日常生活中走塑，只要大家一齊努力，每個人少用即棄塑膠，聚沙成塔，就可以讓香港變得不一樣！
        </p>
        <p class="lead">全城走塑，立即行動！</p>
        <div class="mt-2">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyhY0wTqn0JdMjjvEUFS4yBQ31G0KHXhDsvZ1lUiR-XDFFQQ/viewform"
            target="_blank"
          >
            <button class="btn main-btn">義工登記</button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSftxg-EbQSAl44hf_5g1-fVt4DJVlCjwJrEGuKxVdhM2J9aHg/viewform"
            target="_blank"
          >
            <button class="btn main-btn">店鋪登記</button>
          </a>
        </div>
      </div>
    </div>
    <div class="hero__background" v-bind:class="{ fade: !loading}">
      <div class="wrapper restaurant-dot" v-scroll-to="'#restaurant-list'">
        <div class="ring"></div>
        <div class="dot"></div>
        <span class="dot-title">走塑食堂</span>
      </div>

      <div class="wrapper school-dot" v-scroll-to="'#school-list'">
        <div class="ring"></div>
        <div class="dot"></div>
        <span class="dot-title">走塑校園</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  methods: {
    init() {
      this.loading = false;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.text {
  backface-visibility: hidden;
  transform: translate(0, 6rem);
  transition: all 0.6s;
  transition-delay: 2s;
  opacity: 0;

  &.slideup {
    transform: translate(0, 0);
    opacity: 1;
  }
}

.hero__background {
  backface-visibility: hidden;
  opacity: 0;
  transition: all 0.6s;
  transition-delay: 1.5s;
  transform: translate(0, -2rem);

  &.fade {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.hero {
  position: relative;
  min-height: 85vh;
  background-color: $wod-light-blue;

  &__content {
    position: relative;
    color: #fff;
    z-index: 1;
    display: flex;
    .text {
      width: 100%;
      max-width: 520px;
      padding: 1rem;
      .main-btn {
        font-size: 18px;
        margin-top: 1rem;
        margin-right: 2rem;
        font-weight: bold;
        background-color: #fff;
        color: $wod-light-blue;
      }
    }
  }

  &__background {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/png/keyvisual_8bit.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  @include for-mobile-only {
    &__content {
      position: relative;
      display: flex;
      margin-bottom: -20vh;
    }

    &__background {
      position: relative;
      height: 50vh;
    }
  }
}

.restaurant-dot {
  position: absolute;
  top: 50%;
  left: 30%;
}
.school-dot {
  position: absolute;
  top: 45%;
  left: 80%;
}
.wrapper {
  pointer-events: auto;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  transition: all 0.3s;
  @include for-mobile-only {
    opacity: 1;
  }
}

.ring {
  pointer-events: none;
  position: absolute;
  border-width: 1px;
  border-radius: 50%;
  border-style: solid;
  height: 100%;
  width: 100%;
  animation: ripple 2s infinite;
  animation-delay: 10ms;
}

.dot {
  pointer-events: none;
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  animation: pulse 2s infinite;
}

.dot-title {
  text-align: center;
  position: absolute;
  bottom: -35px;
  left: -30px;
  font-size: 13px;
  color: #0a0a0a;
  font-weight: bold;
  width: 80px;
  background-color: rgba(255, 255, 255, 0.75);
}

@keyframes ripple {
  from {
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1);
  }
  to {
    border-color: rgba(255, 255, 255, 1);
    transform: scale(2);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.2);
  }
  10% {
    transform: scale(1);
  }
}

.scroll-down {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  .material-icons {
    font-size: 4rem;
    color: #fff;
    backface-visibility: hidden;
    animation: scrollDown 1.8s infinite;
    animation-timing-function: ease-out;
  }

  @keyframes scrollDown {
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }

    100% {
      transform: translate(0, 3rem);
      opacity: 0;
    }
  }
}
</style>