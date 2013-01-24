define("app/main",
	[
		"jquery",
		"app/conf/config",
		"app/location",
		"app/map",
		"app/models/currentLocation",
		"app/globalEvents"
	],
	function ($, Config, Location, Map, CurrentLocation, GlobalEvents) {

	"use strict";

	function App () {
		this.location = new Location();
		this.map = new Map();

		this.init();
		this.handleMap();
	};

	App.prototype = {
		init: function () {
		},

		handleMap: function () {
			// Attach our events for location etc.
			// We can't attach these before the map has been instantiated.
			CurrentLocation.on("change", function (position) {
				this.map.updateMap(position.get("coords"));
			}, this);
		}
	};

	return App;
});