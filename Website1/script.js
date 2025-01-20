const container = document.querySelector('.container');
const video = document.querySelector('video');
const container2 = document.querySelector('.container2');
const video2 = document.querySelector('.container2 video');
// video.style.width = container.offsetWidth + 'px'
// video.style.height = container.offsetHeight + 'px'
// video2.style.width = container2.offsetWidth + 'px'
video2.style.height = container2.offsetHeight + 'px'

window.addEventListener('resize', () => {
    console.log(video);
    // video.style.width = container.offsetWidth + 'px'
    // video.style.height = container.offsetHeight + 'px'
    // video2.style.width = container2.offsetWidth + 'px'
    video2.style.height = container2.offsetHeight + 'px'
})