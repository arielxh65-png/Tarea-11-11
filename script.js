
// =============================
// VARIABLES Y UTILIDADES
// =============================
let usuarioNombreCompleto = localStorage.getItem("usuario") || "";

// Mostrar mensaje de carga
function mostrarMensajeCarga() {
  console.log("Página cargada correctamente");
}

// Mostrar mensaje de bienvenida genérico
function mostrarBienvenidaPagina(elementId, titulo) {
  if (!usuarioNombreCompleto) return;
  const contenedor = document.getElementById(elementId);
  if (contenedor) {
    contenedor.innerHTML = `
      <div class="welcome-message">
        <h2>¡Bienvenido, ${usuarioNombreCompleto}, a la ${titulo}!</h2>
      </div>
    `;
  }
}

// =============================
// PÁGINA PRINCIPAL
// =============================
function inicializarPaginaPrincipal() {
  if (!usuarioNombreCompleto) {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Por favor, ingresa tu apellido:");
    if (nombre && apellido) {
      usuarioNombreCompleto = `${nombre} ${apellido}`;
      localStorage.setItem("usuario", usuarioNombreCompleto);
    }
  }

  alert(`¡Hola ${usuarioNombreCompleto || "visitante"}! Bienvenido/a.`);
  mostrarBienvenidaPagina("user-display", "Página Principal");
}

// =============================
// GALERÍA
// =============================
function inicializarGaleria() {
  mostrarBienvenidaPagina("user-display-gallery", "Galería de Imágenes");
  verificarEdadGaleria();
}

function verificarEdadGaleria() {
  const edad = parseInt(prompt("Por favor ingresa tu edad:"));
  const cont = document.getElementById("contenido-pagina");
  if (!cont) return;

  if (edad > 20) {
    mostrarGaleria();
    alert("¡Acceso concedido! Disfruta de la galería.");
  } else {
    cont.innerHTML = `
      <section class="access-denied">
        <h2>Acceso Restringido</h2>
        <p>Debes ser mayor de 20 años para ver las imágenes.</p>
      </section>
    `;
    alert("Eres menor de 20 años. Acceso denegado.");
  }
}

function mostrarGaleria() {
  const imagenes = [
    ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'],
    ['https://images.unsplash.com/photo-1475924156734-496f6cac6ec1', 'https://images.unsplash.com/photo-1426604966848-d7adac402bff'],
    ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e', 'https://images.unsplash.com/photo-1501854140801-50d01698950b'],
    ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', 'https://images.unsplash.com/photo-1519681393784-d120267933ba'],
    ['https://images.unsplash.com/photo-1439066615861-d1af74d74000', 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891']
  ];

  const html = imagenes.map(([front, back], i) => `
    <div class="image-item">
      <div class="image-container">
        <img class="image-front" src="${front}?w=300&h=200&fit=crop" alt="Imagen ${i+1}">
        <img class="image-back" src="${back}?w=300&h=200&fit=crop" alt="Imagen ${i+1}B">
      </div>
    </div>
  `).join("");

  document.getElementById("contenido-pagina").innerHTML = `
    <section class="gallery">
      <h2>Galería de Transformación de Paisajes</h2>
      <p style="text-align:center;color:#666;">Pasa el cursor sobre una imagen para transformarla</p>
      <div class="image-grid">${html}</div>
    </section>
  `;
}

// =============================
// CALCULADORA
// =============================
function inicializarCalculadora() {
  mostrarBienvenidaPagina("user-display-calculator", "Calculadora");
}

function calcular(tipo) {
  const n1 = parseFloat(prompt("Ingresa el primer número:"));
  const n2 = parseFloat(prompt("Ingresa el segundo número:"));
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor ingresa números válidos.");
    return;
  }

  let resultado;
  switch (tipo) {
    case "suma": resultado = n1 + n2; break;
    case "div": resultado = n2 === 0 ? "Error: división por cero" : (n1 / n2).toFixed(2); break;
    case "prom": resultado = ((n1 + n2) / 2).toFixed(2); break;
  }

  document.getElementById("resultado").innerHTML = `<p>Resultado: ${resultado}</p>`;
}

// =============================
// INICIALIZACIÓN GLOBAL
// =============================
document.addEventListener("DOMContentLoaded", () => {
  mostrarMensajeCarga();
  const page = location.pathname;

  if (page.includes("index.html") || page.endsWith("/")) inicializarPaginaPrincipal();
  else if (page.includes("pagina2.html")) inicializarGaleria();
  else if (page.includes("pagina3.html")) inicializarCalculadora();
});
