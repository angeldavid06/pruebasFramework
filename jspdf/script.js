if (document.getElementsByClassName('getPDF')) {
    const btn = document.getElementsByClassName('getPDF');
    btn[0].addEventListener('click', () => {
        // const doc = new jsPDF();
        const doc = new jsPDF('p', 'mm', 'letter');

        const html = document.getElementsByClassName('container')[0];
        
        doc.setFontSize(12);

        doc.fromHTML(html);
        doc.save('test.pdf');
    });
}