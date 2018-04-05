var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
     { test: /\.css$/,
       use: [
         { loader: "style-loader" },
         { loader: "css-loader" }
       ]
     },
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: "babel-loader"
     }, {
       test: /\.jsx?$/,
       exclude: /node_modules/,
       use: "babel-loader"
     }
   ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
