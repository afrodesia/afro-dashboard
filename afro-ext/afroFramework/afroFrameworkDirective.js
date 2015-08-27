"use strict";

angular.module("afroFramework").directive("afroFramework", function () {
    return {
        transclude: false,
        scope: {

        },
        controller: "afroFrameworkController",
        templateUrl: "afro-ext/afroFramework/afroFrameworkTemplate.html"
    };
});
