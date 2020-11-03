
function addTransition(keyCode) {
    const keyPlayed = document.querySelector(`div.key[data-key="${keyCode}"]`);
    keyPlayed.classList.add('playing');
}
function playSound(keyCode){
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e){
    if(e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}
window.addEventListener('keydown',function(e){
    const keyCode = e.keyCode;

    playSound(keyCode);
    addTransition(keyCode)
});
const keys = document.querySelectorAll('div.key');
keys.forEach((key)=>{
    key.addEventListener('transitionend',removeTransition);
});
