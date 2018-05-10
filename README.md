# Travel

> 仿“去哪儿网”APP

## 内容

``` bash
主要模拟去哪儿网的布局，实现了根据不同城市选择不同景点的功能；主要分为三个页面

# 首页
1.多区域轮播(顶部轮播图，标签选择）
2.多区域列表的循环展示
3.Iconfont的引入

# 城市选择页面
1.城市展示
2.城市搜索功能
3.左侧城市与右侧字符导航联动的动画效果
4.切换城市，首页变化
5.LocalStorage实现页面数据持久存储

# 景点详情页面
1.图片画廊组件
2.header的渐隐渐现效果
3.递归的列表组件
```

## 技术点

``` bash
# Axios
进行ajax数据的获取

# vue-router
多页面的路由跳转

# vuex
多组件间的数据共享

# stylus
编写前端样式

# 递归组件
组件自己调用自己

# 多个插件
swiper:轮播
Better-scroll：左右联动


```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
