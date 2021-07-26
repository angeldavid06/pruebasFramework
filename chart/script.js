const get_random = () => {
    return Math.floor(Math.random() * 20);
}

const render_bars = (result_chart,question_options,options) => {
    const max_rows = 20;
    const max_columns = 5;
    
    result_chart.setAttribute('style','grid-template: repeat('+ max_rows +',1fr)' + '/' + 'repeat('+ max_columns +',1fr)');
    options.setAttribute('style','grid-template: 1fr' + '/' + 'repeat('+ max_columns +',1fr)');
    
    for (let i = 1; i <= max_columns; i++) {
        const r = get_random();
        const div = document.createElement('div');
        const pC = document.createElement('p');
        const option = document.createElement('div');
        const p = document.createElement('p');
        
        if (r > 0) {            
            div.classList.add('b-chart');
            div.style.gridArea = r+1 + '/' + i + '/' + (max_rows+1) + '/' + i;
            
            pC.innerHTML = (max_rows+1) - (r+1);

            question_options.style.gridArea = 2  + '/' + 1 + '/' + 3 + '/' + 2;
        } else if (r == 0) {
            div.classList.add('b-chart');
            div.style.gridArea = 1  + '/' + i + '/' + (max_rows+1) + '/' + i;
            
            pC.innerHTML = (max_rows+1) - 1;

            question_options.style.gridArea = 2  + '/' + 1 + '/' + 3 + '/' + 2;
        }

        option.classList.add('option');
        p.innerHTML = 'Opción de la pregunta';

        option.appendChild(p);
        options.appendChild(option);
        div.appendChild(pC);
        result_chart.appendChild(div);
    }
}

const render_title_chart = (question, count) => {
    const title_chart = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    title_chart.classList.add('title-chart');

    h4.innerHTML = question;
    p.innerHTML = 'Total de respuestas registradas: ' + count;
    
    title_chart.appendChild(h4);
    title_chart.appendChild(p);
    
    return title_chart;
}

const render_content_chart = () => {
    const content_chart = document.createElement('div');
    const result_chart = document.createElement('div');
    const question_options = document.createElement('div');
    const options = document.createElement('div');
    
    content_chart.classList.add('content-chart');
    result_chart.classList.add('result-chart');
    question_options.classList.add('question-options');
    options.classList.add('options');

    render_bars(result_chart,question_options,options);

    question_options.appendChild(options);
    content_chart.appendChild(result_chart);
    content_chart.appendChild(question_options);

    return content_chart;
}

const render_chart = (question, count) => {
    const fragment = document.createDocumentFragment();
    const title = render_title_chart(question, count);
    const content = render_content_chart();
    
    fragment.appendChild(title);
    fragment.appendChild(content);

    return fragment;
}

const render_main_chart = (main) => {
    const chart = document.createElement('div');
    const fragment = render_chart('¿Esta es una pregunta realizada al personal?', '0/50');
    
    chart.classList.add('chart');

    chart.appendChild(fragment);
    main.appendChild(chart);
}

(() => {
    const row = document.getElementsByClassName('row-con');
    for (let i = 0; i < 50; i++) {
        render_main_chart(row[0]);
    }
})()