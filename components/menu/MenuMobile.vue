<template>
  <transition
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutLeft"
  >
    <nav v-if="showMenuMobile" class="menu-mobile">
      <!-- SCROLLABLE PART -->
      <div class="menu-mobile__scroller">
        <!-- SECONDARY PAGES -->
        <ul>
          <!-- <li v-for="link in main_menu" :key="link">
            <UiLink theme="mobile-main" :link="link" @click.native="close">
              {{ link.text }}
            </UiLink>
          </li> -->
          <li v-for="link in secondary_menu" :key="`menu-mobile-${link.text}`">
            <UiLink theme="mobile-main" :link="link" @click.native="close">
              {{ link.text }}
            </UiLink>
          </li>
        </ul>
      </div>

      <!-- CONTACT BUTTON - FIXED BOTTOM -->
      <div class="menu-mobile__footer">
        <UiLanguage />
        <!-- <UiButton
          theme=""
          size="sm"
          class="lg-only"
          :link="{
            url: 'https://google.com',
          }"
        >
          Header CTA
        </UiButton> -->
      </div>
    </nav>
  </transition>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('common', ['main_menu', 'secondary_menu', 'socials']),
    ...mapState('application', ['showMenuMobile']),
  },

  watch: {
    '$i18n.locale'() {
      this.close()
    },
  },

  methods: {
    close() {
      this.$store.commit('application/setShowMenu', false)
    },
  },
}
</script>

<style lang="scss">
.menu-mobile {
  --footer-height: 12rem;

  position: fixed;
  z-index: 100;
  inset: 0;
  background-color: var(--bg);
  top: var(--header-height);

  &__scroller {
    @include md-down {
      padding-bottom: 2rem;
    }
    height: calc(100% - var(--footer-height));
    overflow: auto;
    padding-bottom: 5rem;
  }

  ul {
    padding: 2rem var(--gutter);

    li {
      display: block;
    }
  }

  &__footer {
    @include flex-center-center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--background);
    padding: var(--gutter);
    gap: 1.5rem;
    height: var(--footer-height);
  }
}
</style>
