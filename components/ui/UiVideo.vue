<template>
  <div class="ui-video2" :class="`is-${videoType}`">
    <client-only>
      <UiIntersect :once="false" @reveal="handleReveal" @out="handleOut">
        <div
          v-if="videoType === 'facebook'"
          :id="`player-${_uid}`"
          ref="facebookVideo"
          class="fb-video"
          :data-href="`https://www.facebook.com/facebook/videos/${videoId}/`"
          data-width="auto"
          data-autoplay="true"
          allow-presentation="true"
          data-mute="true"
          data-show-text="false"
        />
        <div
          v-else-if="videoType === 'youtube'"
          :id="`player-${_uid}`"
          ref="iframe"
          type="text/html"
          class="ui-video2__video"
          frameborder="0"
          allow="autoplay ; fullscreen"
          allow-presentation
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
        <iframe
          v-else
          :id="`player-${_uid}`"
          ref="iframe"
          type="text/html"
          class="ui-video2__video"
          :src="url"
          frameborder="0"
          allow="autoplay ; fullscreen"
          allow-presentation
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      </UiIntersect>
    </client-only>
  </div>
</template>

<script>
// import Player from '@vimeo/player'
import { wait } from '@unanim/helpers'

export default {
  props: {
    videoType: {
      type: String,
      default: 'facebook',
    },
    videoId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    myVideoPayer: null,
    vimeoPlayer: null,
    youtubePlayer: null,
  }),

  computed: {
    url() {
      const optionsParams = new URLSearchParams(this.options).toString()
      if (this.videoType === 'youtube') {
        return `https://www.youtube-nocookie.com/embed/${this.videoId}?${optionsParams}`
        // } else if (this.videoType === 'vimeo') {
        //   return `https://player.vimeo.com/video/${this.videoId}?${optionsParams}`
      } else {
        return ''
      }
    },
    options() {
      return {
        autoplay: 0,
        mute: 1,
        controls: 1,
        hl: this.$i18n.locale,
        fs: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 0,
        showinfo: 0,
        enablejsapi: 0,
      }
    },
  },

  mounted() {
    // IF TRACKING OFF resume
    // if (!this.$cookieManager.cookies.tracking) return

    if (this.videoType === 'youtube') {
      this.initYoutubeVideo()
    }

    wait(100, () => {
      if (this.videoType === 'facebook') {
        this.initFacebookVideo()
      }
      if (this.videoType === 'vimeo') {
        this.initVimeoVideo()
      }
    })
  },

  beforeDestroy() {
    // if (this.videoType === 'facebook') {
    // }
    if (this.videoType === 'youtube' && this.youtubePlayer) {
      this.youtubePlayer.destroy()
    }
    // this.myVideoPayer = null
    this.vimeoPlayer = null
    this.youtubePlayer = null
  },

  methods: {
    initFacebookVideo() {
      if (window.FB.XFBML) {
        window.FB.XFBML.parse()
      }
      if (window.FB && !this.myVideoPayer) {
        window.FB.Event.subscribe('xfbml.ready', (msg) => {
          // console.log('msg', msg)
          if (
            !this.myVideoPayer &&
            msg.type === 'video' &&
            msg.id === `player-${this._uid}`
          ) {
            this.myVideoPayer = msg.instance
            // console.log('myVideoPayer', this.myVideoPayer)
            // this.myVideoPayer.play()
          }
        })
      } else {
        wait(500, () => {
          this.initFacebookVideo()
        })
      }
    },
    initYoutubeVideo() {
      // IF TRACKING ON INSTALL Youtube iFrame Api
      if (!document.getElementById('youtubescript')) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        tag.id = 'youtubescript'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      }
      if (window.YT) {
        this.youtubePlayer = new window.YT.Player(`player-${this._uid}`, {
          videoId: this.videoId,
          playerVars: this.options,
          events: {
            onReady: () => {
              // this.youtubePlayer.playVideo()
            },
          },
        })
      } else {
        wait(200, () => {
          this.initYoutubeVideo()
        })
      }
    },
    initVimeoVideo() {
      //   const iframe = this.$refs.iframe
      //   if (iframe) {
      //     this.vimeoPlayer = new Player(iframe)
      //     this.vimeoPlayer.play()
      //   }
    },
    handleReveal() {
      if (this.videoType === 'facebook' && this.myVideoPayer) {
        this.myVideoPayer.play()
      }
      if (
        this.videoType === 'youtube' &&
        window.YT &&
        this.youtubePlayer &&
        typeof this.youtubePlayer.playVideo === 'function'
      ) {
        this.youtubePlayer.playVideo()
      }
      if (this.videoType === 'vimeo' && this.vimeoPlayer) {
        this.vimeoPlayer.play()
      }
    },
    handleOut() {
      // console.log('handleReveal', this.videoType, this.youtubePlayer)
      if (this.videoType === 'facebook' && window.FB && this.myVideoPayer) {
        this.myVideoPayer.pause()
      }
      if (
        this.videoType === 'youtube' &&
        window.YT &&
        this.youtubePlayer &&
        typeof this.youtubePlayer.pauseVideo === 'function'
      ) {
        this.youtubePlayer.pauseVideo()
      }
      if (this.videoType === 'vimeo' && this.vimeoPlayer) {
        this.vimeoPlayer.pause()
      }
    },
  },
}
</script>

<style lang="scss">
.ui-video2 {
  // @include aspect-ratio(1440, 724);
  @include aspect-ratio(16, 9);
  width: 100%;
  overflow: hidden;
  z-index: 0;
  position: relative;
  --color: var(--color-alt);
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;

  &.is-youtube {
    @include aspect-ratio(16, 9);
  }

  iframe {
    @include fit;

    z-index: 1;
  }

  &__cover {
    @include fit;

    z-index: 2;
    padding: 0;
    text-align: left;
  }

  &__play {
    @include md-down {
      @include size(6rem);
      flex: 0 0 6rem;
    }
    @include size(8.5rem);
    @include flex-center-center;

    flex: 0 0 8.5rem;
    border-radius: 12rem;
    border: 1px solid var(--color-alt);
    color: var(--color-alt);
    z-index: 3;
  }

  &__front {
    @include lg-up {
      @include flex-start-end;

      padding: 6rem;
      padding-right: 12rem;
      gap: 3rem;
    }
    @include md-down {
      @include flex-between-start;
      @include flex-col;
      padding: 2rem;
    }
    @include fit;
    z-index: 3;
  }
}
</style>
