app.directive('songList', function(){
    return {
        scope: {
            songs: '='
        },
        templateUrl: '/templates/components/song-list.html'
    }
});