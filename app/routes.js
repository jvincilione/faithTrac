"use strict";
var classes = require("./controllers/classes.js"),
    users = require("./controllers/users.js"),
    attendance = require("./controllers/attendance.js"),
    members = require("./controllers/members.js"),
    info = require("./controllers/info.js");

module.exports = function(app) {

    // app info routes =======================================================
        app.get("/api/appInfo/", function(req, res) {
            info.getInfo(req, res);
        });

        app.post("/api/appInfo/update/", function(req, res) {
            info.updateInfo(req, res);
        });

        app.post("/api/appInfo/logError/", function(req, res) {
            info.logError(req, res);
        });


    // user routes ===========================================================
        app.post("/api/users/update/", function(req, res) {
            users.updateUser(req, res);
        });

        app.get("/api/users/?id*", function(req, res) {
            users.userById(req, res);
        });

        app.get("/api/users/?role*", function(req, res) {
            users.userByType(req, res);
        });

        app.get("/api/users/all/", function(req, res) {
            users.allUsers(req, res);
        });

        app.delete("/api/users/?id*", function(req, res) {
            users.allUsers(req, res);
        });
    
    // class routes ==========================================================
        app.get("/api/classes/all/", function(req, res) {
            classes.allClasses(req, res);
        });

        app.get("/api/classes/?type*", function(req, res) {
            classes.classByType(req, res);
        });

        app.get("/api/classes/?id*", function(req, res) {
            classes.classById(req, res);
        });

        app.get("/api/classes/members/", function(req, res) {
            classes.getMembersByClass(req, res);
        });

        app.post("/api/classes/update/", function(req, res) {
            classes.updateClass(req, res);
        });

    // member routes =========================================================
        app.get("/api/members/all/", function(req, res) {
            members.allMembers(req, res);
        });

        app.get("/api/members/?id*", function(req, res) {
            classes.memberById(req, res);
        });

        app.post("/api/members/update/", function(req, res) {
            classes.updateMember(req, res);
        });

    // attendance routes =====================================================



    // frontend routes =======================================================
    
        //for js files, route goes to that file
        app.get("*.js", function(req, res) {
            res.sendfile("./public" + req.url); 
        });

        //for css files, route goes to that file
        app.get("*.css", function(req, res) {
            res.sendfile("./public" + req.url); 
        });

        // route to handle all angular requests
        app.get("*", function(req, res) {
            res.sendfile("./public/index.html"); 
        });

};
