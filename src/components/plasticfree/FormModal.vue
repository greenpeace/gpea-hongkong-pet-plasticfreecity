<template>
  <div>
    <v-dialog v-model="dialog" width="450">
      <template v-slot:activator="{ on }">
        <button v-on="on" class="btn main-btn">聯署支持</button>
      </template>
      <!-- form card -->
      <v-card v-if="!showThankYou">
        <div class="form-container">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              prepend-icon="mail_outline"
              :rules="emailRules"
              label="電郵地址"
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
              label="手提號碼（23456789）"
              required
            ></v-text-field>
            <v-select prepend-icon="event" v-model="birthYearPick" :items="birthYear" label="出生年份"></v-select>
            <v-btn
              text
              color="#53b7da"
              :dark="true"
              :large="true"
              :block="true"
              @click="validate"
            >聯署支持全城走塑</v-btn>
            <v-checkbox
              class="email-optin mt-4"
              v-model="moreInfo"
              label="我願意收到綠色和平發送的通訊！我並同意綠色和平按照其私隱政策與個人資料收集聲明與我保持聯絡。"
              required
            ></v-checkbox>
          </v-form>
        </div>
      </v-card>
      <!-- thank you card -->
      <transition type="fade">
        <v-card v-if="showThankYou">
          <v-card-text>
            <p class="display-1 text--primary">感謝您的參與！</p>
          </v-card-text>
          <v-card-actions>
            <v-btn text>Share</v-btn>
          </v-card-actions>
        </v-card>
      </transition>
      <!-- end thank you card -->
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
function yearData(text, value) {
  this.text = text;
  this.value = value;
}
export default {
  data() {
    return {
      // regex
      regexEmail: new RegExp(/.+@.+\..+/),
      regexName: new RegExp(/^[\u4e00-\u9fa5_a-zA-Z_ ]{1,40}$/),
      regexPhone: new RegExp(/(^[2-9]{1}[0-9]{7}|^$)/),
      // regexMobile: new RegExp(/(^[2-9]{1}[0-9]{7}|^$)/),
      dialog: false,
      dateMenu: false,
      // form
      valid: true,
      lastName: "",
      lastNameRules: [
        v => !!v || "請輸入姓氏",
        v => this.regexName.test(v) || "姓氏格式錯誤"
      ],
      firstName: "",
      firstNameRules: [
        v => !!v || "請輸入名字",
        v => this.regexName.test(v) || "名字格式錯誤"
      ],
      email: "",
      emailRules: [
        v => !!v || "請輸入電郵地址",
        v => this.regexEmail.test(v) || "電郵地址格式錯誤"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "請輸入手提號碼",
        v =>
          this.regexPhone.test(v) ||
          // this.regexMobile.test(v) ||
          "手提號碼格式錯誤"
      ],
      moreInfo: true,
      birthYearPick: "",
      showThankYou: false
    };
  },
  methods: {
    validate() {
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.postForm();
      }
    },
    async postForm() {
      try {
        let formData = new URLSearchParams();
        formData.append("supporter.emailAddress", this.email);
        formData.append("supporter.lastName", this.lastName);
        formData.append("supporter.firstName", this.firstName);
        formData.append("supporter.phoneNumber", this.phone);
        formData.append("supporter.NOT_TAGGED_6", this.birthYearPick);
        formData.append("supporter.questions.7275", this.moreInfo ? "Y" : "N");
        formData.append("supporter.NOT_TAGGED_46", "HK");
        formData.append("supporter.NOT_TAGGED_9", "zh");
        //
        console.log(this.email, this.lastName, this.firstName, this.phone, this.birthYearPick, this.moreInfo);
        console.log(formData);
        //
        let res = await axios.post(
          "https://act.greenpeace.org/page/25142/petition/2",
          formData,
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        let response = res.data;
        console.log(response);

        this.showThankYou = true;
      } catch (err) {
        console.log(err);
      }
    }
  },
  computed: {
    birthYear() {
      const yearBegin = 1920;
      let birthYear = [];
      for (let i = new Date().getFullYear(); i > yearBegin; i--) {
        birthYear.push(new yearData(i.toString(), "01/01/" + i.toString()));
      }
      return birthYear;
    }
  }
};
</script>
<style lang="scss" scoped>
.main-btn {
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  color: $wod-light-blue;
  border-radius: 25px;
  margin: 0 auto;
}
.form-container {
  padding: 20px;
}
.headline {
  background-color: $wod-light-blue;
  color: white;
}
.email-optin {
  font-size: 11px !important;
  color: #666;
}
</style>