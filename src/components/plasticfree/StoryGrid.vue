<template>
  <section class="story-gird mt-5">
    <v-dialog v-model="pattern" width="90%" max-width="600px">
      <div class="pattern-content p-4">
        <p>這間位於大埔的小店Pattern，餐桌上同時放了膠飲管和不鏽鋼飲管讓食客自行選擇。如果你是食客，你會如何選擇？當你選擇使用不鏽鋼飲管時，其實已對「走塑」投下一票。小店實行這個措施有兩個多月了，出乎意料的是，不少食客反而直接「裸飲」！店主Bobo認為「其實有時把選擇權放在食客面前，反而是一種提醒，倒不如兩者都不用啦！」也對, 「裸飲」其實也不是出奇的事，我們平時喝水時不也是捧杯就喝，名符其實的「裸飲」嗎？</p>
        <p style="text-align:center;">
          <img
            src="https://api.greenpeace.org.hk/2018/oceans/images/pattern_pic1.jpg"
            style="width: 100%; max-width: 280px; padding: 0 10px"
          />
        </p>
        <p>除了塑膠飲管，小店並沒有其他即棄塑膠餐具。店主知道要「一刀切」改變並非一朝一夕的事，倒不如加入不鏽鋼飲管給食客選擇吧！當然，使用不鏽鋼飲管會衍生成本增加的問題，但另一種壓力來源反而是來自身邊人的質疑：「冇人會用咖！」面對質疑，其實也是一種推動力。店主Bobo笑指，「沒有試過又怎知道不行呢！員工對於新措施都覺得OK呀！因為大家一開始就覺得沒有人會用，哈哈！」後來越來越多食客使用不鏽鋼飲管時，洗碗姐姐都沒有怨言，還一起研究怎樣才洗得乾淨呢！</p>
        <p>至於外賣，，起初小店先實行自備外賣餐盒即享折扣，可惜當時反應不理想。後來店主推行客人可自備餐盤訂購到會，甚至提供一站式到會服務，包括預備食物至租借爐具。「試過有公司訂購到會，真的可以做到一件塑膠垃圾也沒有！」得到正面的回響，更令店主確信走塑之路，對內對外都是是可行的。</p>
        <p>小店的門外貼著「自備外賣盒」、「撲水」、「歡迎導盲犬」等貼紙，踏進店內是一片醒神溫暖的黃色牆身，頓時感受到店主Bobo對社會的一份關懷。「做飲食業其實有很多浪費的地方，不想自己成為浪費的一份子，希望由源頭減廢做起。」所以小店沒有遇到什麼團體邀請，就自發性地踏上「走塑」之路，實屬難得。</p>
        <p>好多人都以為走塑是個新潮流，只是適合年青人參與。其實不然。「不關乎年齡和教育程度，只是視乎你有沒有心。」一間小店可以做到的也許很微小，但店主靠的正是這一顆心，一種態度，一步一步去做，感染更多人「走塑」。</p>
        <p>小店現時已經拼棄即棄膠餐具，即使塑膠飲管的入貨量也大大減少。其實每個人都有能力去解決塑膠問題。一間食店可以改變一批食客的習慣，如果香港有更多食店願意走塑，匯集的力量就會更加強大！這間小店已經加入「走塑食堂」行列，鋪面張貼了「全城走塑」的貼紙記認。如果你是餐廳負責人，你已經實行走塑嗎？或者你對走塑計劃有興趣嗎？歡迎登入以下網址，加入成為「走塑食堂」！</p>
      </div>
    </v-dialog>
    <div class="container">
      <header class="mb-2">
        <h2 class="display-1 mb-2 text-light-blue font-weight-bold">走塑故事 ✖ 媒體訪問</h2>
        <p>願意走塑的人或餐廳, 當中有什麼小故事呢？尋找走塑食堂又帶來什麼影響呢？一同看看下面的小故事和訪問吧！</p>
      </header>
      <div class="boxes mt-4">
        <div
          class="box"
          v-bind:key="story.title"
          v-for="story in stories"
          v-bind:style="{ backgroundImage: 'url(' + story.image + ')' }"
        >
          <a v-bind:href="story.link" target="_blank">
            <div class="box__text-wrapper">
              <span>- {{story.media}}</span>
              <p v-html="story.title"></p>
            </div>
          </a>
        </div>
        <!-- looped story -->
        <div
          class="box"
          v-bind:style="{ backgroundImage: 'url(https://api.greenpeace.org.hk/2018/oceans/images/pattern_square.jpg)' }"
        >
          <a @click.prevent="pattern = !pattern">
            <div class="box__text-wrapper">
              <span>- Pattern</span>
              <p>走塑也是一種生活選擇</p>
            </div>
          </a>
        </div>
        <!-- pattern -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pattern: false,
      stories: [
        {
          title: "唐寧 Lelelala 去走塑",
          media: "綠色和平",
          image:
            "https://storage.googleapis.com/planet4-hongkong-stateless/2018/12/33c6c84f-dsc03158.jpg",
          link:
            "https://www.greenpeace.org/hongkong/issues/plastics/update/1967/%e5%8f%b2%e4%b8%8a%e6%9c%80%e9%9d%9a%e5%b8%ab%e5%a6%83%e6%9a%84-%e4%bb%99%e6%b0%a3%e5%94%90%e5%af%a7%e5%8c%96%e8%ba%ab%e8%b5%b0%e5%a1%91%e5%a5%b3%e7%a5%9e/"
        },
        {
          title:
            "東方鴨脷洲大街 + 走塑義工: <br/>游說餐廳走塑　義工逐間邀請不言棄",
          media: "東網",
          image:
            "https://hk.on.cc/hk/bkn/cnt/news/20181215/photo/bkn-20181215102036499-1215_00822_001_01b.jpg?20181216050944",
          link:
            "https://hk.on.cc/hk/bkn/cnt/news/20181215/bkn-20181215102036499-1215_00822_001.html"
        },

        {
          title:
            "【真走塑】<br/>堂食備鋼飲管、外賣供紙袋<br/>西貢有間「一級走塑食堂」",
          media: "HK01",
          image:
            "https://cdn.hk01.com/media/article/263469/thumbnail/1d407efe3864e23ccc5213bd7d364e11.jpg",
          link:
            "https://www.hk01.com/%E7%A4%BE%E5%8D%80%E5%B0%88%E9%A1%8C/263469/%E7%9C%9F%E8%B5%B0%E5%A1%91-%E5%A0%82%E9%A3%9F%E5%82%99%E9%8B%BC%E9%A3%B2%E7%AE%A1-%E5%A4%96%E8%B3%A3%E4%BE%9B%E7%B4%99%E8%A2%8B-%E8%A5%BF%E8%B2%A2%E6%9C%89%E9%96%93-%E4%B8%80%E7%B4%9A%E8%B5%B0%E5%A1%91%E9%A3%9F%E5%A0%82"
        },
        {
          title:
            "【真走塑】<br/>跟住OL踩入小店<br/>邀食肆走塑、製作「走塑地圖」！",
          media: "HK01",
          image:
            "https://cdn.hk01.com/media/article/263583/thumbnail/21c11c4da62b38a9f46a672b224f3f27.jpg",
          link:
            "https://www.hk01.com/%E7%A4%BE%E5%8D%80%E5%B0%88%E9%A1%8C/263583/%E7%9C%9F%E8%B5%B0%E5%A1%91-%E8%B7%9F%E4%BD%8Fol%E8%B8%A9%E5%85%A5%E5%B0%8F%E5%BA%97-%E9%82%80%E9%A3%9F%E8%82%86%E8%B5%B0%E5%A1%91-%E8%A3%BD%E4%BD%9C-%E8%B5%B0%E5%A1%91%E5%9C%B0%E5%9C%96"
        },
        {
          title: "【街頭吃到飽挑戰】",
          media: "歡樂馬介休",
          image:
            "https://storage.googleapis.com/planet4-hongkong-stateless/2019/08/524295474647596.jpg",
          link: "https://www.facebook.com/bacalhau.ent/videos/524295474647596/"
        },
        {
          title: "綠色和平：<br/>尋找走塑食堂",
          media: "CUP",
          image:
            "http://www.cup.com.hk/wp-content/uploads/2018/10/gp-oct-1-e1540546625244.jpg",
          link:
            "http://www.cup.com.hk/2018/10/29/greenpeace-plastic-free-restaurants/"
        },
        {
          title: "Jessica: <br/>不做港女 做個走塑美女",
          media: "Pressreader",
          image:
            "https://i.prcdn.co/img?regionKey=n3J9QxUtJ9Z3pwrpybl1QQ%3d%3d&scale=100",
          link:
            "https://www.pressreader.com/china/jessica-hk/20181001/282973925958756"
        },
        {
          title:
            "全城走塑﹕<br/>游說食肆支持 研發替代品<br/>環保小戰士 推動走塑",
          media: "明報",
          image:
            "https://fs.mingpao.com/pns/20190108/s00171/9f31af1fa4ba30332feac9f6d40d8e01.jpg",
          link:
            "https://news.mingpao.com/pns/%E5%89%AF%E5%88%8A/article/20190108/s00005/1546884807160/%E5%85%A8%E5%9F%8E%E8%B5%B0%E5%A1%91-%E6%B8%B8%E8%AA%AA%E9%A3%9F%E8%82%86%E6%94%AF%E6%8C%81-%E7%A0%94%E7%99%BC%E6%9B%BF%E4%BB%A3%E5%93%81-%E7%92%B0%E4%BF%9D%E5%B0%8F%E6%88%B0%E5%A3%AB-%E6%8E%A8%E5%8B%95%E8%B5%B0%E5%A1%91"
        },
        {
          title: "知多啲﹕<br/>食堂走塑等級<br/>貼紙顏色話你知",
          media: "明報",
          image:
            "https://fs.mingpao.com/pns/20190108/s00171/9f3274a3d645d0e0977d828cce3819f5.jpg",
          link:
            "https://news.mingpao.com/pns/%E5%89%AF%E5%88%8A/article/20190108/s00005/1546884812246/%E7%9F%A5%E5%A4%9A%E5%95%B2-%E9%A3%9F%E5%A0%82%E8%B5%B0%E5%A1%91%E7%AD%89%E7%B4%9A-%E8%B2%BC%E7%B4%99%E9%A1%8F%E8%89%B2%E8%A9%B1%E4%BD%A0%E7%9F%A5"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.boxes {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  padding: 0;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  .box {
    background-size: cover;
    background-position: center center;
    grid-column: span 2;
    grid-row: span 2;
    a {
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.85));
      transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      &:hover {
        background: rgba(83, 183, 218, 0.9);
      }
    }
  }
  .box__text-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    color: #fff;
    span {
      font-size: 0.8rem;
      position: absolute;
      right: 2px;
      bottom: 2px;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @include for-mobile-only {
    .box {
      grid-column: span 1;
      grid-row: span 1;
    }
    .box__text-wrapper {
      justify-content: flex-start;
      align-items: flex-end;
      p {
        font-size: 0.8rem;
      }
    }
  }
}

.pattern-content {
  background-color: #fff;
  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
}
</style>
