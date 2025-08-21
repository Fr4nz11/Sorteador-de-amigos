// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if(nombre == ''){
        alert('Por favor, ingrese un nombre válido')
    }else{
        amigos.push(nombre);
        document.getElementById("amigo").value='';
        mostrarLista();
    }
}

function mostrarLista(){
    //Seleccionamos la lista del HTML
    let lista = document.getElementById("listaAmigos");
    
        //limpiamos la lista
        lista.innerHTML = '';
        
        //Recorremos el array de amigos
        for(let i = 0; i < amigos.length; i++){
            //Agregamos un li por cada nombre (list item)
            lista.innerHTML += '<li>' + amigos[i] + '</li>';
        }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert('No hay nombres para sortear')
        return;
    }

    //Si hay amigos, sale del if y seguimos acá
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length) ];
    alert(`El amigo sorteado es ${amigoSorteado}`)
}