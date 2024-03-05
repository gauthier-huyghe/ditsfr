<template>
  <div class="ui-video" :class="{ rounded }">
    <button v-if="!show" class="ui-video__cover" @click="handleClick">
      <div class="ui-video__front">
        <div class="ui-video__play">
          <UiIcon size="xs" icon="play-alt" />
        </div>
        <div>
          <slot />
        </div>
      </div>
      <UiGradient v-if="thumb" />
      <UiImage v-if="thumb" :src="thumb" />
    </button>

    <!-- <template v-if="$cookieManager.cookies.tracking"> -->
    <div v-if="show" id="player" class="ui-video__video" />
    <!-- </template> -->
    <template v-else>
      <iframe
        v-if="show"
        type="text/html"
        class="ui-video__video"
        :src="url"
        frameborder="0"
      />
    </template>
  </div>
</template>

<script>
import { getYoutubeIdFromUrl } from '@unanim/helpers'

export default {
  props: {
    video: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    player: null,
    show: false,
  }),

  computed: {
    videoId() {
      return getYoutubeIdFromUrl(this.video)
    },

    url() {
      const optionsParams = new URLSearchParams(this.options).toString()
      return `https://www.youtube-nocookie.com/embed/${this.videoId}?${optionsParams}`
    },

    options() {
      return {
        autoplay: 1,
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
    // IF TRACKING ON INSTALL Youtube iFrame Api
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  },

  methods: {
    async handleClick() {
      this.show = true
      // if (this.$cookieManager.cookies.tracking && window.YT) {
      await this.$nextTick()
      this.player = new window.YT.Player('player', {
        videoId: this.videoId,
        playerVars: this.options,
        events: {
          onReady: () => {
            this.player.playVideo()
          },
        },
      })
      // }
    },
  },
}
</script>

<style lang="scss">
.ui-video {
  @include md-down {
    // width: 100%;
    height: 50rem;
  }
  @include lg-up {
    @include aspect-ratio(1440, 724);
  }

  overflow: hidden;
  z-index: 0;
  position: relative;
  --color: var(--color-font-alt);

  &.rounded {
    border-radius: 1.6rem;
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
    border: 1.5px solid var(--color-font-alt);
    color: var(--color-font-alt);
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
