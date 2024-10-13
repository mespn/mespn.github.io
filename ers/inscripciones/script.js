function mostrarDatos(){
    try{
        limpiarFormato()
        verificarDocIdentidad()
    }
    catch (error){
        if (error.code == 1){
            // Tipo de documento no seleccionado
            resaltarError("field-tipo-documento","tipo-obligatorio");
        }
        else if (error.code == 2){
            // Numero de documento no llenado
            resaltarError("field-numero-doc", "numero-doc-obligatorio")
        }
    
        return
    }

    document.getElementById("datos-participante").classList.remove("hidden")
    document.getElementById("boton-id").classList.add("hidden")
    document.getElementById("doc-identidad").classList.remove("justify-self-end")
    document.getElementById("doc-identidad").classList.add("justify-self-center")
}

function verificarDocIdentidad(){
    let verificado = false;
    let tipoDocumento = document.querySelector('input[name="tipo-documento"]:checked')
    let err = new Error("datos incompletos");
    
    if (tipoDocumento == null){
        err.code = 1
        throw(err)
    }
    tipoDocumento = tipoDocumento.value
    
    let numDocumento = document.getElementById("num-doc").value
    if (numDocumento == ""){
        err.code = 2
        throw(err)
    }

    return validacionDocIdentidad(tipoDocumento, numDocumento)
}

function validacionDocIdentidad(tipo, numero){
    return true;
}

function resaltarError(id_campo, id_label){
    let field_tipo = document.getElementById(id_campo)
    field_tipo.classList.add("border-2","border-rose-500", "resalto-error")
    let label = document.getElementById(id_label)
    label.classList.remove("hidden")
    label.classList.add("label-error")
}

function limpiarFormato(){
    let errores = document.getElementsByClassName("resalto-error")
    for (let i = 0; i < errores.length; i++){
        errores[i].classList.remove("border-2","border-rose-500", "resalto-error")
    }

    let labels = document.getElementsByClassName("label-error")
    for (let i = 0; i < labels.length; i++){
        labels[i].classList.add("hidden")
        labels[i].classList.remove("label-error")
    }
}

function selected(element){
    elementoPadre = element.parentElement.parentElement
    if (element.checked){
        elementoPadre.classList.remove("bg-blue-400")
        elementoPadre.classList.add("bg-green-400")
        elementoPadre.classList.remove("hover:bg-blue-600")
        elementoPadre.classList.add("hover:bg-green-600")
    }
    else{
        elementoPadre.classList.remove("bg-green-400")
        elementoPadre.classList.add("bg-blue-400")
        elementoPadre.classList.remove("hover:bg-green-600")
        elementoPadre.classList.add("hover:bg-blue-600")
    }
}

function mostrarSeleccionCurso(){
    ocultarSesiones()
    let primera_fila = document.getElementsByClassName("fila-1")
    for (let i = 0; i < primera_fila.length; i++) {
        primera_fila[i].classList.add("hidden")
    }
    document.getElementById("seleccion-curso").classList.remove("hidden")
}

function ocultarSesiones(){
    console.log("ocultando")
    let sesiones = document.getElementsByClassName("sesion")
    // debugger
    for (let i = 0; i<sesiones.length; i++){
        sesiones[i].classList.add("hidden")
    }
}

function mostrarSesiones(){
    let sesiones = document.getElementsByClassName("sesion")
    // debugger
    for (let i = 0; i<sesiones.length; i++){
        sesiones[i].classList.remove("hidden")
    }
}