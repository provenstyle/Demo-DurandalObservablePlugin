define(['plugins/observable'], function (observable) {

   var deferred = $.Deferred();

   var vm = {};

   vm.vehicles = deferred;

   vm.vehicle = { name: "" };

   vm.selectVehicle = function (vehicle) {
      vm.vehicle = vehicle;
   };

   vm.resolve = function () {
      var data = [
         { name: "charger" },
         { name: "honda" },
         { name: "chevy" }
      ];

      deferred.resolve(data);
      vm.vehicle = data[0];
   };

   return vm;
});