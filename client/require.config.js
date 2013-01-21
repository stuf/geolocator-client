"use strict";

console.info("config");

requirejs.config({
	name: "app/main",

	baseUrl: ".",

	shim: {
		backbone: {
			deps: [ "underscore", "jquery" ],
			exports: "Backbone"
		}
	},

	paths: {
		jquery: "vendor/jquery-1.8.3.min",
		backbone: "vendor/backbone-min",
		underscore: "vendor/underscore-min"
	}
});