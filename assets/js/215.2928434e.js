(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{689:function(a,e,n){"use strict";n.r(e);var t=n(50),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"仿b站风格的一套vuepress主题，-基于默认主题修改，-食べにようこそ-版本号：1-0-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#仿b站风格的一套vuepress主题，-基于默认主题修改，-食べにようこそ-版本号：1-0-4"}},[a._v("#")]),a._v(" 仿b站风格的一套vuepress主题， 基于默认主题修改， 食べにようこそ(版本号：1.0.4)")]),a._v(" "),n("h2",{attrs:{id:"增加了分类，-标签，-友链，-时间线，-分页等功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加了分类，-标签，-友链，-时间线，-分页等功能"}},[a._v("#")]),a._v(" 增加了分类， 标签， 友链， 时间线， 分页等功能")]),a._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("1. npm install vuepress-theme-secondary_element --save\n2. 在config.js中添加字段 theme:  vuepress-theme-secondary_element\n3. 添加themeConfig:{}字段\n")])])]),n("h2",{attrs:{id:"以下配置都在themeconfig里面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以下配置都在themeconfig里面"}},[a._v("#")]),a._v(" 以下配置都在themeConfig里面")]),a._v(" "),n("h3",{attrs:{id:"添加首页背景图片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加首页背景图片"}},[a._v("#")]),a._v(" 添加首页背景图片")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v(" 在docs下添加README.md\n ---\n home: true\n search: true\n bgImage: './xxx.jpg'\n bgImageStyle: {\n       \n }\n ---\n home是开启主页，search是开启搜索功能， bgImage 是主页的背景图片路径\n 图片路径：\n    1. 如果填相对路径， 把xxx.jpg资源放在docs/.vuepress/public目录下，\n    2. 或者直接填绝对路径 ： http:// xxxxx/xx.png\n bgImageStyle自定义主页背景图片样式\n")])])]),n("h3",{attrs:{id:"添加头像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加头像"}},[a._v("#")]),a._v(" 添加头像")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\navatar: './xxx.jpg',\n图片路径：\n        1. 如果填相对路径， 把xxx.jpg资源放在docs/.vuepress/public目录下，\n        2. 或者直接填绝对路径 ： http:// xxxxx/xx.png\n")])])]),n("h3",{attrs:{id:"添加分类功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加分类功能"}},[a._v("#")]),a._v(" 添加分类功能")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\ncategories: {\n            text: '分类',\n            index: 2,\n            icon: 'hamlin-categories'\n        },\ntext是显示的文字， index是显示在导航栏的第几个， icon是文字前的图标的类名\n然后在docs文件夹下新建categories文件夹， 文件夹下新建README.md文件\nREADME.md里的内容：\n ---\n isCategories: true\n sidebar: false\n isComment: false\n ---    \n")])])]),n("h3",{attrs:{id:"可选图标类名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可选图标类名"}},[a._v("#")]),a._v(" 可选图标类名")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("hamlin-categories 分类\nhamlin-friendLink 友链\nhamlin-bili bilibili电视\nhamlin-home 房子\nhamlin-comment 对话框\nhamlin-eye 眼睛\nhamlin-tag 标签\nhamlin-date 日历\nhamlin-person 人头\nhamlin-rocket 火箭\nhamlin-time 时间沙漏\n如需其它图标请微信/邮箱告诉我\n")])])]),n("h3",{attrs:{id:"添加标签功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加标签功能"}},[a._v("#")]),a._v(" 添加标签功能")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\ntags: {\n           text: '标签',\n            index: 3,\n           icon: 'hamlin-tag'\n        },\ntext是显示的文字， index是显示在导航栏的第几个， icon是文字前的图标的类名\n然后在docs文件夹下新建tags文件夹， 文件夹下新建README.md文件\nREADME.md里的内容：\n ---\n isTags: true\n sidebar: false\n isComment: false\n ---\n")])])]),n("h3",{attrs:{id:"添加时间线功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加时间线功能"}},[a._v("#")]),a._v(" 添加时间线功能")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\ntimeLine: {\n            text: '时间线',\n            index: 5,\n            icon: 'hamlin-date'\n        },\ntext是显示的文字， index是显示在导航栏的第几个， icon是文字前的图标的类名\n然后在docs文件夹下新建timeLine文件夹， 文件夹下新建README.md文件\nREADME.md里的内容：\n---\nisTimeLine: true\nsidebar: false\nisComment: false\n---\n")])])]),n("h3",{attrs:{id:"添加友链功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加友链功能"}},[a._v("#")]),a._v(" 添加友链功能")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\nfriendLink: {\n            text: '友链',\n            index: 10,\n            data: [{\n                name: 'xxx', // 名字\n                introduce: 'xxxxx', // 一句话简介\n                avatar: 'http://xxxx.jpg', // 头像\n                src: 'http://xxxx' // 博客链接\n            }],\n            icon: 'hamlin-friendLink'\n        },\ntext是显示的文字， index是显示在导航栏的第几个， icon是文字前的图标的类名，data是友链的数据\n然后在docs文件夹下新建friendLink文件夹， 文件夹下新建README.md文件\nREADME.md里的内容：\n---\nisFriendLink: true\nsidebar: false\n--- \n")])])]),n("h3",{attrs:{id:"添加评论功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加评论功能"}},[a._v("#")]),a._v(" 添加评论功能")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("首先在config.js里的themeConfig里添加以下字段：\nvalineConfig: {\n            appId: '你的id',// your appId\n            appKey: '你的密钥', // your appKey\n            notify:true,\n            verify:true,\n            avatar:'identicon',\n            placeholder: '填写邮箱可以收到回复提醒哦',\n            visitor: true,  // 阅读量统计,\n            recordIP: true\n        },\n")])])]),n("h3",{attrs:{id:"要开启评论功能请参考这里"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#要开启评论功能请参考这里"}},[a._v("#")]),a._v(" 要开启评论功能请参考"),n("a",{attrs:{href:"https://valine.js.org/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),n("OutboundLink")],1)]),a._v(" "),n("h3",{attrs:{id:"可以的话赏颗star吧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可以的话赏颗star吧"}},[a._v("#")]),a._v(" 可以的话赏颗star吧")]),a._v(" "),n("h3",{attrs:{id:"联系方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系方式"}},[a._v("#")]),a._v(" 联系方式")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("微信：qq110035 加我口令：愿你出走半生，归来仍是少年\nqq邮箱： 1780597343@qq.com \n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);