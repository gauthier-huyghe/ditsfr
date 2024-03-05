<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="error-page">
    <div class="error-page__inner">
      <div class="error-page__background" v-text="statusCode" />
      <div class="error-page__texts">
        <UiTitle class="error-page__title" tag="h1" :title="title" no-margin />
        <UiText
          v-if="hasMessage"
          class="error-page__text"
          :text="error.message"
        />
        <UiText v-if="is404" class="error-page__text" :text="message404" />
        <UiButton
          theme="primary"
          :link="{
            url: '/',
          }"
          target="_self"
        >
          {{ $t('button_back_to_homepage') }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',

  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      title404: 'Something’s wrong',
      message404:
        "We couldn't find your page. You have surely gone too far in our galaxy. You can return to our home page or contact us if you have a problem!",
    }
  },

  computed: {
    hasMessage() {
      return this.error.title && this.error.message
    },
    is404() {
      return !this.error.title && this.error.statusCode === 404
    },
    route() {
      return this.localePath({ name: 'index' })
    },
    statusCode() {
      return this.error.statusCode
    },
    title() {
      return this.is404
        ? this.title404
        : this.error.title
        ? this.error.title
        : this.error.message
    },
  },
}
</script>

<style lang="scss">
.error-page {
  @include flex-center-center;
  @include padding-y(10rem);
  @include padding-x(5rem);
  @include bg-none;

  text-align: center;
  min-height: calc(99vh - 12.1rem);
  overflow: hidden;

  &__inner {
    width: 80%;
    max-width: 80rem;
  }

  &__background {
    @include text-color(rgba($black, 0.04));

    position: absolute;
    top: -10%;
    left: 0%;
    font-size: 50rem;
    letter-spacing: -0.1em;
    line-height: $leading-tight;
    transform: rotate(-10deg);
    z-index: 0;
    pointer-events: none;

    @include md-down {
      top: 5%;
      font-size: 70vw;
    }
    @include lg-up {
      top: -10%;
      font-size: 40vw;
    }
  }

  &__texts {
    @include lg-up {
      margin-left: columns(3);
      max-width: columns(6);
    }
  }

  &__text {
    margin: 4rem 0;
  }

  .ui-button {
    @include padding-x(2rem);
    @include margin-y(4rem, 0);
    @include inline-flex;

    width: auto;
    height: 5rem;
  }
}
</style>
