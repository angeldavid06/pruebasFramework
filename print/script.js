if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        printPage('tests.php?id=HolaPrro')      
        // printPage('../chart/index.html')      
    });
}