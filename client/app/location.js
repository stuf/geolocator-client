define("app/location",
	[
		"jquery",
		"app/conf/config",
		"app/models/locationModel"
	],
	function ($, Config, LocationModel) {

	"use strict";

	if(!"location" in window.geolocator) {
		window.geolocator.location = {};
		var _location = window.geolocator.location;
	}

	var Location = function (options) {
		this.config = $.extend({}, options);

		this.init();
	};

	Location.prototype = {
		successHandler: function (position) {

		},
		failureHandler: function () {},
		init: function () {
			_location =
				navigator.geolocation.watchPosition(this.successHandler, this.failureHandler())
		}
	};

	return Location;
});