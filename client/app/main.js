define("app/main",
	[
		"jquery",
		"app/location",
		"app/map",
		"app/conf/config"
	], function ($, Location, Map, Config) {

	"use strict";

	var config = Config;

	function App (options) {
		console.info(this);

	};

	App.prototype = {
		init: function () {

		}
	};

	// Our global object for our stuff
	window.geolocator = {};

	var
		app			= new App(),
		location	= new Location(),
		map			= new Map();

	console.info($, map, config);

	return app;
});