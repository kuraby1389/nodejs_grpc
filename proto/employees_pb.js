/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.employees.Employee', null, global);
goog.exportSymbol('proto.employees.EmployeeId', null, global);
goog.exportSymbol('proto.employees.EmployeeList', null, global);
goog.exportSymbol('proto.employees.EmployeeUpdate', null, global);
goog.exportSymbol('proto.employees.Empty', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employees.Employee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employees.Employee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.employees.Employee.displayName = 'proto.employees.Employee';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employees.Employee.prototype.toObject = function(opt_includeInstance) {
  return proto.employees.Employee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employees.Employee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.Employee.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employees.Employee}
 */
proto.employees.Employee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employees.Employee;
  return proto.employees.Employee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employees.Employee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employees.Employee}
 */
proto.employees.Employee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmployeeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employees.Employee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employees.Employee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employees.Employee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.Employee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 employee_id = 1;
 * @return {number}
 */
proto.employees.Employee.prototype.getEmployeeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.employees.Employee.prototype.setEmployeeId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.employees.Employee.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.employees.Employee.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.employees.Employee.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.employees.Employee.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employees.EmployeeList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.employees.EmployeeList.repeatedFields_, null);
};
goog.inherits(proto.employees.EmployeeList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.employees.EmployeeList.displayName = 'proto.employees.EmployeeList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.employees.EmployeeList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employees.EmployeeList.prototype.toObject = function(opt_includeInstance) {
  return proto.employees.EmployeeList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employees.EmployeeList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeList.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeesList: jspb.Message.toObjectList(msg.getEmployeesList(),
    proto.employees.Employee.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employees.EmployeeList}
 */
proto.employees.EmployeeList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employees.EmployeeList;
  return proto.employees.EmployeeList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employees.EmployeeList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employees.EmployeeList}
 */
proto.employees.EmployeeList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.employees.Employee;
      reader.readMessage(value,proto.employees.Employee.deserializeBinaryFromReader);
      msg.addEmployees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employees.EmployeeList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employees.EmployeeList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employees.EmployeeList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.employees.Employee.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Employee employees = 1;
 * @return {!Array<!proto.employees.Employee>}
 */
proto.employees.EmployeeList.prototype.getEmployeesList = function() {
  return /** @type{!Array<!proto.employees.Employee>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.employees.Employee, 1));
};


/** @param {!Array<!proto.employees.Employee>} value */
proto.employees.EmployeeList.prototype.setEmployeesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.employees.Employee=} opt_value
 * @param {number=} opt_index
 * @return {!proto.employees.Employee}
 */
proto.employees.EmployeeList.prototype.addEmployees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.employees.Employee, opt_index);
};


proto.employees.EmployeeList.prototype.clearEmployeesList = function() {
  this.setEmployeesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employees.EmployeeUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.employees.EmployeeUpdate.repeatedFields_, null);
};
goog.inherits(proto.employees.EmployeeUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.employees.EmployeeUpdate.displayName = 'proto.employees.EmployeeUpdate';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.employees.EmployeeUpdate.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employees.EmployeeUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.employees.EmployeeUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employees.EmployeeUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fieldList: jspb.Message.getRepeatedField(msg, 2),
    emp: (f = msg.getEmp()) && proto.employees.Employee.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employees.EmployeeUpdate}
 */
proto.employees.EmployeeUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employees.EmployeeUpdate;
  return proto.employees.EmployeeUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employees.EmployeeUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employees.EmployeeUpdate}
 */
proto.employees.EmployeeUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmployeeId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addField(value);
      break;
    case 3:
      var value = new proto.employees.Employee;
      reader.readMessage(value,proto.employees.Employee.deserializeBinaryFromReader);
      msg.setEmp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employees.EmployeeUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employees.EmployeeUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employees.EmployeeUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getEmp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.employees.Employee.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 employee_id = 1;
 * @return {number}
 */
proto.employees.EmployeeUpdate.prototype.getEmployeeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.employees.EmployeeUpdate.prototype.setEmployeeId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string field = 2;
 * @return {!Array<string>}
 */
proto.employees.EmployeeUpdate.prototype.getFieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.employees.EmployeeUpdate.prototype.setFieldList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.employees.EmployeeUpdate.prototype.addField = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.employees.EmployeeUpdate.prototype.clearFieldList = function() {
  this.setFieldList([]);
};


/**
 * optional Employee emp = 3;
 * @return {?proto.employees.Employee}
 */
proto.employees.EmployeeUpdate.prototype.getEmp = function() {
  return /** @type{?proto.employees.Employee} */ (
    jspb.Message.getWrapperField(this, proto.employees.Employee, 3));
};


/** @param {?proto.employees.Employee|undefined} value */
proto.employees.EmployeeUpdate.prototype.setEmp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.employees.EmployeeUpdate.prototype.clearEmp = function() {
  this.setEmp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.employees.EmployeeUpdate.prototype.hasEmp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employees.EmployeeId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employees.EmployeeId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.employees.EmployeeId.displayName = 'proto.employees.EmployeeId';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employees.EmployeeId.prototype.toObject = function(opt_includeInstance) {
  return proto.employees.EmployeeId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employees.EmployeeId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeId.toObject = function(includeInstance, msg) {
  var f, obj = {
    employeeId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employees.EmployeeId}
 */
proto.employees.EmployeeId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employees.EmployeeId;
  return proto.employees.EmployeeId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employees.EmployeeId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employees.EmployeeId}
 */
proto.employees.EmployeeId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEmployeeId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employees.EmployeeId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employees.EmployeeId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employees.EmployeeId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.EmployeeId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmployeeId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 employee_id = 1;
 * @return {number}
 */
proto.employees.EmployeeId.prototype.getEmployeeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.employees.EmployeeId.prototype.setEmployeeId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.employees.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.employees.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.employees.Empty.displayName = 'proto.employees.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.employees.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.employees.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.employees.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.employees.Empty}
 */
proto.employees.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.employees.Empty;
  return proto.employees.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.employees.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.employees.Empty}
 */
proto.employees.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.employees.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.employees.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.employees.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.employees.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.employees);
