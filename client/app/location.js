define("app/location", [], function () {
	"use strict";

	if(!"location" in window.geolocator) {
		window.geolocator.location = {};

		var _location = window.geolocator.location;
	}

	var Location = function () {

	};

	Location.prototype = {

	};

	return Location;
});