function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let id = $("#id").val();
    let owner = $("#owner").val();
    let capacity = $("#capacity").val();
    let category_id = $("#category_id").val();
    let name = $("#name").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#id").focus();
        return false;
    }else if( validaesVacio(owner)) {
        errores="owner vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#owner").focus();
        return false;
    }else if( validaesVacio(capacity)) {  
        errores="capacity vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#capacity").focus();
        return false;
    }else if( validaesVacio(category_id)) { 
        errores="category_id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category_id").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let owner = $("#ownerEdit").val();
    let capacity = $("#capacityEdit").val();
    let category_id = $("#category_idEdit").val();
    let name = $("#nameEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(owner)) {
        errores="owner vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ownerEdit").focus();
        return false;
    }else if( validaesVacio(capacity)) {  
        errores="capacity vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#capacityEdit").focus();
        return false;
    }else if( validaesVacio(category_id)) { 
        errores="category_id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category_idEdit").focus();
        return false;
    }else if( validaesVacio(name)) {
        errores="name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;    
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}