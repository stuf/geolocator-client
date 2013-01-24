/* map.js
 *
 * TODO:
 * - How are we going to determine the first location of the map?
 * - From where are we going to determine the location?
 * - How are we going to keep monitoring it?
 */

define("app/map", [ "app/models/currentLocation" ], function (CurrentLocation) {
	"use strict";

	var Map = function (options) {
		this.config = {
			mapHolder: "map",
			mapOptions: {
				zoom: 8,
				center: new google.maps.LatLng(12, 12),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		};

		this.map = null;

		this.init();
	};

	Map.prototype = {
		init: function () {
			console.info("Map:init");

			this.map =
				new google.maps.Map(document.getElementById(this.config.mapHolder), this.config.mapOptions);

		},

		updateMap: function (position) {
			this.map.setCenter(new google.maps.LatLng(position.latitude, position.longitude));
		}
	};

	return Map;
});