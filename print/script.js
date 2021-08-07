if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        printPage('tests.html')      
        // printPage('../chart/index.html')      
    });
}