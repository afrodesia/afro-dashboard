"use strict";

angular.module("afroMenu").directive("afroMenuItem", function () {
    return {
        require: "^afroMenu",
        scope: {
            label: "@"
        },
        templateUrl: "afro-ext/afroMenu/afroMenuItemTemplate.html",
        link: function (scope, el, attr, ctrl) {

        }
    };
});
