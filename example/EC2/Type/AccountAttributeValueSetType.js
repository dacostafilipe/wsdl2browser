var Modeler = require("../Modeler.js");
var className = 'TypeAccountAttributeValueSetType';

var TypeAccountAttributeValueSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeAccountAttributeValueSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:AccountAttributeValueSetItemType",
        minOccurs: "0",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountAttributeValueSetType;
Modeler.register(TypeAccountAttributeValueSetType, "TypeAccountAttributeValueSetType");
