// script.js - Funciones JavaScript para todas las páginas

// =============================================
// VARIABLES GLOBALES
// =============================================

let usuarioNombreCompleto = '';

// =============================================
// FUNCIONES GENERALES
// =============================================

console.log("JavaScript cargado correctamente");

// Función para mostrar mensaje de carga
function mostrarMensajeCarga() {
    console.log("Página cargada correctamente");
}

// =============================================
// FUNCIONES PARA PÁGINA PRINCIPAL (index.html)
// =============================================

function inicializarPaginaPrincipal() {
    console.log("Inicializando página principal...");
    
    // a. Mensaje de bienvenida
    alert("¡Bienvenido a nuestro sitio web interactivo!");
    
    // b. Preguntar por el nombre y apellido
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");
    
    // c. Dar la bienvenida al usuario y d. Mostrar nombre en página
    if(nombre && apellido) {
        usuarioNombreCompleto = `${nombre} ${apellido}`;
        alert(`¡Hola ${usuarioNombreCompleto}! Bienvenido/a a nuestra página principal.`);
        mostrarMensajeBienvenida('user-display', usuarioNombreCompleto);
    } else {
        alert("¡Bienvenido! Esperamos que disfrutes de nuestro sitio web.");
    }
}

// Función para mostrar mensaje de bienvenida en todas las páginas
function mostrarMensajeBienvenida(elementId, nombreCompleto) {
    const userDisplay = document.getElementById(elementId);
    if(userDisplay) {
        userDisplay.innerHTML = 
            `<p class="user-greeting">Hola, <span class="user-name">${nombreCompleto}</span>. ¡Es un placer tenerte aquí!</p>`;
    }
}

// =============================================
// FUNCIONES PARA GALERÍA (pagina2.html)
// =============================================

function inicializarGaleria() {
    console.log("Inicializando galería...");
    
    // Mostrar mensaje de bienvenida personalizado
    if(usuarioNombreCompleto) {
        mostrarMensajeBienvenida('user-display-gallery', usuarioNombreCompleto);
    }
    
    // a. Mensaje de bienvenida
    alert("¡Bienvenido a nuestra galería de imágenes!");
    
    // b. Preguntar por la edad y verificar acceso
    verificarEdadGaleria();
}

function verificarEdadGaleria() {
    let userAge = prompt("Para acceder a la galería, por favor ingresa tu edad:");
    const contenido = document.getElementById('contenido-pagina');
    
    if(!contenido) return;
    
    if(userAge && parseInt(userAge) > 20) {
        // Mostrar galería si es mayor de 20
        mostrarGaleria();
        alert("¡Eres mayor de 20 años! Acceso concedido. Disfruta de nuestra galería.");
    } else {
        // Mostrar mensaje de acceso denegado
        mostrarAccesoDenegado(userAge);
        alert("Eres menor de 20 años. Acceso denegado para ver la galería.");
    }
}

