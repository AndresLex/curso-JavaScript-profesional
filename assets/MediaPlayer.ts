class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    
    initPlayer() {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media)
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    mute() {
        this.media.muted === true ? this.media.muted = false : this.media.muted = true;
    }

    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
}

export default MediaPlayer;

// Version de JS

// function MediaPlayer(config) {
//     this.media = config.el;
//     this.plugins = config.plugins || [];

//     this._initPlugins();
// }

// MediaPlayer.prototype._initPlugins = function () {
//     const player = {
//         play: () => this.play(),
//         pause: () => this.pause(),
//         media: this.media,
        
//         get muted() {
//             return this.media.muted;
//         },

//         set muted(value) {
//             this.media.muted = value;
//         }
//     }
//     this.plugins.forEach(plugin => {
//         plugin.run(player);
//     });
// }

// MediaPlayer.prototype.play = function() {
//     this.media.play();
// };

// MediaPlayer.prototype.pause = function() {
//     this.media.pause();
// };

// MediaPlayer.prototype.mute = function() {
//     this.media.muted === true ? this.media.muted = false: this.media.muted = true;
// }

// // MediaPlayer.prototype.unmute = function() {
// //     this.media.muted = false;
// // }

// MediaPlayer.prototype.togglePlay = function() {
//     // if (this.media.paused) {
//     //     this.play();
//     // } else {
//     //     this.pause();
//     // }
//     this.media.paused ? this.play() : this.pause();
// };

// export default MediaPlayer;