'use strict';

angular.module('zhaole365')

        .factory('LocalDbService', function ($cordovaSQLite) {
            // Might use a resource here that returns a JSON array
            return {
                createdb : function () {
                    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)")
                            .then(function (res) {
                                console.log("create my.db");
                            }, function (err) {
                                console.error(err);
                            });
                },
                
                insert: function (firstname, lastname) {
                    var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
                    $cordovaSQLite.execute(db, query, [firstname, lastname])
                            .then(function (res) {
                                console.log("INSERT ID -> " + res.insertId);
                            }, function (err) {
                                console.error(err);
                            });
                },
                
                select: function (lastname) {
                    var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
                    $cordovaSQLite.execute(db, query, [lastname])
                            .then(function (res) {
                                if (res.rows.length > 0) {
                                    console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
                                } else {
                                    console.log("No results found");
                                }
                            }, function (err) {
                                console.error(err);
                            });
                },
                
                deletedb : function () {
                    $cordovaSQLite.deleteDB("my.db");
                },                
                
            }
        });
