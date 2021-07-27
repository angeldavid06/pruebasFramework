// Variable para guardar la función callback enviada

let sharedFunction = '';

// Variables necesarias para la ejecución del carrusel

let carousel;
let getImages;
let wCarousel = 0; 
let auxiliar = 0; 

// Variables necesarias para la ejecución de las graficas

let max_rows = 0;
let max_columns = 0;

// Script para generar alertas o confirms

const remove_not = (type) => {
    const not = document.getElementsByClassName(type);
    document.body.removeChild(not[0]);
}

const render_buttons = (type) => {
    const div = document.createElement('div');
    const btn_accept = document.createElement('button');
    const btn_cancel = document.createElement('button');
    
    div.classList.add('row-con');
    div.classList.add('con-w12');
    div.classList.add('justify-right');

    btn_accept.classList.add('btn');
    btn_accept.classList.add('btn'+type+'-accept');
    btn_accept.classList.add('btn-blue');
    btn_accept.innerHTML = 'Accept';

    btn_cancel.classList.add('btn');
    btn_cancel.classList.add('btn'+type+'-cancel');
    btn_cancel.classList.add('btn-red');
    btn_cancel.innerHTML = 'Cancel';
    
    div.appendChild(btn_accept);
    div.appendChild(btn_cancel);
    
    return div;
}

const render_form = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    
    form.setAttribute('id','form_not_promt');
    form.classList.add('form_not_promt');
    
    input.setAttribute('id','input_promt');
    input.setAttribute('name','input_promt');
    input.classList.add('form-control');
    
    form.appendChild(input);
    
    return form;
}

const render_not_cont = (className) => {
    const not_alert = document.createElement('div');

    not_alert.classList.add('notification');
    not_alert.classList.add('not-descripction');
    not_alert.classList.add(className);
    
    return not_alert;
}

const render_cont = () => {
    const con_not = document.createElement('div');
    
    con_not.classList.add('con');
    con_not.classList.add('con-round');
    con_not.classList.add('con-w5');
    
    return con_not;
}

const render_not = (type) => {
    if (type === 'alert') {
        return render_not_cont('alert');
    } else if (type == 'confirm') {
        const not = render_not_cont('confirm');
        return not;
    } else if (type == 'promt') {
        const not =  render_not_cont('promt');
        not.classList.add('not-open');
        return not;
    }
}

const render_title = (title) => {
    const h = document.createElement('h4');
    h.innerHTML = title;
    h.classList.add('txt-center');
    return h;
}

const render_description = (description,className) => {
    const p = document.createElement('p');
    p.innerHTML = description;
    p.classList.add('not-description-text');
    if (className === 'alert') {
        p.classList.add('txt-center');
    } else {
        p.classList.add('txt-justify');
    }
    return p
}

const time_notification = (not) => {
    document.body.appendChild(not);
    window.setTimeout(() => {
        not.classList.add('not-open');
    },300);
    window.setTimeout(() => {
        not.classList.remove('not-open');
    },2500);
    window.setTimeout(() => {
        document.body.removeChild(not);
    },2800);
}

const render_alert_sm = (title,position) => {
    render_not('alert-sm');
    render_cont();
    render_title(title);
}

const render_alert_description = (t,d) => {
    const not = render_not('alert');
    const cont = render_cont();
    const title = render_title(t);
    const description = render_description(d,'alert');
    
    cont.appendChild(title);
    cont.appendChild(description);
    
    not.appendChild(cont);
    
    time_notification(not);
}

const render_confirm_description = (t, d, callback) => {
    const not = render_not('confirm');
    const cont = render_cont();
    const title = render_title(t);
    const description = render_description(d,'confirm');
    const buttons = render_buttons('-confirm');
    
    cont.appendChild(title);
    cont.appendChild(description);
    cont.appendChild(buttons);
    
    not.appendChild(cont);
    
    document.body.appendChild(not);
    window.setTimeout(() => {
        not.classList.add('not-open');
    },300)
    
    sharedFunction = callback;
}

const render_promt_description = (t, question) => {
    const not = render_not('promt');
    const cont = render_cont();
    const title = render_title(t);
    const description = render_description(question);
    const form = render_form();
    const buttons = render_buttons('-promt');
    
    cont.appendChild(title);
    cont.appendChild(description);
    cont.appendChild(form);
    cont.appendChild(buttons);
    
    not.appendChild(cont);
    
    document.body.appendChild(not);
}

