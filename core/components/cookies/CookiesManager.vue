<template>
  <client-only>
    <div class="cookiemanager">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn delay-animation-1000"
        leave-active-class="animated fadeOut"
      >
        <CookiesCookiebar v-show="!$cookieManager.choiceWasMade" />
      </transition>
      <CookiesModal :show="$cookieManager.showManager">
        <CookiesPage>
          <CookiesSettings />
          <CookiesPolicy />
        </CookiesPage>
      </CookiesModal>
    </div>
  </client-only>
</template>
