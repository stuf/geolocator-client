define("app/main",
	[
		"jquery",
		"app/conf/config",
		"app/location",
		"app/map",
		"app/globalEvents"
	],
	function ($, Config, Location, Map, GlobalEvents) {

	"use strict";

	function App () {
		this.location = new Location();
		this.map = new Map();

		this.init();
	};

	App.prototype = {
		init: function () {
		}
	};

	// First, let's build instantiate our things.
	var app = new App();

	app.init();

	return app;
});