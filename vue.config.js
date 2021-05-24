module.exports = {
    filenameHashing: false,
    configureWebpack: {
        resolve: {
          alias: {
            vue$: "vue/dist/vue.js",
            "@@": require("path").resolve(__dirname, 'public'),
          },
          extensions: ['.js', '.vue', '.json', '.svg']
        }
    }
}