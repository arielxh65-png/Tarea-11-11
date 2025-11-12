// =============================================
// VARIABLES GLOBALES
// =============================================

let usuarioNombreCompleto = localStorage.getItem("usuarioNombreCompleto") || "";

// =============================================
// FUNCIONES GENERALES
// =============================================

console.log("JavaScript cargado correctamente");

function mostrarMensajeCarga() {
    console.log("Página cargada correctamente");
}

// =============================================
// PÁGINA PRINCIPAL
// =============================================

function inicializarPaginaPrincipal() {
    alert("¡Bienvenido a nuestro sitio web interactivo!");
    
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");
    
    if(nombre && apellido) {
        usuarioNombreCompleto = `${nombre} ${apellido}`;
        localStorage.setItem("usuarioNombreCompleto", usuarioNombreCompleto);
        alert(`¡Hola ${usuarioNombreCompleto}! Bienvenido/a a nuestra página principal.`);
        mostrarMensajeBienvenida('user-display', usuarioNombreCompleto);
    } else {
        alert("¡Bienvenido! Esperamos que disfrutes de nuestro sitio web.");
    }
}

function mostrarMensajeBienvenida(elementId, nombreCompleto) {
    const userDisplay = document.getElementById(elementId);
    if(userDisplay) {
        userDisplay.innerHTML = `<p class="user-greeting">Hola, <span class="user-name">${nombreCompleto}</span>. ¡Es un placer tenerte aquí!</p>`;
    }
}

// =============================================
// GALERÍA
// =============================================

function inicializarGaleria() {
    if(usuarioNombreCompleto) {
        const userDisplay = document.getElementById('user-display-gallery');
        if(userDisplay) {
            userDisplay.innerHTML = `<h2 class="welcome-title">¡Bienvenido/a ${usuarioNombreCompleto} a la Galería!</h2>`;
        }
    }

    alert("¡Bienvenido a nuestra galería de imágenes!");
    verificarEdadGaleria();
}

function verificarEdadGaleria() {
    let userAge = prompt("Para acceder a la galería, por favor ingresa tu edad:");
    const contenido = document.getElementById('contenido-pagina');
    
    if(!contenido) return;
    
    if(userAge && parseInt(userAge) > 20) {
        mostrarGaleria();
        alert("¡Eres mayor de 20 años! Acceso concedido. Disfruta de nuestra galería.");
    } else {
        mostrarAccesoDenegado(userAge);
        alert("Eres menor de 20 años. Acceso denegado para ver la galería.");
    }
}

function mostrarGaleria() {
    const imagenes = [
        {front:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',back:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop'},
        {front:'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=300&h=200&fit=crop',back:'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=200&fit=crop'},
        {front:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',back:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop'},
        {front:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop',back:'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=200&fit=crop'},
        {front:'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=200&fit=crop',back:'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=300&h=200&fit=crop'}
    ];

    const galeriaHTML = imagenes.map((img, index) => `
        <div class="image-item">
            <div class="image-container">
                <img class="image-front" src="${img.front}" alt="Paisaje ${index + 1}">
                <img class="image-back" src="${img.back}" alt="Transformado ${index + 1}">
            </div>
        </div>
    `).join('');

    document.getElementById('contenido-pagina').innerHTML = `
        <section class="gallery">
            <h2>Galería de Transformación de Paisajes</h2>
            <p style="text-align:center;margin-bottom:20px;color:#666;">Pasa el cursor sobre cada imagen para verla transformarse</p>
            <div class="image-grid">${galeriaHTML}</div>
        </section>
    `;
}

function mostrarAccesoDenegado(edad) {
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="access-denied">
            <h2>Acceso Restringido</h2>
            <p>Debes ser mayor de 20 años para ver las imágenes.</p>
            <p>Tu edad: <strong>${edad || 'No especificada'}</strong></p>
        </section>
    `;
}

// =============================================
// CALCULADORA
// =============================================

function inicializarCalculadora() {
    if(usuarioNombreCompleto) {
        const userDisplay = document.getElementById('user-display-calculator');
        if(userDisplay) {
            userDisplay.innerHTML = `<h2 class="welcome-title">¡Bienvenido/a ${usuarioNombreCompleto} a la Calculadora!</h2>`;
        }
    }
}

function calcularSuma() {
    const num1 = obtenerNumero("primer número para sumar");
    const num2 = obtenerNumero("segundo número para sumar");
    if(num1 !== null && num2 !== null) mostrarResultado(`El resultado de ${num1} + ${num2} = ${num1 + num2}`);
}

function calcularDivision() {
    const num1 = obtenerNumero("primer número para dividir (dividendo)");
    const num2 = obtenerNumero("segundo número para dividir (divisor)");
    if(num1 !== null && num2 !== null) {
        if(num2 === 0) mostrarResultado("Error: No se puede dividir entre cero.");
        else mostrarResultado(`El resultado de ${num1} ÷ ${num2} = ${(num1 / num2).toFixed(2)}`);
    }
}

function calcularPromedio() {
    const num1 = obtenerNumero("primer número para promediar");
    const num2 = obtenerNumero("segundo número para promediar");
    if(num1 !== null && num2 !== null) mostrarResultado(`El promedio de ${num1} y ${num2} = ${((num1 + num2) / 2).toFixed(2)}`);
}

function obtenerNumero(mensaje) {
    const input = prompt(`Ingresa el ${mensaje}:`);
    const numero = parseFloat(input);
    if(isNaN(numero)) { alert("Por favor ingresa un número válido."); return null; }
    return numero;
}

function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    if(resultadoDiv) resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
}

// =============================================
// INICIALIZACIÓN AUTOMÁTICA
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    mostrarMensajeCarga();
    const currentPage = window.location.pathname;
    if(currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) setTimeout(inicializarPaginaPrincipal, 500);
    if(currentPage.includes('pagina2.html')) setTimeout(inicializarGaleria, 500);
    if(currentPage.includes('pagina3.html')) setTimeout(inicializarCalculadora, 500);
});
