<template>
  <div :class="mainClasses" @click.prevent.stop="handleClick">
    <span class="ui-burger__bar ui-burger__bar--top"></span>
    <span class="ui-burger__bar ui-burger__bar--center"></span>
    <span class="ui-burger__bar ui-burger__bar--bottom"></span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('application', ['showMenuMobile']),

    mainClasses() {
      return ['ui-burger', { 'is-active': this.showMenuMobile }]
    },
  },

  methods: {
    handleClick() {
      this.$store.commit('application/toggleShowMenu')
    },
  },
}
</script>

<style lang="scss">
.ui-burger {
  @include lg-up {
    display: none;
  }
  position: relative;
  width: 50px;
  height: 50px;
  display: block;
  cursor: pointer;
  margin-top: -1px;

  // Bar

  &__bar {
    position: absolute;
    display: block;
    width: 60%;
    height: 2px;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transition: margin 300ms $ease-in-out-sine, opacity 300ms ease-in-out,
      transform 300ms $ease-in-out-sine, background 300ms $ease-in-out-sine;

    &--top,
    &--center,
    &--bottom {
      background-color: var(--color-font);
      transform: translateX(-50%);
    }

    &--top {
      margin-top: -6px;
    }

    &--bottom {
      margin-top: 6px;
    }
  }

  @include hover {
    .ui-burger__bar {
      &--top {
        transform: translateX(-60%);
      }

      &--center {
        transform: translateX(-40%);
      }

      &--bottom {
        transform: translateX(-60%);
      }
    }
  }

  // Active

  &.is-active {
    .ui-burger__bar--top {
      transform: translateX(-50%) rotate(45deg);
      margin-top: -1px;
    }

    .ui-burger__bar--center {
      transform: translateX(100%) translateY(-50%);
      opacity: 0;
    }

    .ui-burger__bar--bottom {
      margin-top: -1px;
      transform: translateX(-50%) rotate(-45deg);
    }
  }
}
</style>
