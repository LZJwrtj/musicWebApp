webpackJsonp([1],Array(27).concat([function(t,s,i){"use strict";function n(){var t=o()({},c.a,{uin:0,platform:"h5",needNewCode:1});return i.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.b)}function e(t){var s=o()({},c.a,{uin:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t});return i.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",s,c.b)}s.b=n,s.a=e;var a=i(29),o=i.n(a),r=i(59),c=i(58)},function(t,s,i){"use strict";i.d(s,"a",function(){return n}),i.d(s,"b",function(){return e}),i.d(s,"e",function(){return a}),i.d(s,"f",function(){return o}),i.d(s,"g",function(){return r}),i.d(s,"h",function(){return c}),i.d(s,"d",function(){return u}),i.d(s,"c",function(){return l}),i.d(s,"i",function(){return d}),i.d(s,"j",function(){return f}),i.d(s,"l",function(){return p}),i.d(s,"k",function(){return v}),i.d(s,"m",function(){return m}),i.d(s,"n",function(){return h});var n="SHOWPLAY",e="HIDEPLAY",a="PLAY",o="PAUSE",r="PREVSONG",c="NEXTSONG",u="ADDMUSIC",l="SENDAUDIO",d="SHOWMUSICLIST",f="CLOSE",p="GETDURATION",v="GETCURRENTTIME",m="SETCURRENTTIME",h="SENDLYC"},,,,,,,,,,,,,,,,function(t,s,i){function n(t){i(132)}var e=i(0)(i(69),i(174),n,"data-v-27ec5e1e",null);t.exports=e.exports},function(t,s,i){function n(t){i(141)}var e=i(0)(i(73),i(183),n,"data-v-615873e0",null);t.exports=e.exports},function(t,s,i){function n(t){i(147)}var e=i(0)(i(74),i(191),n,"data-v-ea623c44",null);t.exports=e.exports},,function(t,s,i){"use strict";var n=i(7),e=i(192),a=i(166),o=i.n(a),r=i(165),c=i.n(r),u=i(169),l=i.n(u),d=i(163),f=i.n(d),p=i(156),v=i.n(p),m=i(158),h=i.n(m),g=i(164),_=i.n(g);n.default.use(e.a),s.a=new e.a({routes:[{path:"/recommend",component:o.a},{path:"/rank",component:c.a},{path:"/songList",component:l.a},{path:"/radio",component:f.a},{path:"/MV",component:v.a},{path:"*",redirect:"/recommend"},{name:"hotListYe",path:"/hotListYe/:valId",component:h.a},{name:"rankList",path:"/rankList/:valId",component:_.a}]})},function(t,s,i){"use strict";var n=i(7),e=i(10),a=i(64),o=i(61),r=i(63),c=i(62);n.default.use(e.c),s.a=new e.c.Store({state:a.a,actions:o.a,mutations:r.a,getters:c.a})},function(t,s){},,function(t,s,i){function n(t){i(144)}var e=i(0)(i(67),i(186),n,null,null);t.exports=e.exports},,,,,,function(t,s,i){"use strict";i.d(s,"a",function(){return n}),i.d(s,"b",function(){return e});var n={g_tk:148673397,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},e={param:"jsonpCallback"}},function(t,s,i){"use strict";function n(t,s,i){return t+=(t.indexOf("?")<0?"?":"&")+e(s),new o.a(function(s,n){c()(t,i,function(t,i){t?n(t):s(i)})})}function e(t){var s="";for(var i in t){var n=void 0!==t[i]?t[i]:"";s+="&"+i+"="+encodeURIComponent(n)}return s?s.substring(1):""}s.a=n;var a=i(86),o=i.n(a),r=i(150),c=i.n(r)},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(7),e=i(52),a=i.n(e),o=i(48),r=i(53),c=i(26),u=i.n(c),l=i(51),d=i.n(l),f=i(50),p=(i.n(f),i(49));n.default.use(u.a),n.default.use(d.a),n.default.use(r.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:o.a,store:p.a,template:"<App/>",components:{App:a.a}})},function(t,s,i){"use strict";var n=i(28);s.a={showPlay:function(t){(0,t.commit)(n.a)},hidePlay:function(t){(0,t.commit)(n.b)},sendAudio:function(t,s){(0,t.commit)(n.c,s)},addMusic:function(t,s){(0,t.commit)(n.d,s)},play:function(t){var s=t.commit,i=t.state;0!==i.musicList.length&&(i.playState?(i.audio.pause(),i.lyric.togglePlay(),s(n.f)):(i.audio.play(),i.lyric.togglePlay(),s(n.e)))},pause:function(t){(0,t.commit)(n.f)},prevSong:function(t){(0,t.commit)(n.g)},nextSong:function(t){(0,t.commit)(n.h)},showMusicList:function(t){(0,t.commit)(n.i)},close:function(t){(0,t.commit)(n.j)},getDuration:function(t){(0,t.commit)(n.l)},getCurrentTime:function(t){(0,t.commit)(n.k)},setCurrentTime:function(t,s){var i=t.commit;-1!==t.state.musicPlace&&i(n.m,s)},sendLyc:function(t,s){(0,t.commit)(n.n,s)}}},function(t,s,i){"use strict";s.a={isShowHeader:function(t){return t.isShowHeader},isShowNav:function(t){return t.isShowNav},isShowPlay:function(t){return t.isShowPlay},isShowPlayBar:function(t){return t.isShowPlayBar},isShowRouter:function(t){return t.isShowRouter},btnClass:function(t){return t.playState?"fa fa-pause":"fa fa-play"},location:function(t){return t.location},songImg:function(t){return 0===t.musicList.length?"/static/img/defaultSongImg.jpg":"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+t.musicList[t.musicPlace].album.mid+".jpg?max_age=2592000"},songInfo:function(t){return 0===t.musicList.length?{name:"qq音乐",author:"最好听的音乐"}:{name:t.musicList[t.musicPlace].name,author:t.musicList[t.musicPlace].singer[0].name}},isMusicList:function(t){return t.isMusicList},musicLists:function(t){return 0!==t.musicList.length&&t.musicList},nowSong:function(t){return-1===t.musicPlace?{id:-1}:t.musicList[t.musicPlace]},currentTime:function(t){return t.currentTime},duration:function(t){return t.duration},playing:function(t){return t.playState}}},function(t,s,i){"use strict";var n,e=i(87),a=i.n(e),o=i(28);s.a=(n={},a()(n,o.a,function(t){t.isShowHeader=!1,t.isShowNav=!1,t.isShowRouter=!1,t.isShowPlay=!0,t.isShowPlayBar=!1}),a()(n,o.b,function(t){t.isShowHeader=!0,t.isShowNav=!0,t.isShowRouter=!0,t.isShowPlay=!1,t.isShowPlayBar=!0,t.isMusicList=!1}),a()(n,o.c,function(t,s){t.audio=s}),a()(n,o.d,function(t,s){t.playState=!0,t.musicList.push(s),t.musicPlace=t.musicList.length-1,t.location="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].id+".m4a?fromtag=46"}),a()(n,o.e,function(t){t.playState=!0}),a()(n,o.f,function(t){t.playState=!1}),a()(n,o.g,function(t){0===t.musicPlace?t.musicPlace=t.musicList.length-1:t.musicPlace--,t.playState=!0,t.location="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].id+".m4a?fromtag=46"}),a()(n,o.h,function(t){t.musicPlace===t.musicList.length-1?t.musicPlace=0:t.musicPlace++,t.playState=!0,t.location="http://ws.stream.qqmusic.qq.com/"+t.musicList[t.musicPlace].id+".m4a?fromtag=46"}),a()(n,o.i,function(t){t.isMusicList=!0}),a()(n,o.j,function(t){t.isMusicList=!1}),a()(n,o.k,function(t){t.currentTime=t.audio.currentTime}),a()(n,o.l,function(t){t.duration=t.audio.duration}),a()(n,o.m,function(t,s){t.audio.currentTime=s}),a()(n,o.n,function(t,s){t.lyric=s}),n)},function(t,s,i){"use strict";s.a={audio:"",location:"",musicPlace:-1,musicList:[],duration:0,currentTime:0,isShowHeader:!0,isShowNav:!0,isShowRouter:!0,isShowPlay:!1,isShowPlayBar:!0,playState:!1,isMusicList:!1,lyric:null}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i(43),i(129)),s.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&n){delete t.options.notNextTick;var s=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(s=!0,t.defaultSwiperClasses[i]=t.options[i]);var e=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(e):e()}};this.options.notNextTick?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(11),e=i.n(n),a=i(10),o=i(157),r=i.n(o),c=i(160),u=i.n(c),l=i(162),d=i.n(l),f=i(161),p=i.n(f);s.default={name:"app",computed:e()({},i.i(a.a)(["isShowHeader","isShowNav","isShowRouter","isShowPlay","isShowPlayBar","location","musicLists"])),methods:e()({},i.i(a.b)(["getDuration","getCurrentTime"])),mounted:function(){this.$store.dispatch("sendAudio",this.$refs.audio)},components:{"v-header":r.a,"v-nav":u.a,"v-play":d.a,"v-playBar":p.a}}},function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{back:function(){this.$store.dispatch("close"),this.$router.go(-1)}}}},function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(44),e=i.n(n),a=i(25),o=i.n(a);s.default={data:function(){return{showList:!1,cdLists:{},index:[]}},mounted:function(){var t=this.$route.params.valId,s=this;o.a.ajax({url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&new_format=1&pic=500&type=1&json=1&utf8=1&onlysong=0&nosign=1&disstid="+t,type:"GET",dataType:"jsonp",jsonp:"jsonpCallback",jsonpCallback:"taogeDataCallback",success:function(t){console.log(t),s.cdLists=t.cdlist[0]},error:function(t){console.log(t)}})},components:{"v-back":e.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["hotLists"],data:function(){return{selectList:{}}}}},function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(11),e=i.n(n),a=i(10);s.default={methods:e()({},i.i(a.b)(["close"])),computed:e()({},i.i(a.a)(["songInfo","isMusicList","musicLists"]))}},function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(11),e=i.n(n),a=i(10),o=i(46),r=i.n(o);s.default={methods:e()({},i.i(a.b)(["showPlay","play","nextSong","showMusicList"])),computed:e()({},i.i(a.a)(["btnClass","songImg","songInfo"])),components:{"v-music":r.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(11),e=i.n(n),a=i(7),o=i(10),r=i(46),c=i.n(r),u=i(56),l=(i.n(u),i(55)),d=i.n(l),f=i(167),p=i.n(f);a.default.filter("date",function(t){var s=new Date;s.setTime(1e3*t);var i=s.getSeconds()>10?s.getSeconds():"0"+s.getSeconds();return s.getMinutes()+":"+i}),s.default={data:function(){return{val:0,lyrics:[],time:0,currentLineNum:0}},computed:e()({},i.i(o.a)(["btnClass","songInfo","songImg","isMusicList","nowSong","currentTime","duration","playing"])),mounted:function(){},methods:e()({},i.i(o.b)(["hidePlay","prevSong","play","nextSong","showMusicList","setCurrentTime"]),{moveSetTime:function(){var t=this;this.duration>0&&setTimeout(function(){t.setCurrentTime(t.val*t.duration/100),t.lyrics.seek(t.val*t.duration/100*1e3)},0)},getLycs:function(){-1!==this.nowSong.id&&this.$http.jsonp("https://api.darlin.me/music/lyric/"+this.nowSong.id+"/?").then(function(t){var s=u.Base64.decode(t.data.lyric);this.lyrics=new d.a(s,this.handleLyric),this.$store.dispatch("sendLyc",this.lyrics),this.playing&&this.lyrics.play()})},handleLyric:function(t){var s=t.lineNum,i=t.txt;if(this.currentLineNum=s,console.log(this.currentLineNum),console.log(i),s>4){var n=this.$refs.lyricLine[s-4];this.$refs.lyricList.scrollToElement(n,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3)}}),watch:{nowSong:function(t,s){var i=this;t.id!==s.id&&(setTimeout(function(){i.getLycs()},1e3),this.lyrics&&this.lyrics.stop())},currentTime:function(){this.time=parseInt(this.currentTime)},time:function(){this.val=100*(this.currentTime/this.duration).toFixed(4)}},components:{"v-music":c.a,Scroll:p.a}}},function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(44),e=i.n(n),a=i(45),o=i.n(a),r=i(27);s.default={data:function(){return{topData:{}}},mounted:function(){this._getTopList(this.$route.params.valId)},methods:{_getTopList:function(t){var s=this;i.i(r.a)(t).then(function(t){console.log(t),s.topData=t})}},components:{"v-back":e.a,loading:o.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(27);s.default={data:function(){return{topList:[]}},created:function(){this._getRankList()},methods:{_getRankList:function(){var t=this;i.i(n.b)().then(function(s){console.log(s.data),t.topList=s.data.topList})}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(168),e=i.n(n),a=i(159),o=i.n(a),r=i(45),c=i.n(r),u=i(25),l=i.n(u);s.default={data:function(){return{slides:[],hotLists:[]}},created:function(){var t=this;setTimeout(function(){l.a.ajax({url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",type:"GET",dataType:"jsonp",jsonp:"jsonpCallback",jsonpCallback:"callback",success:function(s){console.log(s),t.slides=s.data.slider,t.hotLists=s.data.songList}})},2e3)},components:{"v-slider":e.a,"v-hotList":o.a,loading:c.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(54),e=i.n(n);s.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new e.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}),this.listenScroll){var s=this;this.scroll.on("scroll",function(t){s.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i(26);i.n(n);s.default={data:function(){return{swiperOption:{notNextTick:!0,initialSlide:1,autoplay:3e3,loop:!0,direction:"horizontal",autoplayDisableOnInteraction:!1,grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,debugger:!0}}},props:["slides"],computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){},components:{swiper:n.swiper,swiperSlider:n.swiperSlider}}},function(t,s){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,function(t,s){t.exports="data:image/gif;base64,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"},,function(t,s,i){function n(t){i(137)}var e=i(0)(i(68),i(179),n,null,null);t.exports=e.exports},function(t,s,i){function n(t){i(140)}var e=i(0)(i(70),i(182),n,null,null);t.exports=e.exports},function(t,s,i){function n(t){i(135)}var e=i(0)(i(71),i(177),n,"data-v-46463206",null);t.exports=e.exports},function(t,s,i){function n(t){i(130)}var e=i(0)(i(72),i(172),n,"data-v-218c4aa4",null);t.exports=e.exports},function(t,s,i){function n(t){i(133)}var e=i(0)(i(75),i(175),n,"data-v-27fbde44",null);t.exports=e.exports},function(t,s,i){function n(t){i(131)}var e=i(0)(i(76),i(173),n,"data-v-27b7d616",null);t.exports=e.exports},function(t,s,i){function n(t){i(142)}var e=i(0)(i(77),i(184),n,"data-v-6b4ef816",null);t.exports=e.exports},function(t,s,i){function n(t){i(136)}var e=i(0)(i(78),i(178),n,null,null);t.exports=e.exports},function(t,s,i){function n(t){i(138)}var e=i(0)(i(79),i(180),n,"data-v-507df056",null);t.exports=e.exports},function(t,s,i){function n(t){i(143)}var e=i(0)(i(80),i(185),n,"data-v-72d959d4",null);t.exports=e.exports},function(t,s,i){function n(t){i(134)}var e=i(0)(i(81),i(176),n,"data-v-3b782e50",null);t.exports=e.exports},function(t,s,i){function n(t){i(145)}var e=i(0)(i(82),i(188),n,null,null);t.exports=e.exports},function(t,s,i){function n(t){i(146)}var e=i(0)(i(83),i(190),n,null,null);t.exports=e.exports},function(t,s,i){function n(t){i(139)}var e=i(0)(i(84),i(181),n,"data-v-5e6a7314",null);t.exports=e.exports},function(t,s,i){var n=i(0)(i(65),i(189),null,null,null);t.exports=n.exports},function(t,s,i){var n=i(0)(i(66),i(187),null,null,null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"hotList"}},[i("ul",{staticClass:"clear"},t._l(t.hotLists,function(s){return i("li",[i("router-link",{attrs:{to:{name:"hotListYe",params:{valId:s.id}}}},[i("div",{staticClass:"img-wrapper"},[i("img",{attrs:{src:s.picUrl,alt:""}}),t._v(" "),i("span",{staticClass:"listen_count"},[i("i",{staticClass:"fa fa-header"}),t._v(t._s((s.accessnum/1e4).toFixed(1))+"万")]),t._v(" "),i("span",{staticClass:"icon_play"})]),t._v(" "),i("div",{staticClass:"des"},[i("p",{staticClass:"des_title"},[t._v(t._s(s.songListDesc))]),t._v(" "),i("p",{staticClass:"author"},[t._v(t._s(s.songListAuthor))])])])],1)}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"playBar"}},[i("v-music"),t._v(" "),i("ul",{staticClass:"clear"},[i("li",{staticClass:"playBar_l"},[i("img",{staticClass:"avatar",attrs:{src:t.songImg,alt:""},on:{click:t.showPlay}})]),t._v(" "),i("li",{staticClass:"playBar_c"},[i("p",{staticClass:"song_name"},[t._v(t._s(t.songInfo.name))]),t._v(" "),i("p",{staticClass:"song_author"},[t._v(t._s(t.songInfo.author))])]),t._v(" "),i("li",{staticClass:"playBar_r"},[i("span",{class:t.btnClass,on:{click:t.play}}),t._v(" "),i("span",{staticClass:"fa fa-forward",on:{click:t.nextSong}}),t._v(" "),i("span",{staticClass:"fa fa-bars",on:{click:t.showMusicList}})])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"back"},on:{click:t.back}},[i("span",{staticClass:"fa fa-arrow-left"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"nav"}},[i("ul",[i("router-link",{attrs:{tag:"li",to:"/recommend"}},[t._v("精选")]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/rank"}},[t._v("排行")]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/songList"}},[t._v("歌单")]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/radio"}},[t._v("电台")]),t._v(" "),i("router-link",{attrs:{tag:"li",to:"/mv"}},[t._v("MV")])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"recommend"}},[i("v-slider",{attrs:{slides:t.slides}}),t._v(" "),i("h2",{staticClass:"hotList"},[t._v("热门歌单")]),t._v(" "),i("v-hotList",{attrs:{hotLists:t.hotLists}}),t._v(" "),i("loading",{directives:[{name:"show",rawName:"v-show",value:!t.hotLists.length,expression:"!hotLists.length"}],staticClass:"loading"})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"moveLeft"}},[i("div",{attrs:{id:"hotListYe"}},[i("div",{staticClass:"list_content"},[i("div",{staticClass:"img_wrapper"},[i("img",{attrs:{src:t.cdLists.logo,alt:""}}),t._v(" "),i("div",{staticClass:"list_info"},[i("div",{staticClass:"des_title"},[t._v(t._s(t.cdLists.dissname))]),t._v(" "),i("div",{staticClass:"count_author"},[i("span",{staticClass:"listen_count"},[t._v(t._s((t.cdLists.visitnum/1e4).toFixed(1))+"万人播放")]),t._v(" "),i("span",{staticClass:"author"},[t._v("来自:"+t._s(t.cdLists.nickname))])])]),t._v(" "),i("span",{staticClass:"icon_play fa fa-play"}),t._v(" "),i("div",{staticClass:"gradient"})]),t._v(" "),i("ul",{staticClass:"songList"},t._l(t.cdLists.songlist,function(s,n){return i("li",{on:{click:function(i){t.$store.dispatch("addMusic",s)}}},[i("h3",{staticClass:"song_name"},[t._v(t._s(s.name)+"(Live)")]),t._v(" "),i("p",{staticClass:"song_des"},[t._v(t._s(s.singer[0].name)+"·"+t._s(s.album.title))])])}))]),t._v(" "),i("v-back",{staticClass:"back"})],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"moveLeft"}},[i("div",{attrs:{id:"hotListYe"}},[i("div",{staticClass:"list_content"},[i("div",{staticClass:"img_wrapper"},[i("img",{attrs:{src:t.topData.topinfo.pic_album,alt:""}}),t._v(" "),i("div",{staticClass:"list_info"},[i("div",{staticClass:"des_title"},[t._v(t._s(t.topData.topinfo.ListName))]),t._v(" "),i("div",{staticClass:"count_author"},[i("span",{staticClass:"listen_count"},[t._v(t._s(t.topData.update_time)+"更新")])])]),t._v(" "),i("span",{staticClass:"icon_play fa fa-play"}),t._v(" "),i("div",{staticClass:"gradient"})]),t._v(" "),i("ul",{staticClass:"songList"},t._l(t.topData.songlist,function(s,n){return i("li",[i("h3",{staticClass:"song_name"},[t._v(t._s(s.data.songname)+"(Live)")]),t._v(" "),i("p",{staticClass:"song_des"},[t._v(t._s(s.data.singer[0].name)+"·"+t._s(s.data.albumname))])])}))]),t._v(" "),i("v-back",{staticClass:"back"}),t._v(" "),i("div",[i("loading")],1)],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"header"}},[i("span",{staticClass:"h-bar fa fa-bars"}),t._v(" "),i("h2",{staticClass:"h-title"},[t._v("音乐馆")]),t._v(" "),i("span",{staticClass:"h-search fa fa-search"})])}]}},function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"loading"}},[n("img",{attrs:{src:i(154),alt:""}}),t._v(" "),n("p",[t._v("正在加载中...")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"moveUp"}},[i("div",{attrs:{id:"play"}},[i("v-music"),t._v(" "),i("div",{staticClass:"header"},[i("div",{staticClass:"down",on:{click:t.hidePlay}},[i("i",{staticClass:"fa fa-arrow-down"})]),t._v(" "),i("p",{staticClass:"header_title"},[t._v(t._s(t.songInfo.name)+"-"+t._s(t.songInfo.author))])]),t._v(" "),i("div",{staticClass:"avatar_wrapper"},[i("img",{attrs:{src:t.songImg,alt:""}})]),t._v(" "),i("scroll",{ref:"lyricList",staticClass:"lyric-container",attrs:{data:t.lyrics&&t.lyrics.lines}},[i("div",{staticClass:"lyric-wrapper"},[t.lyrics?i("div",t._l(t.lyrics.lines,function(s,n){return i("p",{ref:"lyricLine",refInFor:!0,class:{active:t.currentLineNum===n}},[t._v(t._s(s.txt))])})):t._e()])]),t._v(" "),i("mt-range",{staticClass:"process",on:{change:t.moveSetTime},model:{value:t.val,callback:function(s){t.val=s},expression:"val"}},[i("div",{staticClass:"start",slot:"start"},[t._v(t._s(t._f("date")(t.currentTime)))]),t._v(" "),i("div",{staticClass:"end",slot:"end"},[t._v(t._s(t._f("date")(t.duration)))])]),t._v(" "),i("div",{staticClass:"play_bar"},[i("div",{staticClass:"play_bar_l"},[i("span",{staticClass:"fa fa-backward",on:{click:t.prevSong}}),t._v(" "),i("span",{class:t.btnClass,on:{click:t.play}}),t._v(" "),i("span",{staticClass:"fa fa-forward",on:{click:t.nextSong}})]),t._v(" "),i("div",{staticClass:"play_bar_r"},[i("span",{staticClass:"fa fa-bars",on:{click:t.showMusicList}})])])],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"rank"}},[i("ul",{staticClass:"rank_content"},t._l(t.topList,function(s){return i("li",{staticClass:"rank_list"},[i("div",{staticClass:"img_wrapper"},[i("img",{attrs:{src:s.picUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"songList"},[i("h3",{staticClass:"songList_title"},[t._v(t._s(s.topTitle))]),t._v(" "),t._l(s.songList,function(s,n){return i("p",{staticClass:"songList_name"},[t._v(t._s(n+1)+" "),i("span",{staticClass:"songName"},[t._v(t._s(s.songname))]),t._v(" - "+t._s(s.singername))])})],2),t._v(" "),i("router-link",{attrs:{to:{name:"rankList",params:{valId:s.id}}}},[i("div",{staticClass:"arrow"},[i("i",{staticClass:"fa fa-angle-right"})])])],1)}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("v-header",{directives:[{name:"show",rawName:"v-show",value:t.isShowHeader,expression:"isShowHeader"}]}),t._v(" "),i("v-nav",{directives:[{name:"show",rawName:"v-show",value:t.isShowNav,expression:"isShowNav"}]}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowRouter,expression:"isShowRouter"}]},[i("router-view")],1),t._v(" "),i("v-play",{directives:[{name:"show",rawName:"v-show",value:t.isShowPlay,expression:"isShowPlay"}]}),t._v(" "),i("v-playBar",{directives:[{name:"show",rawName:"v-show",value:t.musicLists,expression:"musicLists"}]}),t._v(" "),i("audio",{ref:"audio",attrs:{src:t.location,autoplay:""},on:{canplay:t.getDuration,timeupdate:t.getCurrentTime}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"slider"}},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.slides,function(t){return i("swiper-slide",{key:t.id},[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"slide-img",attrs:{src:t.picUrl,alt:""}})])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"moveUp"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isMusicList,expression:"isMusicList"}],attrs:{id:"musicList"}},[i("h3",{staticClass:"title"},[t._v("播放列表("+t._s(t.musicLists?t.musicLists.length:0)+"首)")]),t._v(" "),i("span",{staticClass:"close",on:{click:t.close}},[i("i",{staticClass:"fa fa-close"})]),t._v(" "),i("ul",{staticClass:"musicList_cotent"},t._l(t.musicLists,function(s,n){return i("li",[i("p",[t._v(t._s(n+1)+"."+t._s(s.name)),i("i",{staticClass:"fa fa-close"})])])}))])])},staticRenderFns:[]}},,,function(t,s){}]),[60]);
//# sourceMappingURL=app.d9cd4ce6cc0bc038f794.js.map