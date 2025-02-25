// Array to store friends' names
let amigos = [];

// Function to add a friend
function agregarAmigo() {
    // Get the input element
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    // Validate input
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Add friend to array
    amigos.push(nombre);

    // Clear input field
    inputAmigo.value = '';

    // Update the display list
    actualizarListaAmigos();
}

// Function to update friends list display
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Clear current list
    listaAmigos.innerHTML = '';

    // Add each friend to the list
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Function to draw a random friend
function sortearAmigo() {
    // Check if there are enough friends
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo.');
        return;
    }

    // Get random index
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Get the selected friend
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Display result
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡${amigoSeleccionado} es tu amigo secreto!</li>`;
}