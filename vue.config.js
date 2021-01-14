module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "ASCII Images";
      return args;
    });
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ASCII-Images/" : "/"
};
