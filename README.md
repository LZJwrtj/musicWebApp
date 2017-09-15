# music-app

> 学习vue有一段时间了，所以就想尝试着写一个关于vue的实战项目，因为平常比较喜欢听歌，所以就仿照qq音乐写了一个基于Vue2.0的音乐播放器，目前由于时间问题，只是完成了部分功能和页面，后续的功能会逐渐开发出来。

[项目演示地址](https://lzjwrtj.github.io/musicWebApp/dist/index.html)(PC端请在移动模式下演示)

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/qrcode_image.png)

## 项目组成

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/vueMusic.png)

## 组件部分

- header 头部部分
- tab 导航部分
- recommend 推荐页面
- recommendDetail 推荐列表详情
- rank 排行页面
- rank-list 排行列表详情
- music-list 歌曲详情列表
- song-list 歌曲列表
- player 播放器页面
- scroll 滚动功能
- search 搜索页面
- search-box 搜索框
- suggest 搜索列表
- slide 轮播图
- loading loading组件
- user 用户中心（开发中...）
- play-list 播放列表（开发中...）
###  更新
- 完成了搜索页面和功能的开发
- 对代码做了精简，增加了可复用的组件

## 技术栈

- MVVM框架：Vue2.0
- 状态管理：Vuex
- 脚手架：vue-cli
- 前端路由：Vue-router
- 服务端通信：jsonp
- 第三方插件：better-scroll、vue-awesome-swiper、vue-lazyload、mint-ui
- 构建工具：webpack2.0
- 源码：es6
- 样式：less
- 规范：eslint

## 部分页面展示

![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/recommend.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/rank.png)        
![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/search.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/music-list.png)        
![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/player.png)        ![预览](https://github.com/LZJwrtj/musicwebApp/blob/master/screen/singerDetail.png)

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
