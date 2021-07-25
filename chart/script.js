const get_random = () => {
    return r = Math.floor(Math.random() * 15);
}

const render_bar = () => {
    const max_rows = 15;
    const max_columns = 23;

    const result_chart = document.getElementsByClassName('result-chart');
    const question_options = document.getElementsByClassName('question-options');
    const answers = document.getElementsByClassName('answers');
    const answers_grade = document.getElementsByClassName('answers-grade');
    const options = document.getElementsByClassName('options');
    
    result_chart[0].setAttribute('style','grid-template: repeat('+ (max_rows-1) +',1fr)' + '/' + 'repeat('+ max_columns +',1fr)');
    options[0].setAttribute('style','grid-template: 1fr' + '/' + 'repeat('+ max_columns +',1fr)');
    answers[0].setAttribute('style','grid-template: 1fr / 1fr');
    
    
    for (let i = 1; i <= max_columns; i++) {
        const r = get_random();
        if (r > 0) {
            const div = document.createElement('div');
            const answer = document.createElement('div');
            const option = document.createElement('div');
            const p = document.createElement('p');
            
            div.classList.add('b-chart');
            div.style.gridArea = r  + '/' + i + '/' + max_rows + '/' + i;
            
            answers_grade[0].setAttribute('style','grid-template: repeat(' + max_rows + ',1fr) / 1fr');
            
            question_options[0].style.gridArea = 2  + '/' + 2 + '/' + 3 + '/' + 3;
            
            option.classList.add('option');
            p.innerHTML = 'Opción de la pregunta';

            option.appendChild(p);
            options[0].appendChild(option);
            result_chart[0].appendChild(div);
        } else if (r == 0) {
            i--;
        }

    }
    
    let aux = 1;

    for (let j = max_rows; j > 0; j--) {
        const pA = document.createElement('p');
        pA.innerHTML = j;
        pA.style.gridArea = (aux+1)  + '/' + 1 + '/' + aux + '/' + 2;
        console.log(aux+1);
        answers_grade[0].appendChild(pA);
        answers[0].appendChild(answers_grade[0]);
        aux++;
    }
    
}

(() => {
    render_bar();
})()