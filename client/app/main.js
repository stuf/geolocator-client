define("app/main",
	[
		"jquery",
		"app/location",
		"app/map",
		"app/conf/config"
	], function ($, Location, Map, Config) {

	"use strict";

	function App (options) {
		this.init();
	};

	App.prototype = {
		init: function () {
			var
				location	= new Location(),
				map			= new Map();

			location.init();

			map.init();

		}
	};

	// First, let's build instantiate our things.
	var app = new App();

	app.init();

	return app;
});