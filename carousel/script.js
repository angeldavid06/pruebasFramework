const carousel = document.getElementById("container-images");
const carousel_btn_previus = document.getElementById("carousel-previus");
const carousel_btn_next = document.getElementById("carousel-next");
let getImages;
let wCarousel = carousel.clientWidth; 
let auxiliar = 0; 
const images = [
    './img/1 (1).jpg',
    './img/1 (2).jpg',
    './img/1 (3).jpg',
    './img/1 (4).jpg',
    './img/1 (5).jpg',
    './img/1 (6).jpg'
];

const render_images = (c) => {
    for (let index = 0; index < c.length; index++) {
        const img = document.createElement('img');
        img.setAttribute("src",c[index]);
        carousel.appendChild(img);
    }
}

carousel_btn_previus.addEventListener('click', () => {
    if ((auxiliar-1) >= 0) {
        getImages[auxiliar].setAttribute("style","");
        getImages[auxiliar-1].style.right = 0;
        getImages[auxiliar].style.right = wCarousel;
        console.log(getImages[auxiliar]);
        auxiliar--;
        console.log(auxiliar);
    }
});

carousel_btn_next.addEventListener('click', () => {
    if ((auxiliar+1) < getImages.length) {
        getImages[auxiliar].style.left = (-1)*wCarousel;
        getImages[auxiliar+1].style.left = 0;
        auxiliar++;
        console.log(auxiliar);
    }
});

(() => {
    render_images(images);
    getImages = carousel.getElementsByTagName("img")
    getImages[0].style.left = 0;
})();