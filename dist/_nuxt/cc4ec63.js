(window.webpackJsonp=window.webpackJsonp||[]).push([[81,71],{1418:function(e,t,o){"use strict";o.r(t);var n={props:{tag:{type:String,default:"div"},once:{type:Boolean,default:!0}},data:function(){return{options:{rootMargin:"-40% -40%"},observer:null}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){e.handleIntersect(t[0])}),this.options),this.observer.observe(this.$el)},unmounted:function(){this.observer.disconnect()},methods:{handleIntersect:function(e){e.isIntersecting?(this.$emit("reveal"),this.once&&this.observer.disconnect()):this.$emit("out")}}},r=o(22),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)(e.tag,{tag:"component"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1443:function(e,t,o){var content=o(1470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("f1b8965e",content,!0,{sourceMap:!1})},1469:function(e,t,o){"use strict";o(1443)},1470:function(e,t,o){var n=o(44)((function(i){return i[1]}));n.push([e.i,'.ui-video2{display:block;overflow:hidden;position:relative;width:100%;z-index:0;--color:var(--color-alt);border-bottom-right-radius:5rem;border-top-left-radius:5rem}.ui-video2:before{content:"";display:block;padding-top:56.25%;width:100%}.ui-video2>a,.ui-video2>div{height:100%;left:0;position:absolute;top:0;width:100%}.ui-video2.is-youtube{display:block;position:relative}.ui-video2.is-youtube:before{content:"";display:block;padding-top:56.25%;width:100%}.ui-video2 iframe,.ui-video2.is-youtube>a,.ui-video2.is-youtube>div{height:100%;left:0;position:absolute;top:0;width:100%}.ui-video2 iframe{z-index:1}.ui-video2__cover{height:100%;left:0;padding:0;position:absolute;text-align:left;top:0;width:100%;z-index:2}.ui-video2__play{align-items:center;border:1px solid var(--color-alt);border-radius:12rem;color:var(--color-alt);display:flex;flex:0 0 8.5rem;height:8.5rem;justify-content:center;width:8.5rem;z-index:3}@media screen and (max-width:1079px){.ui-video2__play{flex:0 0 6rem;height:6rem;width:6rem}}.ui-video2__front{height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}@media screen and (min-width:1080px){.ui-video2__front{align-items:flex-end;display:flex;gap:3rem;justify-content:flex-start;padding:6rem 12rem 6rem 6rem}}@media screen and (max-width:1079px){.ui-video2__front{align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;padding:2rem}}',""]),n.locals={},e.exports=n},1482:function(e,t,o){"use strict";o.r(t);o(68),o(27),o(81),o(87),o(88),o(246);var n=o(75),r={props:{videoType:{type:String,default:"facebook"},videoId:{type:String,required:!0}},data:function(){return{myVideoPayer:null,vimeoPlayer:null,youtubePlayer:null}},computed:{url:function(){var e=new URLSearchParams(this.options).toString();return"youtube"===this.videoType?"https://www.youtube-nocookie.com/embed/".concat(this.videoId,"?").concat(e):""},options:function(){return{autoplay:0,mute:1,controls:1,hl:this.$i18n.locale,fs:0,rel:0,modestbranding:1,playsinline:0,showinfo:0,enablejsapi:0}}},mounted:function(){var e=this;"youtube"===this.videoType&&this.initYoutubeVideo(),Object(n.wait)(100,(function(){"facebook"===e.videoType&&e.initFacebookVideo(),"vimeo"===e.videoType&&e.initVimeoVideo()}))},beforeDestroy:function(){"youtube"===this.videoType&&this.youtubePlayer&&this.youtubePlayer.destroy(),this.vimeoPlayer=null,this.youtubePlayer=null},methods:{initFacebookVideo:function(){var e=this;window.FB.XFBML&&window.FB.XFBML.parse(),window.FB&&!this.myVideoPayer?window.FB.Event.subscribe("xfbml.ready",(function(t){e.myVideoPayer||"video"!==t.type||t.id!=="player-".concat(e._uid)||(e.myVideoPayer=t.instance)})):Object(n.wait)(500,(function(){e.initFacebookVideo()}))},initYoutubeVideo:function(){var e=this;if(!document.getElementById("youtubescript")){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",t.id="youtubescript";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}window.YT?this.youtubePlayer=new window.YT.Player("player-".concat(this._uid),{videoId:this.videoId,playerVars:this.options,events:{onReady:function(){}}}):Object(n.wait)(200,(function(){e.initYoutubeVideo()}))},initVimeoVideo:function(){},handleReveal:function(){"facebook"===this.videoType&&this.myVideoPayer&&this.myVideoPayer.play(),"youtube"===this.videoType&&window.YT&&this.youtubePlayer&&"function"==typeof this.youtubePlayer.playVideo&&this.youtubePlayer.playVideo(),"vimeo"===this.videoType&&this.vimeoPlayer&&this.vimeoPlayer.play()},handleOut:function(){"facebook"===this.videoType&&window.FB&&this.myVideoPayer&&this.myVideoPayer.pause(),"youtube"===this.videoType&&window.YT&&this.youtubePlayer&&"function"==typeof this.youtubePlayer.pauseVideo&&this.youtubePlayer.pauseVideo(),"vimeo"===this.videoType&&this.vimeoPlayer&&this.vimeoPlayer.pause()}}},l=(o(1469),o(22)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ui-video2",class:"is-".concat(e.videoType)},[t("client-only",[t("UiIntersect",{attrs:{once:!1},on:{reveal:e.handleReveal,out:e.handleOut}},["facebook"===e.videoType?t("div",{ref:"facebookVideo",staticClass:"fb-video",attrs:{id:"player-".concat(e._uid),"data-href":"https://www.facebook.com/facebook/videos/".concat(e.videoId,"/"),"data-width":"auto","data-autoplay":"true","allow-presentation":"true","data-mute":"true","data-show-text":"false"}}):"youtube"===e.videoType?t("div",{ref:"iframe",staticClass:"ui-video2__video",attrs:{id:"player-".concat(e._uid),type:"text/html",frameborder:"0",allow:"autoplay ; fullscreen","allow-presentation":"",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}):t("iframe",{ref:"iframe",staticClass:"ui-video2__video",attrs:{id:"player-".concat(e._uid),type:"text/html",src:e.url,frameborder:"0",allow:"autoplay ; fullscreen","allow-presentation":"",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiIntersect:o(1418).default})}}]);