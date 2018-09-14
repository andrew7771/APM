(function() {
    "use strict";

   angular
        .module("productManagement")
        .controller("ProductListCtrl", [ "productResource",
            productListCtrl]);

    function productListCtrl(productResource) {
        var vm = this;

        productResource.query(function(data) {
            vm.products = data;
        });

    }
})();