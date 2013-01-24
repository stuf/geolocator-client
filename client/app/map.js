/* map.js
 *
 * TODO:
 * - How are we going to determine the first location of the map?
 * - From where are we going to determine the location?
 * - How are we going to keep monitoring it?
 */

define("app/map", [ "app/models/currentLocation" ], function (CurrentLocation) {
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
				zoom: 8,
				center: new google.maps.LatLng(12, 12),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		};

		console.info(this.config.mapOptions);

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