if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        const tabla = document.getElementsByClassName('table')
        console.log(tabla[0]);
        printPage('tests.php?tabla='+tabla[0])      
        // printPage('../chart/index.html')      
    });
}