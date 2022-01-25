## 前端项目优化

### 前端工程构建工具

随着前后端分离以来，在一个项目开发的过程中，前端工程师需要维护的代码越来越庞大，代码维护、打包、发布等流程也变得极为繁琐，同时浪费的时间和精力也会越来越多。并且这些过程都是人工手动完成的，人为的错误也随着流程的增加而增加。在这种情况下，许多自动化前端构建工具也就诞生了。

比如：百度的 [fis](http://fis.baidu.com/)，以及 [Gulp](https://www.gulpjs.com.cn/)、[Grunt](https://www.gruntjs.net/)，以及后面我们在此次培训中主要用到的打包工具 [webpack](https://webpack.docschina.org/)。

这篇文档会主要讲在使用 webpack 构建前端项目中会用到的一些可以优化我们项目的地方，文档内容可能会有一些遗漏或错误的地方，欢迎大家补充和指正。

> 这篇文档会默认大家对 webpack 已经有了一定的了解。大家可以去[webapck 官网](https://webpack.docschina.org/)上查阅，也可以看我以前写的一篇文档[Webpack 基础](https://www.yuque.com/docs/share/a8498ebf-5a7f-4136-92b7-fb56063166ab?#)

### 项目打包

一般情况下，项目打包就是将我们项目中的文件合并压缩。但是在前端项目中我们又不能一味地让所有的文件全都合并成一个文件，那么这一个文件的体积就会非常大，加载慢而且还会出现加载失败的情况。所以我们在合并文件的基础上还得做好文件的拆分。

#### 文件合并与拆分

在 webpack 中，如果我们使用的是 webpack 默认配置的话，那么所有的 js 文件都会打包成一个文件。

```js
// webpack.config.js
// 后面出现的所有配置文件都是以此为基础进行增减

module.exports = {
  // 省略其他配置...
  entry: "./src/index.js",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  // 省略其他配置...
};
```

![1.png](./webpack-image/1.png)

我们可以看到 app.js 文件非常大，超过了 5M。这样的文件对于前端项目来说是一个巨大的风险，它会影响到我们项目的加载时间，甚至会出现在网络不好的情况下加载失败。

对于这种情况，我们一般会将文件拆分成小的文件，以方便浏览器加载。webpack 内置了一个插件 [SplitChunksPlugin](https://webpack.docschina.org/plugins/split-chunks-plugin/)，能够帮助我们切分文件。

> 实际上这个插件是用来避免文件之间重复依赖的，可以将一些公用文件单独打包。

```diff
// webpack.config.js

module.exports = {
  // 省略其他配置...
  entry: "./src/index.js",
  output: {
-    filename: "app.[id].js",
+    filename: "app.[id].js",
    path: path.resolve(__dirname, "dist"),
  },
+  optimization: {
+    splitChunks: {
+      chunks: "all",
+      minChunks: 2, // 表示最少要切分出两个文件
+      maxSize: 2000000, // 表示单个文件最大体积
+    },
  },
  // 省略其他配置...
};
```

打包出来的文件数量立马变多了，但是体积变小了

![2.png](./webpack-image/2.png)

上面打包出来的文件，对于前端工程来讲一点也不符合预期，实际上我们更希望那些引入的第三方库能够单独的打包成一个文件，而我们自己项目代码则另外打包成一个文件。这里我们就会用到 SplitChunksPlugin 另外一个功能了。

```diff

module.exports = {
  // 省略其他配置...
  entry: "./src/index.js",
  output: {
-    filename: "app.[hash].js",
+    filename: "app.[name].js",
    path: path.resolve(__dirname, "dist"),
  },
+  optimization: {
+    splitChunks: {
+      cacheGroups: {
+        defaultVendors: {
+          test: /[\\/]node_modules[\\/]/,
+          name: "vendor",
+          chunks: "all",
+        },
+      },
+    },
+  },
  // 省略其他配置...
};
```

打包后，我们就能将 node_modules 中的所有 js 文件单独打包成一个 文件 app.vendor.js，而我们自己的项目代码则打包成 app.main.js。

![3.png](./webpack-image/3.png)

这里主要以 js 文件为主，介绍了在 webpack 中的合并与拆分，其实我们也可以看到对 css 文件来说，SplitChunksPlugin 插件也进行了处理。然而我们项目中还有其他文件比如：svg、png、字体文件等等。一般情况下我们只对 png 图片的小图标进行雪碧图处理，其他文件暂不处理。

#### 文件压缩

webpack 在对文件进行合并的同时会简单的将文件压缩一下，文件体积会略微缩小一点。但是 js 代码中的注释等内容并没有清楚，所以我们还能够再压缩一下。

#### 源代码映射功能

### 文件加载

#### CDN

#### defer 与 async

#### 动态加载

#### 缓存

### 首屏加载

### 其他网络请求
