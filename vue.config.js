module.exports = {
    pages: {
        //入口文件，主页
        index: {
          // 入口js的路径
          entry: 'src/main.js',
          // 页面模板路径
          template: 'public/index.html'
        },
        eleme: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pagesSrc/eleme/eleme.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/eleme.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'eleme.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'eleme page',

            // 包含的模块，可选项
            // chunks: ['eleme']
        },
        questionnaire: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pagesSrc/questionnaire/questionnaire.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/questionnaire.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'questionnaire.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'questionnaire page',

            // 包含的模块，可选项
            // chunks: ['questionnaire']
        }
    }
}