import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAcS74zdZX179BbttsAkq1niKzwDM0zHvA",
    authDomain: "appsorteo-9c1f8.firebaseapp.com",
    databaseURL: "https://appsorteo-9c1f8-default-rtdb.firebaseio.com",
    projectId: "appsorteo-9c1f8",
    storageBucket: "appsorteo-9c1f8.firebasestorage.app",
    messagingSenderId: "521986582503",
    appId: "1:521986582503:web:25f5b4b1c875c34a743f42",
    measurementId: "G-HT26BGEDYT"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Modal
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');

// Evento para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Capturar el formulario y enviar datos a Firebase
document.getElementById('registro-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('telefono').value;

    const nuevoRegistroRef = push(ref(database, 'registros/'));
    set(nuevoRegistroRef, {
        nombre: nombre,
        direccion: direccion,
        ciudad: ciudad,
        telefono: telefono
    })
    .then(() => {
        modalMessage.textContent = '¡Te haz registrado con exito, Mucha suerte y Felices fiestas!';
        modal.style.display = 'flex';
        document.getElementById('registro-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        modalMessage.textContent = 'Hubo un error al registrarse.';
        modal.style.display = 'flex';
    });
});
