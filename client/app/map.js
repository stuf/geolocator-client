define("app/map", [], function () {
	"use strict";

	if (!("map" in window.geolocator)) {
		window.geolocator.map = {};

		var _geolocator = window.geolocator;
	}

	var Map = function (options) {
		this.config = {
			map: null,
			mapHolder: "map",
			mapOptions: {
				zoom: 8
			}
		};

		this.init();
	};

	Map.prototype = {
		init: function () {
			this.config.map =
				new google.maps.Map(document.getElementById(this.config.mapHolder), this.config.mapOptions);


		},

		setLocation: function () {},

		update: function () {}
	};

	return Map;
});