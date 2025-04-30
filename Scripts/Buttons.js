
document.addEventListener('DOMContentLoaded', function () {
    const evento = document.querySelector('.evento');
    evento.addEventListener('click', function () {
        comprarBoletos('Bad Bunny');
    });
});

function comprarBoletos(artista) {
    const url = `/Ephoria-Events/pages/buyTikets.html?artista=${encodeURIComponent(artista)}`;
    window.location.href = url;
}



function opencontacto(){
    const url = '/Ephoria-Events/pages/createEvent.html'
    window.location.href = url
}