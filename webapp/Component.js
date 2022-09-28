sap.ui.define(
	[
		"sap/ui/core/UIComponent"
	],
	function(UIComponent){
		"use strict";
		return UIComponent.extend("opensap.myapp.Component", {
			metadata : {
				manifest:"json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				
				// la riga sotto và scommentata solo se si vuole fare debug delle chiamate OData
				// altrimenti fa una chiamata batch e non si vede cosa chiede ma un $batch
				// disabilitando il batch le prestazioni crollano ma si vede cosa fa nella scheda Network selezionando ProductSet...:
				// https://webidetesting9681828-a0fe0645a.dispatcher.hana.ondemand.com/destinations/ES5/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet?$skip=0&$top=5&$orderby=Category asc&$expand=ToSupplier
				// nella scheda Response si vede come ha risposto il servizio OData
				this.getModel().setUseBatch(false);
			}
		});
	}
);