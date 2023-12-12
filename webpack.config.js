const path = require("path");
const live_server = require("live-server");
const NODE_ENV = process.env.NODE_ENV || "development";
const dev = NODE_ENV == "development";
console.log(dev, NODE_ENV);
if (dev) {
  live_server.start({
    root: "./",
    file: "index.html",
    open: true,
  });
}

module.exports = {
  mode: NODE_ENV,
  entry: ["./src/index.tsx"],
  watch: dev,
  module: {
    rules: [
      {
        test: /\.tsx/,
        use: ["ts-loader"],
        exclude: /node-modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
