<template>
  <section>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <button round v-on="on" class="btn main-btn">
          參與連署
        </button>
      </template>

      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          參與連署
        </v-card-title>

        <div class="form-container">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >

            <v-text-field
              v-model="email"
              prepend-icon="mail_outline"
              :rules="emailRules"
              label="電子信箱"
              required
            ></v-text-field>

            <v-text-field
              v-model="lastName"
              prepend-icon="person"
              :rules="lastNameRules"
              label="姓氏"
              required
            ></v-text-field>

            <v-text-field
              v-model="firstName"
              prepend-icon="person"
              :rules="firstNameRules"
              label="名字"
              required
            ></v-text-field>

            <v-text-field
              v-model="phone"
              prepend-icon="local_phone"
              :rules="phoneRules"
              label="電話（0912345678 或 02-23612351）"
              required
            ></v-text-field>

            <v-menu
              lazy
              ref="menu"
              :close-on-content-click="false"
              v-model="dateMenu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                label="出生年份"
                v-model="birthdayShow"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker 
                ref="picker"
                v-model="birthdayPick" 
                no-title 
                reactive
                :max="today"
                @input="saveDatePicker"></v-date-picker>
            </v-menu>

            <v-checkbox
              v-model="moreInfo"
              label="我要即時收到最新專案訊息，知道更多參與和協助的方法。（綠色和平尊重並保障您的個人隱私資料，您隨時可取消訂閱，請參考隱私保護政策。）"
              required
            ></v-checkbox>

          </v-form>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="validate"
            :large="true"
          >
            立即連署
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
import dayjs from 'dayjs';
// import axios from 'axios';

export default {
  data() {
    return {
      // regex 
      regexEmail: new RegExp(/.+@.+\..+/),
      regexName: new RegExp(/^[\u4e00-\u9fa5_a-zA-Z_ ]{1,40}$/),
      regexPhone: new RegExp(/0\d{1,2}-\d{6,8}/),
      regexMobile: new RegExp(/((?=(09))[0-9]{10})$/),
      dialog: false,
      dateMenu: false,
      // form
      valid: true,
      lastName: '',
      lastNameRules: [
        v => !!v || '請輸入姓氏',
        v => this.regexName.test(v) || '姓氏格式錯誤'
      ],
      firstName: '',
      firstNameRules: [
        v => !!v || '請輸入名字',
        v => this.regexName.test(v) || '名字格式錯誤',
      ],
      email: '',
      emailRules: [
        v => !!v || '請輸入電子郵件',
        v => this.regexEmail.test(v) || '電子郵件格式錯誤',
      ],
      phone: '',
      phoneRules: [
        v => !!v || '請輸入電話',
        v => (this.regexPhone.test(v) || this.regexMobile.test(v)) || '電話格式錯誤',
      ],
      moreInfo: true,
      birthdayPick: '1990-01-01',
    };
  },
  methods: {
    validate () {
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.postForm();
      }
    },
    async postForm () {
      try {
        
        let year = dayjs(this.birthdayPick).format("DD/MM/YYYY");

        let formData = new URLSearchParams();
        // formData.append("sessionId", "2b3ede609e844beebee2571434f15a36-server9800");
        formData.append("supporter.emailAddress", this.email);
        formData.append("supporter.lastName", this.lastName);
        formData.append("supporter.firstName", this.firstName);
        formData.append("supporter.phoneNumber", this.phone);
        formData.append("supporter.NOT_TAGGED_6", year);
        formData.append("supporter.questions.7276", (this.moreInfo ? "Y" : "N"));
        formData.append("supporter.NOT_TAGGED_19", this.lastName.trim() + this.firstName.trim());
        formData.append("supporter.NOT_TAGGED_28", "TW");

        console.log(formData);
        console.log(this.$router.currentRoute);

        // let res = await axios.post('https://act.greenpeace.org/page/40031/petition/2', formData, { headers: {'Content-Type': 'application/x-www-form-urlencoded' }});
        // let response = res.data;
        // console.log(response)

      } catch (err) {
        console.log(err);
      }
    },
    saveDatePicker() {
      this.$refs.picker.activePicker = 'YEAR';
      this.dateMenu = false;
    }
  },
  watch: {
    dateMenu (val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'));
    }
  },
  computed: {
    birthdayShow() {
      let showing = new Date(this.birthdayPick);
      return showing.getFullYear();
    },
    today () {
      
      let today = new Date().toLocaleDateString();
      return today;

    }
  }
};
</script>
<style lang="scss" scoped>
.main-btn {
  font-size: 18px;
  margin-top: 1rem;
  margin-right: 2rem;
  font-weight: bold;
  background-color: #fff;
  color: $wod-light-blue;
}
.form-container {
  padding: 20px;
}
.headline {
  background-color: $wod-light-blue;
  color: white;
}
// section {
//   padding: 2rem 0 3rem;
//   background-color: $wod-gray-3;
//   background-image: require("@/assets/texture/texture_organization.jpg");
//   background-repeat: repeat;
// }

// header {
//   .header__image img {
//     max-width: 160px;
//   }
// }

// .alliance__list {
//   max-width: 900px;
//   margin: 0 auto;
//   margin-top: 2rem;
//   padding: 0 15px;
//   list-style: none;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   align-items: center;

//   @include for-mobile-only {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 1rem;
//   }

//   li {
//     font-weight: bold;
//     text-align: center;
//     background-color: #fff;
//     color: $wod-forest;
//     border: 1px solid transparent;
//     border-radius: 2rem;
//     padding: 0.5rem 2rem;
//     position: relative;
//     text-decoration: none;
//     backface-visibility: hidden;
//     transition: all 0.3s ease-out;

//     &:hover {
//       color: $wod-green;
//       box-shadow: 0 0 0 2px $wod-green;
//       /* emulate the border */
//     }
//   }
// }

// .vision__statement {
//   text-align: center;
// }

// .vision__toggle {
//   font-size: 1.6rem;
//   margin: 2rem auto;
//   color: $wod-green;
//   border: 2px solid $wod-green;
//   background-color: transparent;
//   padding: 0.5rem 3rem;
//   cursor: pointer;
//   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//   transition-property: transform;
//   transition-duration: 0.3s;

//   &:hover {
//     transform: scale(1.1);
//   }
// }
</style>