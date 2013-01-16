"use strict";

console.info("config");

requirejs.config({
	name: "app/main",

	baseUrl: ".",

	paths: {
		jquery: "vendor/jquery-1.8.3.min",
		backbone: "vendor/backbone-min"
	}
});