(function () {

    function playSound(event) {
        const keyCode = event.keyCode;

        let key = document.querySelector(`.key[data-key="${keyCode}"]`);
        let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        if (!key || !audio) {
            return;
        }

        key
            .classList
            .add('playing');
        audio.currentTime = 0;
        audio.play();
    }

    function removeTransition(elem) {
        if (elem.propertyName !== 'transform') 
            return;
        this
            .classList
            .remove('playing');
    }

    window.addEventListener('keydown', playSound);

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', removeTransition);
    })
})();
