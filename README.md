# music-app

> 学习vue有一段时间了，所以就想尝试着写一个关于vue的实战项目，因为我平常比较喜欢听歌，所以就仿照qq音乐写了一个基于Vue2.0的音乐播放器

[项目演示地址](https://lzjwrtj.github.io/musicWebApp/dist/index.html)(PC端请在移动模式下演示)

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/qrcode.png)

## 项目组成

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/vueMusic.png)

## 组件部分

- header 头部部分组件
- nav 导航部分组件
- recommend 推荐页面组件
- rank 排行榜页面组件
- hotList 推荐列表组件
- hotListYe 推荐列表详情页组件
- rankList 排行榜列表详情组件
- play 播放器页面组件
- playBar 播放工具组件
- musicList 音乐列表组件
- back 返回按钮组件
- scroll 滚动功能组件
- search 搜索页面组件（开发中...）

## 技术栈

- MVVM框架：Vue2.0
- 状态管理：Vuex
- 脚手架：vue-cli
- 前端路由：Vue-router
- 服务端通信：jsonp
- 移动端滚动库：better-scroll
- 构建工具：webpack2.0
- 源码：es6
- 样式：less
- 规范：eslint

## 部分页面展示

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/recommend.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/hotlist.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/rank.png)

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/play.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/static/img/musiclist.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
