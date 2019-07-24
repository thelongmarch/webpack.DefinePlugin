//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        index: "./js/index.js"
    },
    output: {
        path: __dirname+"/dist/",
        filename: "js/[name].js",
        chunkFilename: "js/[name].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            SOMETHINE: 'This is something we needed.',
            SOMETHINE2: "'This is something we needed.'"
        })
    ]
};

// 作者：滴滴出行·DDFE
// 链接：https://juejin.im/post/5868985461ff4b0057794959
// 来源：掘金
