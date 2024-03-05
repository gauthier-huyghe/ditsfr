<template>
  <div class="ui-map">
    MAP
    <!-- <GmapMap
      ref="mapRef"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @zoom_changed="onZoomChange"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="true"
      />
      <GmapMarker :position="marker.coordinates" :icon="markerIcon()" />
    </GmapMap> -->
  </div>
</template>

<script>
// import { getGoogleMapsAPI } from 'gmap-vue'
// import mapStyle from '~/assets/json/mapStyle.json'

// export default {
//   props: {
//     marker: {
//       type: Object,
//       default: () => ({}),
//     },
//   },

//   data() {
//     return {
//       zoom: 16,
//       center: { lat: 50.7, lng: 5.852593 },
//       markerScale: 1,
//       infoWindowPos: null,
//       infoOptions: { content: '' },
//     }
//   },

//   computed: {
//     google: getGoogleMapsAPI,
//     mapOptions() {
//       return {
//         zoomControl: false,
//         gestureHandling: 'cooperative',
//         mapTypeControl: false,
//         scaleControl: false,
//         streetViewControl: false,
//         rotateControl: false,
//         fullscreenControl: false,
//         disableDefaultUI: false,
//         styles: mapStyle,
//         maxZoom: 20,
//         minZoom: 8,
//       }
//     },
//     googleMapLatLong() {
//       return (lat, long) => {
//         return this.google ? new this.google.maps.LatLng(lat, long) : {}
//       }
//     },
//     markerIcon() {
//       return () => {
//         return this.google
//           ? {
//               url: require(`~/assets/images/pin.svg`),
//               size: new this.google.maps.Size(54, 54),
//               origin: new this.google.maps.Point(0, 0),
//               anchor: new this.google.maps.Point(27, 27),
//             }
//           : {}
//       }
//     },
//   },

//   created() {
//     this.center = this.marker.coordinates
//     this.infoWindowPos = this.marker.coordinates
//     this.infoOptions.content = /* html */ `
//       <div class="mappop">
//         <img class="mappop__image" src="${this.marker.image}" />
//         <div>
//           <p class="mappop__title">${this.marker.title}</p>
//           <p class="mappop__subtitle">${this.marker.subtitle}</p>
//         </div>
//       </div>
//     `
//   },
// }
</script>

<style lang="scss">
.ui-map {
  .vue-map-container {
    @include fit;
    z-index: 0;
    overflow: hidden;
    transform: translateZ(0);

    div[role='button'] {
      &:focus {
        outline: none;
      }
    }
  }

  // THE POPUP POSITIONNER
  .gm-style-iw-a {
    transform: translateY(-1.5rem);
  }
  // THE POPUP BODY
  .gm-style-iw-c {
    padding: 7px !important;
    border-radius: 15px;
    box-shadow: 0 13px 34px -4px rgba(#003c64, 0.11);
    max-width: calc(100vw - 6rem) !important;
  }
  // TRIANGLE
  .gm-style-iw-t::after {
    box-shadow: 0 13px 34px -4px rgba(#003c64, 0.11);
  }
  // CLOSE
  .gm-ui-hover-effect {
    display: none !important;
  }

  .mappop {
    display: flex;
    gap: 1.7rem;
    align-items: center;
    padding-right: 1.7rem;

    &__image {
      @include size(5.8rem);
      border-radius: 1.1rem;
      object-fit: contain;
    }
    &__title {
      @include font-semibold;
      @include font-text;
      font-size: 15px;

      color: var(--color-purple);
    }
    &__subtitle {
      @include font-text;
      font-size: 13px;

      opacity: 0.5;
    }
  }
}
</style>
