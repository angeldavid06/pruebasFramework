if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        window.print();
    });
}