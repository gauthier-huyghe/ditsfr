<template>
  <button class="cookies-mobile-trigger" @click="$emit('trigger')">
    <slot />
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="32"
      viewBox="0 0 42 32"
    >
      <path
        fill="currentColor"
        d="M39.571 14.221c1.114 0 2.018 0.903 2.018 2.018 0 1.013-0.747 1.852-1.72 1.996l-0.298 0.022h-34.771c-1.114 0-2.018-0.903-2.018-2.018 0-1.013 0.747-1.852 1.72-1.996l0.298-0.022h34.771zM25.105 1.773c0.709-0.709 1.815-0.78 2.604-0.213l0.25 0.213 13.039 13.039c0.709 0.709 0.78 1.815 0.213 2.604l-0.213 0.25-13.039 13.039c-0.788 0.788-2.066 0.788-2.854 0-0.709-0.709-0.78-1.815-0.213-2.604l0.213-0.25 11.609-11.614-11.609-11.61c-0.709-0.709-0.78-1.815-0.213-2.604l0.213-0.25z"
      ></path>
    </svg>
  </button>
</template>

<style lang="scss">
.cookies-mobile-trigger {
  @include lg-up {
    display: none;
  }
  @include md-down {
    @include flex-center-center;
    @include font-medium;
    @include rf(17, 19);

    background-color: var(--bg);
    border-top: 1.5px solid var(--border);
    text-transform: uppercase;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 9rem;
    padding: 1rem 0 2rem 0;
    z-index: 2;

    span {
      min-width: 8em;
    }

    svg {
      @include size(2rem);

      margin-left: 3rem;
      transition: transform 0.3s ease-in-out;

      .cookie-setting-open & {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
