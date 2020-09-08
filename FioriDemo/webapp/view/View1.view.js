sap.ui.jsview("mynamespace.FioriDemo.view.View1", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View1
	 */
	getControllerName: function () {
		return "mynamespace.FioriDemo.controller.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View1
	 */
	createContent: function (oController) {
		var oPage = new sap.m.Page({
			title: "{i18n>title}",
			id: "page",
			content: [
				this.buildLayout(oController)
			]
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	},

	buildLayout: function (oController) {
		return new sap.ui.commons.layout.VerticalLayout(oController.PAGEID + "_Layout", {
			width: "100%",
			content: [
				new sap.m.Table(oController.PAGEID + "_Table", {
					width: "100%"
				})
			]
		});
	}

});