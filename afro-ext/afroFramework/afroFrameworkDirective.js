"use strict";

angular.module("afroFramework").directive("afroFramework", function () {
    return {
        transclude: false,
        scope: {
            title: "@",
            iconFile: "@"
        },
        controller: "afroFrameworkController",
        templateUrl: "afro-ext/afroFramework/afroFrameworkTemplate.html"
    };
});
