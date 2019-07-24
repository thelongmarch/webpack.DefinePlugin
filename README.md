# webpack.DefinePlugin
webpack.DefinePlugin  全局变量demo

###  全局定义两个string变量（webpack.config.js）
 SOMETHINE: 'This is something we needed.'
 SOMETHINE2: "'This is something we needed.'"

### demo环境

npm i -g webpack@3.8.1

### 运行

根目录：webpack

### 结果（dist/js/index.js）

console.log('one:',This is something we needed.)
console.log('two:','This is something we needed.')

### 总结

经过webpack的DefinePlugin定义的全局变量，如果是字符串，不多加一层引号才是我们需要的结果。


官方文档：

https://webpack.docschina.org/plugins/define-plugin/

注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。


