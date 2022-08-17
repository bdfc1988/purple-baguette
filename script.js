const blur = document.querySelector('.blur');

let load = 0;

let int = setInterval(blurring, 10)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int);
    }

    blur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}