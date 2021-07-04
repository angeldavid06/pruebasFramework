const btn_alert = document.getElementById('btn-alert')
const btn_confirm = document.getElementById('btn-confirm')
const btn_promt = document.getElementById('btn-promt')

btn_alert.addEventListener('click', () => {
    open_alert('Título de prueba','Esta es una descripción de prueba')

    // open_alert_sm('Título de prueba','top-center')
})

function hola () {
    alert('Hola Mundo')
}

btn_confirm.addEventListener('click', () => {
    const titulo = 'Título de prueba'
    open_confirm_sm(titulo,'top-center', hola)
})