function mostrarGaleria() {
    const imagenes = [
        { 
            front: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
            texto: 'Montañas → Bosque'
        },
        { 
            front: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=200&fit=crop',
            texto: 'Océano → Atardecer'
        },
        { 
            front: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=200&fit=crop',
            texto: 'Bosque → Campo'
        },
        { 
            front: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=200&fit=crop',
            texto: 'Naturaleza → Montañas'
        },
        { 
            front: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=300&h=200&fit=crop',
            texto: 'Lago → Cascada'
        }
    ];
    
    const galeriaHTML = imagenes.map((img, index) => `
        <div class="image-item">
            <div class="image-container">
                <img class="image-front" src="${img.front}" 
                     alt="Paisaje ${index + 1}"
                     onerror="this.src='https://via.placeholder.com/300x200/3498db/ffffff?text=Paisaje+${index + 1}'">
                <img class="image-back" src="${img.back}" 
                     alt="Paisaje transformado ${index + 1}"
                     onerror="this.src='https://via.placeholder.com/300x200/e74c3c/ffffff?text=Paisaje+Transformado+${index + 1}'">
            </div>
            <p>${img.texto}</p>
        </div>
    `).join('');
    
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="gallery">
            <h2>Galería de Transformación de Paisajes</h2>
            <p style="text-align: center; margin-bottom: 20px; color: #666;">
                Pasa el cursor sobre cada imagen para verla transformarse en otro paisaje
            </p>
            <div class="image-grid">${galeriaHTML}</div>
        </section>
    `;
}

function mostrarAccesoDenegado(edad) {
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="access-denied">
            <h2>Acceso Restringido</h2>
            <div class="denied-message">
                <p>Lo sentimos, no cumples con la edad mínima requerida para acceder a esta galería.</p>
                <p>Debes ser mayor de 20 años para ver las imágenes.</p>
                <p>Tu edad ingresada: <strong>${edad || 'No especificada'}</strong></p>
                <p>Por favor, regresa cuando cumplas la edad requerida.</p>
            </div>
        </section>
    `;
}

// =============================================
// FUNCIONES PARA CALCULADORA (pagina3.html)
// =============================================

function inicializarCalculadora() {
    // Mostrar mensaje de bienvenida personalizado
    if(usuarioNombreCompleto) {
        mostrarMensajeBienvenida('user-display-calculator', usuarioNombreCompleto);
    }
}

// Función para sumar
function calcularSuma() {
    const num1 = obtenerNumero("primer número para sumar");
    const num2 = obtenerNumero("segundo número para sumar");
    
    if(num1 !== null && num2 !== null) {
        const resultado = num1 + num2;
        mostrarResultado(`El resultado de ${num1} + ${num2} = ${resultado}`);
    }
}

// Función para dividir
function calcularDivision() {
    const num1 = obtenerNumero("primer número para dividir (dividendo)");
    const num2 = obtenerNumero("segundo número para dividir (divisor)");
    
    if(num1 !== null && num2 !== null) {
        if(num2 === 0) {
            mostrarResultado("Error: No se puede dividir entre cero.");
            return;
        }
        const resultado = num1 / num2;
        mostrarResultado(`El resultado de ${num1} ÷ ${num2} = ${resultado.toFixed(2)}`);
    }
}

// Función para promediar
function calcularPromedio() {
    const num1 = obtenerNumero("primer número para promediar");
    const num2 = obtenerNumero("segundo número para promediar");
    
    if(num1 !== null && num2 !== null) {
        const resultado = (num1 + num2) / 2;
        mostrarResultado(`El promedio de ${num1} y ${num2} = ${resultado.toFixed(2)}`);
    }
}

// Función auxiliar para obtener números
function obtenerNumero(mensaje) {
    const input = prompt(`Ingresa el ${mensaje}:`);
    const numero = parseFloat(input);
    
    if(isNaN(numero)) {
        alert("Por favor ingresa un número válido.");
        return null;
    }
    
    return numero;
}

// Función para mostrar resultados en la calculadora (se mantienen hasta nueva operación)
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    if(resultadoDiv) {
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
        // Los resultados se mantienen permanentemente hasta que se realice una nueva operación
    }
}

// =============================================
// INICIALIZACIÓN AUTOMÁTICA
// =============================================

// Detectar en qué página estamos y ejecutar las funciones correspondientes
document.addEventListener('DOMContentLoaded', function() {
    mostrarMensajeCarga();
    
    const currentPage = window.location.pathname;
    
    // Verificar si estamos en la página principal
    if(currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) {
        setTimeout(inicializarPaginaPrincipal, 500);
    }
    
    // Verificar si estamos en la galería
    if(currentPage.includes('pagina2.html')) {
        setTimeout(inicializarGaleria, 500);
    }
    
    // Verificar si estamos en la calculadora
    if(currentPage.includes('pagina3.html')) {
        setTimeout(inicializarCalculadora, 500);
    }
});
