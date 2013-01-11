define("app/main",
	[
		"app/map",
		"app/conf/config"
	], function (Map, Config) {

	"use strict";

	var config = Config;

	function App (options) {
		console.info(this);

	};

	App.prototype = {
		init: function () {

		}
	};

	var app = new App();

	// Init our map
	var map = new Map();

	console.info(map, config);

	return app;
});