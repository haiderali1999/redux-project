const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
  },
  mode: "development",
}
