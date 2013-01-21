define("app/conf/config", [], function () {
	"use strict";

	return {
		map: {
			// Google Maps -specific configuration
			apiKey: "AIzaSyAp4R-Oow9yB2QRVFPeH3IRSLe_C4e7iro",
			useSensor: true
		},
		location: {
			watchPosition: true,
			enableHighAccuracy: true,
			locationPrecision: 6,
			minimumDistance: null,
			minimumAccuracy: 50
		}
	}
});