//blur function

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


// image upload

const imageInput = document.querySelector('#image_upload');
let uploaded_img = '';

imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        uploaded_img = reader.result;
        document.querySelector('#image_display').style.backgroundImage = `url(${uploaded_img})`
    })
    reader.readAsDataURL(this.files[0])
})