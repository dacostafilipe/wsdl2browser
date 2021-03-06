var Modeler = require("../Modeler.js");
var className = 'TypeDescribeSnapshotsSetType';

var TypeDescribeSnapshotsSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	
	// Class property definitions here:
	Modeler.extend(className, {
	  item: {
      type: "TypeDescribeSnapshotsSetItemType",
      wsdlDefinition: {
        name: "item",
        type: "tns:DescribeSnapshotsSetItemType",
        minOccurs: "0",
        maxOccurs: "unbounded"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDescribeSnapshotsSetType;
Modeler.register(TypeDescribeSnapshotsSetType, "TypeDescribeSnapshotsSetType");
