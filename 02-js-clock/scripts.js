(function () {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hand = document.querySelector('.hand');

    let seconds = 55;
    function tick() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hour = now.getHours();

        let secMovement = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secMovement}deg)`;
        let minMovement = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minMovement}deg)`;

        let hourMovement = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourMovement}deg)`;

    }

    setInterval(tick, 1000);
})();
