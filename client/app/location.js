define("app/location",
	[ "jquery", "app/conf/config", "app/models/currentLocationModel" ],
	function ($, Config, CurrentLocationModel) {

	"use strict";

	var Location = function (options) {
		this.config = $.extend({
			locatorOptions: {
				enableHighAccuracy: true
			}
		}, options);

		this.init();
	};

	Location.prototype = {
		successHandler: function (position) {
			if ( typeof (window[APPNAME].currentLocation) === "undefined" ) {
				window[APPNAME].currentLocation = new CurrentLocationModel(position);
			}
			else {
				window[APPNAME].currentLocation.set(position);
			}

			window[APPNAME].currentLocation.on("change", function () {
				console.info(">>> CHANGED", this);
			}, window[APPNAME].currentLocation);
		},
		errorHandler: function (error) {
			console.error("Geolocation error!; ", error);
		},
		init: function () {
			window._location =
				navigator.geolocation.watchPosition(this.successHandler, this.errorHandler(), this.config.locatorOptions)
		}
	};

	return Location;
});