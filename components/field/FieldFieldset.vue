<template>
  <fieldset class="field-fieldset">
    <Field lg="6" md="2">
      <div class="field-fieldset__controls">
        <UiTitle v-if="name" size="xxs" :title="title" />
        <UiButton
          v-if="remove"
          size="xs"
          theme="fill-red"
          icon="minus-outline"
          @click="$emit('remove')"
          >{{ remove }}</UiButton
        >
      </div>
    </Field>
    <slot />
  </fieldset>
</template>

<script>
const suffixes = {
  one: 'er',
  other: 'ème',
}
const pr = new Intl.PluralRules('fr-FR', {
  type: 'ordinal',
})

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    remove: {
      type: String,
      default: 'Supprimer',
    },
  },

  computed: {
    title() {
      return `${this.index}<sup>${suffixes[pr.select(this.index)]}</sup> ${
        this.name
      }`
    },
  },
}
</script>

<style lang="scss">
.field-fieldset {
  margin: 0;
  padding: 0;
  background-color: var(--fg);
  border-radius: 1.6rem;
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;

  @include lg-up {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @include md {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @include sm {
    gap: 2rem;
  }
  display: grid;
  gap: 1.5rem 2rem;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;

  &:last-of-type {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 0;
  }

  &__controls {
    @include flex-between-center;
  }
}
</style>
