const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode: mode,
  output: {
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(docx|php)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.htaccess$/i,
        loader: 'file-loader',
        options: {
          name: '.htaccess',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              '...',
              {
                tag: 'a',
                attribute: 'href',
                type: 'src',
                filter: (tag, attribute, attributes, resourcePath) => {
                  return attributes.map((x) => 'data-fancybox' == x['name']).some(item => item);
                }
              }
            ]
          }
        }
      }
    ]
  }
}
