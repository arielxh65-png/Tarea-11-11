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
        mostrarNombreUsuario(usuarioNombreCompleto);
    } else {
        alert("¡Bienvenido! Esperamos que disfrutes de nuestro sitio web.");
    }
}

function mostrarNombreUsuario(nombreCompleto) {
    const userDisplay = document.getElementById('user-display');
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
        const userDisplay = document.getElementById('user-display-gallery');
        if(userDisplay) {
            userDisplay.innerHTML = 
                `<div class="welcome-message">¡Bienvenido ${usuarioNombreCompleto} a la Galería!</div>`;
        }
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
            front: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
            texto: 'Teclado → TV Smart'
        },
        { 
            front: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
            texto: 'Mouse → Microondas'
        },
        { 
            front: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
            texto: 'Monitor → Batidora'
        },
        { 
            front: 'https://images.unsplash.com/photo-1584670747417-594a9412fba5?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
            texto: 'Audífono → Licuadora'
        },
        { 
            front: 'https://images.unsplash.com/photo-1600086827875-43a73c5d3c3a?w=300&h=200&fit=crop',
            back: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop',
            texto: 'Joystick → Horno'
        }
    ];
    
    const galeriaHTML = imagenes.map((img, index) => `
        <div class="image-item">
            <div class="image-container">
                <img class="image-front" src="${img.front}" 
                     alt="Imagen frontal ${index + 1}"
                     onerror="this.src='https://via.placeholder.com/300x200/3498db/ffffff?text=Dispositivo+${index + 1}'">
                <img class="image-back" src="${img.back}" 
                     alt="Imagen trasera ${index + 1}"
                     onerror="this.src='https://via.placeholder.com/300x200/e74c3c/ffffff?text=Electrodoméstico+${index + 1}'">
            </div>
            <p>${img.texto}</p>
        </div>
    `).join('');
    
    document.getElementById('contenido-pagina').innerHTML = `
        <section class="gallery">
            <h2>Galería de Transformación</h2>
            <p style="text-align: center; margin-bottom: 20px; color: #666;">
                Pasa el cursor sobre cada imagen para verla transformarse
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
        const userDisplay = document.getElementById('user-display-calculator');
        if(userDisplay) {
            userDisplay.innerHTML = 
                `<p class="user-greeting">¡Bienvenido <span class="user-name">${usuarioNombreCompleto}</span> a la Calculadora!</p>`;
        }
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
            alert("Error: No se puede dividir entre cero.");
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

// Función para mostrar resultados en la calculadora
function mostrarResultado(mensaje) {
    const resultadoDiv = document.getElementById('resultado');
    if(resultadoDiv) {
        resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
        
        // Limpiar el resultado después de 5 segundos
        setTimeout(() => {
            resultadoDiv.innerHTML = '';
        }, 5000);
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
