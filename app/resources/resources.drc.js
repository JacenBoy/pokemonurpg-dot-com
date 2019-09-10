app.directive('resourcesSearch', function() {
   return {
       restrict: 'E',
       templateUrl: "/app/resources/partials/resources-search.component.html"
   };
});

app.directive('resourcesPokemonGeneralEditor', function() {
   return {
       restrict: 'E',
       templateUrl: "/app/resources/partials/resources-pokemon-general-editor.component.html"
   };
});

app.directive('resourcesPokemonAttacksEditor', function() {
   return {
       restrict: 'E',
       templateUrl: "/app/resources/partials/resources-pokemon-attacks-editor.component.html"
   };
});

app.directive('resourcesPokemonAbilitiesEditor', function() {
   return {
       restrict: 'E',
       templateUrl: "/app/resources/partials/resources-pokemon-abilities-editor.component.html"
   };
});