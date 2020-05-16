(function() {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('ToBuyController',ToBuyController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
    var service = this;
    var buyitems =
    [
      { name: "milk", quantity: 1 },
      { name: "chips", quantity: 10 },
      { name: "eggs", quantity: 24 },
      { name: "soda", quantity: 12 },
      { name: "cookies", quantity: 10 },

    ];
    var boughtitems = [];

    service.boughtItem = function (itemIndex) {
console.log(buyitems[itemIndex]);
         boughtitems.push(buyitems[itemIndex]);
         buyitems.splice(itemIndex, 1);

     };

     service.getBuyList = function () {
       return buyitems;
     };
     service.getBoughtList = function () {
      return boughtitems;
     };


}
ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController(ShoppingListCheckOffService) {
  var buycontroller= this;

  buycontroller.items=ShoppingListCheckOffService.getBuyList();
  buycontroller.Bought = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
 }
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtcontroller = this;
  boughtcontroller.items=ShoppingListCheckOffService.getBoughtList();

  }
}());
