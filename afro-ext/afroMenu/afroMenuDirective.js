"use strict";

angular.module("afroMenu").directive("afroMenu", function () {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: "afro-ext/afroMenu/afroMenuTemplate.html",
        controller: "afroMenuController",
        link: function (scope, el, attr) {

        }
    };
});
