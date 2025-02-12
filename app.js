// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const Amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const amigoResultado = document.getElementById('resultado');

//Agregar amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre == '') {
        alert('Debe ingresar un nombre');
        return;
    } else if (Amigos.includes(nombre)) {
        alert('El amigo ya está en la lista');
        return;
    }else {
        Amigos.push(nombre);
        input.value = '';
        mostrarAmigos();
    }
}

//Mostrar amigos en la lista    
function mostrarAmigos() {
    listaAmigos.innerHTML = '';
    Amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = `${amigo}`;
        listaAmigos.appendChild(item);
    });
}

//Sortear Amigo
function sortearAmigo() {
    if (Amigos.length < 2) {
        alert('Debe ingresar al menos dos amigos');
        return;
    } 
    
    const amigoAleatorio = Math.floor(Math.random() * Amigos.length);
    amigoResultado.textContent = `Tu amigo secreto es: ${Amigos[amigoAleatorio]}`;
}