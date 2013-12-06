define([], function () {

   var vm = function() {

      this.message = "Howdy Ya'll";

      this.changeMessage = function() {
         this.message = "Hello World";
      };

      this.color = {
         name: 'red',         
      };

      this.changeColor = function() {
         this.color = { name: 'blue' };
      };

      this.vehicles = [
         {
            name: "charger",
            cameras: [
               { cameraName: "camera1", id: 0 },
               { cameraName: "camera2", id: 1 }
            ]
         },
         {
            name: "honda",
            cameras: [
               { cameraName: "camera1", id: 0 },
               { cameraName: "camera2", id: 1 }
            ]
         }
      ];

      var index = 1;
      this.addVehicle = function() {

         this.vehicles.push(
               {
                  name: "vehicle" + index,
                  cameras: [
                     { cameraName: "camera1", id: 0 },
                     { cameraName: "camera2", id: 1 }
                  ]
               }
            );
         index++;
      };
   };

   return vm;
});