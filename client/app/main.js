define("app/main",
	[
		"jquery",
		"app/conf/config",
		"app/location",
		"app/events"
	],
	function ($, Config, Location, Events) {

	"use strict";

	function App () {
		var location = new Location();

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