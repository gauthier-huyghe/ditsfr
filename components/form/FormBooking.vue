<template>
  <ValidationObserver v-slot="{ handleSubmit }" class="form-booking" slim>
    <UiForm @submit="handleSubmit(() => onSubmit($event))">
      <FieldRadioButtons
        v-model="fields.youare"
        :options="[
          {
            text: $t('booking_company'),
            value: 'company',
          },
          {
            text: $t('booking_private'),
            value: 'private',
          },
        ]"
        name="youare"
        rules="required"
        :lg="12"
        :md="2"
      />
      <UiSlideUpDown class="ui-slide-up-down" :active="isCompany">
        <FieldText>
          <strong v-text="$t('field_companyname_tooltip')" />
        </FieldText>
        <FieldInput
          v-model="fields.companyname"
          name="companyname"
          :label="$t('field_companyname')"
          :rules="{ required: isCompany }"
          :required="isCompany"
          :lg="12"
          :md="1"
        />
      </UiSlideUpDown>
      <FieldInput
        v-model="fields.firstname"
        name="firstname"
        :label="$t('field_firstname')"
        rules="required"
        required
        :lg="6"
        :md="1"
      />
      <FieldInput
        v-model="fields.lastname"
        name="lastname"
        :label="$t('field_lastname')"
        rules="required"
        required
        :lg="6"
        :md="1"
      />
      <FieldInput
        v-model="fields.email"
        name="email"
        :label="$t('field_email')"
        rules="required|email"
        required
        :lg="6"
        :md="1"
      />
      <FieldInput
        v-model="fields.phone"
        name="phone"
        type="tel"
        :label="$t('field_phone')"
        rules="required|phone"
        required
        :lg="6"
        :md="1"
      />
      <UiSlideUpDown class="ui-slide-up-down" :active="isCompany">
        <FieldInput
          v-model="fields.nbrseat"
          name="nbrseat"
          :label="$t('field_nbrseat')"
          :rules="{ required: isCompany }"
          :required="isCompany"
          :lg="12"
          :md="2"
        />
      </UiSlideUpDown>
      <FieldCheckbox
        v-model="optin"
        form-slug="contact"
        name="optin"
        :label="$t('field_terms_and_conditions')"
        :rules="{ required: { allowFalse: false } }"
      >
        <span v-html="$t('field_terms_and_conditions')" />
      </FieldCheckbox>
      <FieldSubmit :is-loading="pending" theme="underline">
        {{ $t('booking_submit') }}
        <UiIcon icon="arrow-square" size="xs" />
      </FieldSubmit>
    </UiForm>
  </ValidationObserver>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    pending: false,
    fields: {
      city: 'brussels',
      youare: '',
      companyname: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      nbrseat: '',
    },
    optin: false,
  }),

  computed: {
    ...mapState('common', ['isCompanyFromButton']),
    ...mapGetters('common', ['endpoints']),
    isCompany() {
      return this.fields.youare === 'company'
    },
  },

  watch: {
    isCompanyFromButton(val) {
      if (val) {
        this.fields.youare = 'company'
        this.setIsCompanyFromButton(false)
      }
    },
  },

  methods: {
    ...mapMutations('common', ['setIsCompanyFromButton']),
    async onSubmit() {
      this.pending = true
      const body = { language: this.$i18n.locale, ...this.fields }
      const res = await this.$api.post('/api/booking.php', body)
      if (res && res.type === 'success') {
        this.$emit('input', 'sent')
      } else {
        this.$notify({
          type: 'error',
          title: 'Something went wrong...sorry.',
          text: res && res.message ? res.message : '',
        })
      }
      this.pending = false
    },
  },
}
</script>

<style lang="scss">
.form-booking {
  margin-top: 3rem;

  .ui-slide-up-down {
    @include md-down {
      grid-column: span 2;
    }
    @include lg-up {
      grid-column: span 12;
    }
  }

  input,
  textarea,
  select {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      color: $font-alt !important;
      border: 1px solid $primary;
      -webkit-text-fill-color: $font-alt;
      -webkit-box-shadow: 0 0 0px 1000px $primary inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  .ui-button.underline {
    color: $font-alt;
  }
}
</style>
