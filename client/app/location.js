define("app/location",
	["app/conf/config"],
	function (Config) {

	"use strict";

	if(!"location" in window.geolocator) {
		window.geolocator.location = {};

		var _location = window.geolocator.location;
	}

	var Location = function () {

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