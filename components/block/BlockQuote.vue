<template>
  <UiContainer>
    <UiNarrow class="block-quote" left="3" right="3">
      <div class="block-quote__image">
        <UiImage
          v-if="content.author_image"
          rounded
          size="quote"
          :src="content.author_image"
        />
      </div>
      <blockquote class="block-quote__text">
        {{ content.quote }}
        <footer v-if="content.author_name" class="block-quote__infos">
          <cite v-if="content.author_name" class="block-quote__author-name">{{
            content.author_name
          }}</cite>
          <p v-if="content.author_role" class="block-quote__author-role">
            {{ content.author_role }}
          </p>
        </footer>
        <div class="block-quote__meta">
          <UiMetadata
            :title="content.author_name"
            :subtitle="content.author_role"
            :image="content.author_image"
            large-image
          />
        </div>
      </blockquote>
    </UiNarrow>
  </UiContainer>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.block-quote {
  @include lg-up {
    display: grid;
    grid-template-columns: 17.5rem minmax(0, 1fr);
    gap: 5rem;
  }
  @include md-down {
    padding: 0 2rem;
  }

  &__image {
    @include md-down {
      display: none;
    }
  }

  &__text {
    @include rf(23, 23);
    line-height: 1.3;
    color: var(--color-purple);
  }

  &__author-name {
    @include rf(15, 15);
    @include font-medium;
    color: var(--color-font);
  }

  &__author-role {
    @include rf(12, 12);
    color: var(--color-font);
    opacity: 0.5;
  }

  &__infos {
    @include md-down {
      display: none;
    }
    margin-top: 1rem;
  }

  &__meta {
    @include lg-up {
      display: none;
    }
    margin-top: 2rem;
  }
}
</style>
