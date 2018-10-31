# `webpack`的配置

1. 在文件夹中运行命令：`npm init -y`,使用默认配置初始化项目配置

2. 搭建项目目录结构

   - `src`存放开发文件
     - `components`存放`Vue`模板文件
     - `img`存放图片资源
     - `index.html`为主页面
     - `App.vue`为页面主页视图模板
     - `index.js`为js代码入口
     - `router.js`为`vue-router`前端路由
     - `store.js`为vuex全局状态

3. 安装`webpack`为开发依赖项：`npm i webpack -D`

4. 安装`webpack-cli`为开发依赖项：`npm i webpack-cli -D`

5. 安装Babel相关插件：`@babel/core`、 `@babel/preset-env`、 `@babel/plugin-transform-runtime`  、`@babel/runtime`、 `babe-loader` 、`babel-plugin-component`根据需要决定是否安装`babel-plugin-transform-remove-strict-mode`

   - `@babel/core`的作用是把` js` 代码分析成 `ast` ，方便各个插件分析语法进行相应的处理。有些新语法在低版本` js` 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 `ast`，分析其语法后再转为低版本 `js`。

   - `babe-loader`用来加载`js`文件,配合`webpack`进行打包

   - `@babel/plugin-transform-runtime`  `Babel`几乎可以编译所有时新的 JavaScript 语法，但对于` APIs `来说却并非如此。例如： Promise、Set、Map 等新增对象，Object.assign、Object.entries等静态方法。为了不污染全局对象，babel-runtime 的做法是自己手动引入 helper 函数，`const Promise = require('babel-runtime/core-js/promise') `就可以引入 Promise。 babel-runtime 也有问题，第一，很不方便，第二，在代码中中直接引入 helper 函数，意味着不能共享，造成最终打包出来的文件里有很多重复的 helper 代码。所以，babel 又开发了 `babel-plugin-transform-runtime`，这个模块会将我们的代码重写，如将 Promise 重写成 _Promise（只是打比方），然后引入_Promise helper 函数。这样就避免了重复打包代码和手动引入模块的痛苦。此插件依赖`@babel/runtime`

   - `@babel/preset-env`可以通过此插件设置代码将会运行的环境，是要适应到`IE7`。还是只用适应到`IE8`,然后根据这个环境进行编译。

   - `babel-plugin-transform-remove-strict-mode`  `webpack`打包默认使用严格模式，此插件可以取消严格模式，来兼容一些不是严格模式的第三方库

   - `babel-plugin-component`  借助 此插件我们可以只引入需要的组件，以达到减小项目体积的目的。如果你只希望引入部分组件，比如 Button 和 Select，那么可以在使用的组件里这样写。
     `import { Button, Select } from 'element-ui'`

   - 具体配置见`.babelrc`


1. 安装解析对应模块的loader，loader的执行顺序是从右往左的
   - `css`相关：`style-loader`, `css-loader`
   - `sass`相关：`style-loader`, `css-loader`，`sass-loader`(内部依赖node-sass)
   - 图片/字体相关：`url-loader`
   - `js`相关：`babel-loader`(第五点已说明)
   - `vue`相关：`vue-loader` (`Vue-loader`在15.*之后的版本都是 `vue-loader`的使用都是需要伴生 `VueLoaderPlugin`的)

1. 安装相关的`plugins`插件
   - `html-webpack-plugin` `VueLoaderPlugin`(此插件存放于`vue-loader/lib/plugin`)

1. 说明：node中直接require的`Vue`是runtime版本，可以在`webpack.config.js`中配置别名引用到完整版的`vue`， 还可以使用@别名配置路径