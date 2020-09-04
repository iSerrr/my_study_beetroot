<template>
	<div>
		<div class="google-map" ref="googleMap">123</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			google: null,
			map: null,
		};
	},
	props: {
		mapConfig: Object,
		apiKey: String,
    },
    async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })

    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
};
</script>

<style>
</style>