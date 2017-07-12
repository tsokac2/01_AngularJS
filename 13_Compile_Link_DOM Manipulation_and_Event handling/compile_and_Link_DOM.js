var app = angular.module('app', []);
app.controller('msg', ['$scope', function($scope){

}]);

app.directive('message', function($interpolate){
    return {
        compile: function (tElement, tAttributes){
            console.log(tAttributes.text + " -In compile");
            tElement.css("border", "1px solid gray"); // CSS clone or instanciation for all  chields in array

            return {
                pre: function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + "-In Pre");
                },

                post: function(scope, iElement, iAttributes){ //best place to modifate the DOM and event handling
                    console.log(iAttributes.text + " -In Post");
                    if(iAttributes.text === "3"){
                        iElement.css("border", "1px solid red");
                    }

                    iElement.on("click", scope.btnClick);
                }
            }
        },

        controller: function ($scope, $element, $attrs){
            //console.log($attrs.text + "-In Controller");
            var v = $interpolate($attrs.text)($scope);
            console.log(v + " -In controler..");

            $scope.btnClick = function(){
                alert(v);
            }
        }
    }
})


/*
// Simple aproach for Compile and Linking

app.directive('message', function($interpolate){
    //post link function
    return function(scope, iElement, iAttributes, controller){ //best place to modifate the DOM and event handling
        console.log(iAttributes.text + " -In Post");
            if(iAttributes.text === "3"){
                iElement.css("border", "1px solid red");
        }
    }
});
*/