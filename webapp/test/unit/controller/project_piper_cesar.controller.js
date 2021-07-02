/*global QUnit*/

sap.ui.define([
	"project_piper_cesar_2021/controller/project_piper_cesar.controller"
], function (Controller) {
	"use strict";

	QUnit.module("project_piper_cesar Controller");

	QUnit.test("I should test the project_piper_cesar controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
