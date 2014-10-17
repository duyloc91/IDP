/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var searchApp = angular.module('searchApp', []);

searchApp.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
      {
        name: "Robert Downey Jr."
      },
      {
        name: "Chris Evans"
      },
      {
        name: "Mark Ruffalo"
      },
      {
        name: "Chris Hemsworth"
      },
      {
        name: "Scarlett Johansson"
      },
      {
        name: "Jeremy Renner"
      },
      {
        name: "Tom Hiddleston"
      },
      {
        name: "Clark Gregg"
      },
      {
        name: "Cobie Smulders"
      },
      {
        name: "Stellan Skarsgard"
      },
      {
        name: "Samuel L. Jackson"
      },
      {
        name: "Gwyneth Paltrow"
      },
      {
        name: "Paul Bettany"
      },
      {
        name: "Alexis Denisof"
      },
      {
        name: "Tina Benko"
      }
    ];
    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}
