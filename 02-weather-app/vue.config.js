module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://api.weatherapi.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
