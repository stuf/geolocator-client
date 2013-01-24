define("app/location",
	[ "jquery", "app/conf/config", "app/models/currentLocation" ],
	function ($, Config, CurrentLocation) {

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
			CurrentLocation.set(position);
		},

		errorHandler: function () {
			console.error("Geolocation error!; ", this);
		},

		init: function () {
			APP.location =
				navigator.geolocation.watchPosition(this.successHandler, this.errorHandler, this.config.locatorOptions)
		}
	};

	return Location;
});