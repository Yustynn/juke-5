app.directive('albumList', function(){
  return {
    scope: {
      albums: '='
    },
    templateUrl: '/templates/components/albumList.html'
  }
});