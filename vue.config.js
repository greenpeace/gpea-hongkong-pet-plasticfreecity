module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://api.greenpeace.org.hk/2020/petition/zh-hk.2020.general.plasticfreecity.general.signup.na.mc/"
      : "/",
  css: {
    sourceMap: process.env.NODE_ENV !== "production" ? true : false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/scss/global.scss";
        `,
      },
    },
  },
};
