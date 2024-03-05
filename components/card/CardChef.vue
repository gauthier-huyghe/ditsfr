<template>
  <div class="card-chef">
    <div class="card-chef__image">
      <UiImage
        :src="`/img/chefs/thumbs/${datas.img}`"
        :alt="datas.name"
        :data-scroll="true"
        :data-scroll-speed="-2"
      />
      <span
        v-if="datas.date"
        class="card-chef__date"
        :class="{ 'is-soon': datas.date === 'soon' }"
        v-html="datas.date === 'soon' ? $t('chefs_date_soon') : datas.date"
      />
      <span
        v-if="datas.copyright"
        class="card-chef__copyright"
        v-html="`© ${datas.copyright}`"
      />
    </div>
    <div class="card-chef__text">
      <div
        class="card-chef__name"
        :class="{ 'is-soon': datas.name === 'soon' }"
        v-html="datas.name === 'soon' ? $t('chefs_chef_soon') : datas.name"
      />
      <a
        v-if="datas.resto"
        :href="datas.link || null"
        target="_blank"
        class="card-chef__resto"
        v-html="`${$t('resto_label')} - ${datas.resto}`"
      />
      <div
        v-if="
          datas.nbrStar ||
          datas.nbrStarGreen ||
          datas.masterCook ||
          datas.imageTop
        "
        class="card-chef__footer"
      >
        <div class="card-chef__michelin">
          <img
            v-for="i in datas.nbrStar"
            :key="`michelin-${i}`"
            src="/img/Etoile_Michelin.png"
            alt=""
          />
          <img
            v-for="i in datas.nbrStarGreen"
            :key="`michelin-verte-${i}`"
            src="/img/Etoile_Michelin_Verte.png"
            alt=""
          />
        </div>
        <div
          v-if="datas.masterCook"
          title="Mastercooks Of Belgium"
          class="card-chef__mastercook"
        >
          <img src="/img/MastercooksOfBelgium2.png" alt="" />
        </div>
        <div v-if="datas.imageTop" class="card-chef__imageBottom">
          <img :src="datas.imageTop" :alt="datas.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      required: true,
    },
  },

  computed: {
    name() {
      return this.datas.name
        ? this.datas.name.replace(/\b(\w+)\W*$/, '<strong>$1</strong>')
        : ''
    },
  },
}
</script>

<style lang="scss">
.card-chef {
  $e: &;
  position: relative;
  width: 100%;

  @include md-down {
  }
  @include lg-up {
    max-width: 30rem;
  }

  &__image {
    @include aspect-ratio(34, 46);
    width: 100%;
    margin-bottom: 2rem;

    .ui-image {
      border-top-left-radius: 8rem;
      border-bottom-right-radius: 8rem;
    }

    #{$e}__date {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: auto;
      padding: 0.3rem 0.8rem;
      color: var(--color-font);
      background: var(--fg);
      text-align: center;
      border-bottom-left-radius: 1rem;

      &.is-soon {
        @include rf(9, 9);
      }
    }
    #{$e}__copyright {
      @include rf(10, 10);
      position: absolute;
      top: auto;
      right: auto;
      left: 1rem;
      bottom: 1rem;
      width: auto;
      color: var(--color-font);
      text-align: center;
    }
  }

  &__date {
  }

  &__text {
    @include flex-initial;
  }
  &__name {
    @include flex-auto;
    @include rf(22, 27);
    @include font-light;
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: -0.05em;
    margin-bottom: 0.3rem;

    &.is-soon {
      @include rf(17, 20);
    }

    em {
      @include font-light;
      @include rf(12, 12);
    }
    strong {
      @include font-medium;
    }
  }
  &__resto {
    @include rf(16, 16);
    @include font-light;
    display: block;
    margin-bottom: 0.4rem;
  }
  &__footer {
    @include flex-between-start;
  }
  &__michelin {
    @include flex-initial;
    @include flex-start-center;
    gap: 2px;

    img {
      @include size(1.3rem);
    }
  }
  &__mastercook {
    img {
      height: 3.3rem;
      margin-top: -1.5rem;
    }
  }

  &__imageBottom {
    img {
      height: 4.5rem;
      margin-top: -2.2rem;
    }
  }
}
</style>
