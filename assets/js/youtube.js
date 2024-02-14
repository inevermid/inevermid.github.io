// Constants Variables
const id = 'm6ynt0Wv2cU';

YT.ready(_ => {
    window.player = player = new YT.Player('player', {
        videoId: id,
        playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,

            playlist: id
        },
        events: {
            onReady: e => e.target.setVolume(25)
        }
    });
});
