var test1=["1","2","3","4"];
var test2=["5","6","7","8"];

(function() {

var root = this;
var andrew=[];
root.andrew = andrew;


 andrew.object = function( arr, contentOfList) {
    if (arr== null) {
      return {};
    };

    var result = {};

    for (var i = 0, length = arr.length; i < length; i++) {
      if (contentOfList) {

        result[arr[i]] = contentOfList[i];
      }


      else {
        result[arr[i][0]] = contentOfList[i][1];
      }
    }
    return result;
  };



andrew.first = function(arr, num) {
    var firstValue =arr[0];

    if (arr == null){
      return "This is not an array! Or the array is emply";
      }

    if (num === null,0){
      return "Must be a number greater than 0";
      }

    if (num < 0){
      return "Must be a number greater than 0";
      }

      return Array.prototype.slice.call(arr,0, num);
  };


andrew.last = function(arr, num) {

    if (arr == null){
      return "This is not an array! Or the array is emply";
      }

    if (num === null,0){
      return "Must be a number greater than 0";
      }

    if (num < 0){
      return "Must be a number greater than 0";
      }

      return Array.prototype.slice.call(arr, Math.max(arr.length - num, 0));
  };

andrew.addTim = function(arr) {

   var result =[];
   for (var i = 0, length = arr.length; i < length; i++) {
      result=arr + " " +"Tim is awesome";
      return result;
      }
      };

}());
