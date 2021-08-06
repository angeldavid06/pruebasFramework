if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        var doc = new jsPDF();
        const html = document.getElementsByClassName('container')[0];
        doc.fromHTML(html);
        doc.save('prueba.pdf');
    });
}