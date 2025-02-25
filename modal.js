function mostrarModal(textoModal){
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.position = 'fixed';
    modal.style.backgroundColor = "green";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.borderRadius = "10px";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "30px";
    modal.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.5)";
    modal.style.color = "yellow";
    modal.style.zIndex = 1000;
    modal.innerHTML = textoModal;
    modal.innerHTML += "<br><button onclick='cerrarModal()'>Cerrar</button>";
    document.body.appendChild(modal);
}

function cerrarModal(){
    document.body.removeChild(modal);
}