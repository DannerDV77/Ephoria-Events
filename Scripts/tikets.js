// scripts/mostrarDetalles.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const artista = params.get('artista');

    // Mostrar la información del artista
    if (artista) {
        
        llenarboleto(artista)
    } else {
        document.getElementById('artista').textContent = 'No se encontro el evento.';
    }

    document.getElementById('valorCantidad').addEventListener('change', calcularTotal);
    document.getElementById('valorZona').addEventListener('change', calcularTotal);

});

function llenarboleto(artista){

    if(artista == "Shakira"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Estadio GNP`;
        document.getElementById('fecha').textContent = `23/08/25`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/Shakira.jpg" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Bad Bunny"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Parque Fundidora`;
        document.getElementById('fecha').textContent = `25/07/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/bad_bunny.png" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Duki"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Foro Sol`;
        document.getElementById('fecha').textContent = `17/09/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/Duki.jpg" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Caifanes"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Auditorio Nacional`;
        document.getElementById('fecha').textContent = `5/07/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/Caifanes.jpg" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Los Temerarios"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Auditorio BB`;
        document.getElementById('fecha').textContent = `22/10/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/temerarios.jpg" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Bellie Eilish"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Palacio de los Deportes`;
        document.getElementById('fecha').textContent = `8/09/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/Bellie.jpg" class="imgArtista" id="imgArtista">'

    }

    if(artista == "Nanpa Basico"){
        document.getElementById('artista').textContent = `${artista}`;
        document.getElementById('lugar').textContent = `Auditorio Telmex`;
        document.getElementById('fecha').textContent = `25/08/2025`;

        let contenedor = document.getElementById('containerImgArtista');
        contenedor.innerHTML = '<img src="/Ephoria-Events/Resource/eventos/nanpa-basico.jpg" class="imgArtista" id="imgArtista">'

    }
}



// Función para calcular el total
function calcularTotal() {
    // Obtener la cantidad de boletos seleccionada
    let cantidadBoletos = document.getElementById('valorCantidad').value;         
    // Obtener el precio de la zona seleccionada
    let precioZona = document.getElementById('valorZona').value;

    // Calcular el total
    let total = cantidadBoletos * precioZona;
    
    // Mostrar el total en el elemento <p> con id "Total"
    document.getElementById('Total').innerHTML = `Total: $ ${total}`;
}