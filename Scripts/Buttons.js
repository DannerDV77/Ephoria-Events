
document.addEventListener('DOMContentLoaded', function () {

    const evento = document.querySelector('.evento');
    evento.addEventListener('click', function () {
        comprarBoletos('Bad Bunny');
    });

    
});

document.addEventListener('DOMContentLoaded', function () {
    btnContacto = this.getElementById('contacto')
    
    btnCrear = this.getElementById('btnCrear')

    btnHome = this.getElementById('btnHome')

    btnConocenos = this.getElementById('btnConocenos')

    // Editar a pagina Lalo
    btnConocenos.addEventListener('click', () => {
        const url = '/Ephoria-Events/index.html'
        window.location.href = url
    })

    btnHome.addEventListener('click', () => {
        const url = '/Ephoria-Events/index.html'
        window.location.href = url
    })

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