
document.addEventListener('DOMContentLoaded', function () {

    const evento = document.querySelector('.evento');
    evento.addEventListener('click', function () {
        comprarBoletos('Bad Bunny');
    });

    
});

document.addEventListener('DOMContentLoaded', function () {
    btnContacto = this.getElementById('contacto')
    
    btnCrear = this.getElementById('btnCrear')

    btnCrear.addEventListener('click', () => {
        const url = '/Ephoria-Events/pages/createEvent.html'
        window.location.href = url
    })

    btnContacto.addEventListener('click', () => {
        const url = '/Ephoria-Events/pages/createEvent.html'
        window.location.href = url
    })
    
});

function comprarBoletos(artista) {
    const url = `/Ephoria-Events/pages/buyTikets.html?artista=${encodeURIComponent(artista)}`;
    window.location.href = url;
}