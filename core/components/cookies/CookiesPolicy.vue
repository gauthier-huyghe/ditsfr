<template>
  <div class="cookiespolicy">
    <UiTitle tag="div" :title="$t('cookies_policy_title')" />

    <div class="cookiespolicy__text" v-html="cookiesPolicy" />
    <div v-if="cookiesList" class="cookiespolicy__list">
      <div
        v-for="({ id }, i) in $cookieManager.groups"
        :key="`cookiepolicy-${i}`"
        class="cookiespolicy__item"
      >
        <div v-text="$t(`cookies_${id}_title`)" />
        <p v-html="$t(`cookies_${id}_description`)" />

        <div class="table">
          <table
            v-if="cookiesList.filter((item) => item.type === id).length > 0"
            border="1"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th v-text="$t('cookies_list_title_name')" />
                <th v-text="$t('cookies_list_title_date')" />
                <th v-text="$t('cookies_list_title_purpose')" />
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, j) in cookiesList.filter(
                  (item) => item.type === id
                )"
                :key="`cookiepolicy-${i}-${j}`"
              >
                <td>
                  <a
                    v-if="item.url"
                    :href="item.url"
                    target="_blank"
                    v-text="item.name"
                  />
                  <span v-else v-text="item.name" />
                </td>
                <td v-text="item.expiration" />
                <td v-html="item.description" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('common', ['cookiesList', 'cookiesPolicy']),
  },
}
</script>

<style lang="scss">
.cookiespolicy {
  @include md-down {
    padding: 3rem 2rem;
  }
  @include lg-up {
    @include padding-y(8rem, 0);

    padding-right: columns(1, 7);
  }

  &__text h2,
  &__text h3,
  h4,
  h5 {
    @include flex-initial;
    @include rf(16, 18);
    @include margin-y(3rem, 1.5rem);

    text-transform: uppercase;
  }

  &__text h3 {
    @include rf(17, 18);
  }

  &__text h4 {
    @include rf(15, 17);
  }

  p,
  ul,
  ol {
    @include font-normal;

    color: inherit;
    font-size: 1em;
  }

  p {
    @include md-down {
      line-height: $leading-tiny;
    }
    @include lg-up {
      line-height: $leading-tight;
    }

    margin-top: 0;
    margin-bottom: 1.6em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  p:not(:last-child) {
    @include margin-y(0, 1.5rem);
  }

  strong {
    color: inherit;
  }

  ul {
    // list-style-type: disc;
    padding: 0;

    li {
      position: relative;
      padding: 0 0 0 1.5em;

      &::before {
        @include size(0.7rem);
        @include rounded-full;
        @include bg-secondary;

        position: absolute;
        left: 0;
        top: 0.35em;
        content: '';
        display: block;
      }
    }
  }

  ol {
    list-style-type: numeric;
    padding: 0 0 0 2em;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
    line-height: 1.2;

    li {
      &:not(:last-child) {
        margin: 0 0 0.8em 0;
      }
    }

    &:last-child {
      margin: 0;
    }
  }

  a {
    @include transition(color);
    @include text-secondary;
    @include font-medium;

    text-decoration: underline;
    color: var(--color-secondary);

    @include hover {
      color: inherit;
    }
  }

  &__text {
    @include flex-initial;
    // @include font-acumin-condensed;
    @include rf(16, 18);

    @include sm {
      @include margin-y(0);
    }
    @include md-up {
      @include margin-y(3rem, 0);
    }
  }

  &__list {
    @include margin-y(8rem, 0);

    .table {
      @include md-down {
        overflow-x: auto;
        width: 100%;
      }
    }

    table {
      tr {
        td,
        th {
          width: 33%;
          padding: 0.5rem 1.5rem;
          border: 1px solid $border;
        }

        th {
          @include font-medium;
        }
      }
    }
  }

  &__item {
    @include margin-y(0, 8rem);
  }
}
</style>
