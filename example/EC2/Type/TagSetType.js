var Modeler = require("../Modeler.js");
var className = 'TypeTagSetType';

var TypeTagSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeTagSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:TagSetItemType",
        minOccurs: "0",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTagSetType;
Modeler.register(TypeTagSetType, "TypeTagSetType");
