

function removeTransition(e){
    if(e.propertyName !== 'transform')return;
    this.classList.remove('playing');
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return;
   audio.currentTime = 0;
   key.classList.add('playing');
   audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(k => k.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSound);