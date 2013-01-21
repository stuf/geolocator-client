define("app/location",
	[ "jquery", "app/conf/config", "app/models/currentLocationModel" ],
	function ($, Config, CurrentLocationModel) {

	"use strict";

	if ( typeof ( APP.currentLocation ) === "undefined" ) {
		APP.currentLocation = new CurrentLocationModel({});
	}

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
			APP.currentLocation.set(position);
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