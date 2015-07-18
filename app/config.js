// set your port, database name,
// and IP if different from default
"use strict";

var port = "27017",
    ip = "127.0.0.1",
    name = "FaithTracker";

exports.dbName = "mongodb://" + ip + ":" + port + "/" + name;