import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('#PlayPause');
const buttonSilence = document.querySelector('#Silence');
const buttonNoSilence = document.querySelector('#NoSilence');
const player = new MediaPlayer({ 
    el: video,
    plugins: [new AutoPlay()] });

button.onclick = () => player.togglePlay();
buttonSilence.onclick = () => player.mute();
// buttonNoSilence.onclick = () => player.unmute();