<template>
  <section class="page-section map mt-5">
    <div class="container">
      <header class="mb-2">
        <h2 class="display-1 mb-2 text-light-blue font-weight-bold">
          「減廢走塑」好去處
        </h2>
        <p class="text-xs-center">
          你可以透過以下地圖以及選單，尋找「走塑友善」餐廳與商鋪，以及選擇在不同項目承諾走塑的學校。
        </p>
      </header>
      <lazy-component tag="div">
        <div class="google-map map-responsive">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1vAmdeSH9Py7UIp3desoLrQKSnFmwJGZZ&ll=22.301008548569072,114.17756080627441&z=12"
            width="100%"
            height="450"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            allowfullscreen
          ></iframe>
        </div>
      </lazy-component>
      <div class="map__credit text-gray">
        <p>地圖來源: Edith Law，鳴謝走杯﹑思網絡﹑Bucket 分享資料</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.map-responsive {
  overflow: hidden;
  position: relative;
  height: 0;
  overflow: hidden;
  @include for-mobile-only {
    padding-top: 75vh;
  }
  padding-top: 56.25%;
}
.map-responsive iframe {
  border: none;
  left: 0;
  // top: 0; // remove the header bar
  top: -47px;
  height: 100%;
  width: 100%;
  position: absolute;
}
.map__credit {
  position: relative;
  text-align: center;
  top: -35px;
  font-size: 13px;
}
</style>
