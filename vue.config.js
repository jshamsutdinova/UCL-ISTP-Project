module.exports = {
  publicPath: '/ucl-istp-project/',

  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
