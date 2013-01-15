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
		this.init();
	};

	App.prototype = {
		init: function () {}
	};

	// First, let's build instantiate our things.
	var
		app			= new App(),
		location	= new Location(),
		map			= new Map();

	console.info($, map, config);

	map.init();

	return app;
});