const render_confirm_sm = (title,position) => {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const h5 = document.createElement('h5');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');

    div.classList.add('notification');
    div.classList.add('not');
    div.classList.add('not-'+position);
    div.classList.add('confirm');

    div2.classList.add('con');
    div2.classList.add('bg-aux');
    div2.classList.add('con-w6');
    div2.classList.add('round');
    div2.classList.add('fluid');

    div3.classList.add('fluid');
    div3.classList.add('con-w6');
    div3.classList.add('justify-right');
    
    h5.classList.add('txt-left');
    h5.classList.add('con-w6');
    h5.innerHTML = title;
    
    btn1.classList.add('btn');
    btn1.classList.add('btn-confirm-sm-accept');
    btn1.classList.add('btn-icon-self');
    btn1.classList.add('btn-blue');
    btn1.classList.add('material-icons');
    btn1.innerHTML = 'done';

    btn2.classList.add('btn');
    btn2.classList.add('btn-confirm-sm-cancel');
    btn2.classList.add('btn-icon-self');
    btn2.classList.add('btn-red');
    btn2.classList.add('material-icons');
    btn2.innerHTML = 'close';
    
    div3.appendChild(btn1);
    div3.appendChild(btn2);

    div2.appendChild(h5);
    div2.appendChild(div3);
    
    div.appendChild(div2);
    
    document.body.appendChild(div)
    window.setTimeout(() => {
        div.classList.add('not-open')
    },300)
}

const open_alert = (title,description) => {
    render_alert_description(title,description)    
}

const open_alert_sm = (title,position) => {
    const div = document.createElement('div');
    const div2 = document.createElement('div2');
    const h5 = document.createElement('h5');
    
    div.classList.add('notification');
    div.classList.add('not');
    div.classList.add('not-'+position);
    div.classList.add('alert');
    
    div2.classList.add('con');
    div2.classList.add('con-round');
    div2.classList.add('con-w5');
    
    h5.classList.add('txt-center');
    h5.innerHTML = title;
    
    div2.appendChild(h5);
    div.appendChild(div2);
    
    time_notification(div);
}

const open_confirm = (title,description,callback) => {
    render_confirm_description(title,description,callback)
}

const open_confirm_sm = (title,position,callback) => {
    render_confirm_sm(title,position)
    sharedFunction = callback;
}

document.addEventListener('click', e => {
    if(e.target.matches('.btn-confirm-accept')) {
        sharedFunction();
    } else if (e.target.matches('.btn-confirm-cancel')) {
        const not = document.getElementsByClassName('confirm')
        window.setTimeout(() => {
            not[0].classList.remove('not-open')
        },100)
        window.setTimeout(() => {
            document.body.removeChild(not[0])
        },500)
    }  else if (e.target.matches('.btn-confirm-sm-accept')) {
        sharedFunction();
    } else if (e.target.matches('.btn-confirm-sm-cancel')) {
        const not = document.getElementsByClassName('confirm')
        window.setTimeout(() => {
            not[0].classList.remove('not-open')
        },100)
        window.setTimeout(() => {
            document.body.removeChild(not[0])
        },500)
    }
});

// Script para generar un carrusel

const render_images = (c) => {
    carousel = document.getElementById("container-images");
    wCarousel = carousel.clientWidth;
    
    for (let index = 0; index < c.length; index++) {
        const img = document.createElement('img');
        
        img.setAttribute("src",c[index]);
        carousel.appendChild(img);
    }

    getImages = carousel.getElementsByTagName("img")
    getImages[0].style.left = 0;
}

if (document.getElementById( "carousel-previous" )) {
    carousel_btn_previous = document.getElementById("carousel-previous");
    carousel_btn_previous.addEventListener('click', () => {
        if ((auxiliar-1) >= 0) {
            getImages[auxiliar-1].style.right = 0;
            getImages[auxiliar].setAttribute("style","");
            getImages[auxiliar].style.right = wCarousel;
            
            auxiliar--;
        }
    });
}

if (document.getElementById( "carousel-next" )) {
    carousel_btn_next = document.getElementById("carousel-next");
    carousel_btn_next.addEventListener('click', () => {
        if ((auxiliar+1) < getImages.length) {
            getImages[auxiliar].style.left = (-1)*wCarousel;
            getImages[auxiliar+1].style.left = 0;
            auxiliar++;
        }
    });
}

// Script para generar graficas

const get_random = () => {
    return Math.floor(Math.random() * 10);
}

const render_bars = (result_chart,question_options,options) => {    
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
    
    content_chart.classList.add('con-chart');
    result_chart.classList.add('result-chart');
    question_options.classList.add('question-options');
    options.classList.add('options');

    render_bars(result_chart,question_options,options);

    question_options.appendChild(options);
    content_chart.appendChild(result_chart);
    content_chart.appendChild(question_options);

    return content_chart;
}

const render_chart = (question, count, charts, rows, columns) => {
    const fragment = document.createDocumentFragment();
    max_rows = rows;
    max_columns = columns;

    for (let i = 1; i <= charts; i++) {
        const title = render_title_chart(question, count);
        const content = render_content_chart();
        
        fragment.appendChild(title);
        fragment.appendChild(content);
    }
    return fragment;
}

const render_main_chart = (main, charts, rows, columns) => {
    const chart = document.createElement('div');
    const fragment = render_chart('¿Esta es una pregunta realizada al personal?', '0/50', charts, rows, columns);

    chart.classList.add('chart');

    chart.appendChild(fragment);
    main.appendChild(chart);
}
