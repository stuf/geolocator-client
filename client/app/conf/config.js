define("app/conf/config", [], function () {
	"use strict";

	return {
		map: {
			// Google Maps -specific configuration
			apiKey: "AIzaSyAp4R-Oow9yB2QRVFPeH3IRSLe_C4e7iro",
			useSensor: true
		},
		location: {
			// Watch position or just peek once?
			watchPosition: true,

			// Make use of real GPS, instead of only rough location estimate?
			enableHighAccuracy: true,

			// Precision down to how many decimals?
			locationPrecision: 6,

			// Minimum distance between waypoints
			minimumDistance: null,

			// Minimum accuracy of position
			minimumAccuracy: 50
		}
	}
});