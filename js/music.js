const divWrapperRef = document.querySelector('.wrapper__music');
const musicRef = document.querySelector('.music');
const volumeRef = document.createElement('img');
const volumeRangeRef = document.querySelector('#volume_level');
volumeRef.setAttribute('src', "https://img.icons8.com/ultraviolet/80/000000/no-audio--v2.png");
volumeRef.setAttribute('alt', 'volume');
volumeRef.setAttribute('data-index', 1);
volumeRef.classList.add('background_music');
const mutedVolumeRef = document.createElement('img');
mutedVolumeRef.setAttribute('src', 'https://img.icons8.com/ultraviolet/55/000000/no-audio--v1.png');
mutedVolumeRef.setAttribute('alt', 'muted_volume');
mutedVolumeRef.setAttribute('data-index', 2);
mutedVolumeRef.classList.add('background_music_muted');
divWrapperRef.append(mutedVolumeRef, volumeRef);

const onClick = (event) => {
    if(+event.target.dataset.index === 1) {
        musicRef.pause();
        volumeRangeRef.value = 0;
        event.target.classList.add('close_icon');
        mutedVolumeRef.classList.remove('close_icon');
        return mutedVolumeRef.classList.add('show_icon');
    }
    if (+event.target.dataset.index === 2) {
        musicRef.play();
        musicRef.volume = 0.5;
        volumeRangeRef.value = 50;
        event.target.classList.add('close_icon');
        volumeRef.classList.remove('close_icon');
        return volumeRef.classList.add('show_icon');
    }

}

const playMusic = () => {
    musicRef.play();
};

const getRangeVolume = () => {
    musicRef.volume = volumeRangeRef.value / 100;
    console.log(musicRef.volume)
    if (musicRef.volume === 0) {
        volumeRef.classList.add('close_icon');
        mutedVolumeRef.classList.remove('close_icon');
        return mutedVolumeRef.classList.add('show_icon');
    }
    if (musicRef.volume >= 0) {
        mutedVolumeRef.classList.add('close_icon');
        volumeRef.classList.remove('close_icon');
        return volumeRef.classList.add('show_icon');
    }

};

divWrapperRef.addEventListener('click', onClick);
window.addEventListener('load', playMusic);
volumeRangeRef.addEventListener('input', getRangeVolume);