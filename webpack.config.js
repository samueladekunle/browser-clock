const path = require("path");
const src = path.resolve(__dirname, "src");
const view = path.resolve(__dirname, "public");
const assets = path.resolve(__dirname, "assets");

module.exports = {
    "mode": "development",
    entry: path.join(src, "App.js"),
    output: {
        path: path.join(assets, "js"),
        filename: "index.js"
    },
    devServer: {
        contentBase: [view, assets],
        port: process.env.PORT || 9000
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: [ "react", "env" ] } } }
        ]
    }
};