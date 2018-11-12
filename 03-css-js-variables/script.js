(function () {

    function handleUpdate(ev) {
        console.log(this.value);
        const suffix = this.dataset.sizing || '';
        document
            .documentElement
            .style
            .setProperty(`--${this.name}`, `${this.value}${suffix}`);
    }
    const controls = document.querySelectorAll('.controls input');
    controls.forEach(c => {
        c.addEventListener('input', handleUpdate);
    })

})()