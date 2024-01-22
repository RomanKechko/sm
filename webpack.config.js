const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  output: {
    assetModuleFilename: "assets/[name][ext][query]",
    clean: true,
  },
  /* Новое */
  entry: {
    main: "./src/index.js",
    politics: "./src/politics.js",
  },
  /* Новое */
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      /* новое */
      chunks: ["main"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./politics.html",
      chunks: ["politics"],
      filename: "politics.html",
    }),
    /* новое */
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(docx|php)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.htaccess$/i,
        loader: "file-loader",
        options: {
          name: ".htaccess",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              "...",
              {
                tag: "a",
                attribute: "href",
                type: "src",
                filter: (tag, attribute, attributes, resourcePath) => {
                  return attributes
                    .map((x) => "data-fancybox" == x["name"])
                    .some((item) => item);
                },
              },
            ],
          },
        },
      },
    ],
  },
};
