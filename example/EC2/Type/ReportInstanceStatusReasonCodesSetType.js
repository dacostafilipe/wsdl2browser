var Modeler = require("../Modeler.js");
var className = 'TypeReportInstanceStatusReasonCodesSetType';

var TypeReportInstanceStatusReasonCodesSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeReportInstanceStatusReasonCodeSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:ReportInstanceStatusReasonCodeSetItemType",
        minOccurs: "1",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: true
    }
	}, parentObj, json);
};

module.exports = TypeReportInstanceStatusReasonCodesSetType;
Modeler.register(TypeReportInstanceStatusReasonCodesSetType, "TypeReportInstanceStatusReasonCodesSetType");
