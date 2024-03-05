<template>
  <div class="ui_slogan" v-html="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ui_slogan {
  @include font-medium;
  position: absolute;
  width: 13em;
  text-align: right;
  line-height: 1em;
  text-transform: uppercase;
  text-align: center;
  background: $primary;
  color: $white;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  padding: 1rem;
  transform: rotate(-4deg);
  box-shadow: 0.5rem 0.5rem 1rem rgba($black, 0.15);

  strong {
    @include font-bold;
    font-size: 2.5em;
    line-height: 0.9em;
  }
  em {
    @include font-bold;
    font-size: 0.8em;
    font-style: normal;
    line-height: 0.9em;
    white-space: nowrap;
  }
}
</style>
