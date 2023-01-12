import MediaPlayer from './MediaPlayer';
import AutoPlay from '../plugins/AutoPlay';
import AutoPause from '../plugins/AutoPause';

const video = document.querySelector('video');
const button: HTMLElement = document.querySelector('#PlayPause') as HTMLElement;
const buttonSilence: HTMLElement = document.querySelector('#Silence') as HTMLElement;
// const buttonNoSilence = document.querySelector('#NoSilence');
const player = new MediaPlayer({ 
    el: video,
    plugins: [new AutoPlay(),
        new AutoPause()
    ] 
});
    
button.onclick = () => player.togglePlay();
buttonSilence.onclick = () => player.mute();
// buttonNoSilence.onclick = () => player.unmute();

// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log(error.message);
//     })
// }

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('/sw.js', import.meta.url),
    {type: 'module'}).catch(error => {
    console.log(error.message)
    })
}

// Version de JS

// import MediaPlayer from './MediaPlayer.ts';
// import AutoPlay from '../plugins/AutoPlay.ts';
// import AutoPause from '../plugins/AutoPause.ts';

// const video = document.querySelector('video');
// const button = document.querySelector('#PlayPause');
// const buttonSilence = document.querySelector('#Silence');
// // const buttonNoSilence = document.querySelector('#NoSilence');
// const player = new MediaPlayer({ 
//     el: video,
//     plugins: [new AutoPlay(),
//         new AutoPause()
//     ] });

// button.onclick = () => player.togglePlay();
// buttonSilence.onclick = () => player.mute();
// // buttonNoSilence.onclick = () => player.unmute();

// // if('serviceWorker' in navigator){
// //     navigator.serviceWorker.register('/sw.js').catch(error => {
// //         console.log(error.message);
// //     })
// // }

// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register(new URL('/sw.js', import.meta.url),
//     {type: 'module'}).catch(error => {
//     console.log(error.message)
//     })
// }