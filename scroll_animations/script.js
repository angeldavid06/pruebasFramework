let con = document.getElementsByClassName('test');

window.addEventListener('scroll', function(e) {
    if (window.pageYOffset >= con[0].offsetTop) {
        con[0].classList.add('con-outline');
    } else {
        con[0].classList.remove('con-outline');
    }
});