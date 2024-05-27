const form = document.querySelector('form');




// Agrega un evento de escucha para cuando se envía el formulario




form.addEventListener('submit', (e) => {
    // Si la validación del formulario no es exitosa

   
    

   // e.preventDefault(); 


    if (!validarForm()) {

        
        // Muestra un mensaje en la consola indicando que el formulario no es válido
        console.log('El formulario no es válido. Por favor, corrige los errores.');
        mensajito();
               
        // Evita que el formulario se envíe
        e.preventDefault(); // Evita que el formulario se envíe si hay errores de validación

     
        

    } else {
        // Si la validación del formulario es exitosa, muestra un mensaje en la consola
        console.log('El formulario es válido. Enviar datos...');
       
        // Aquí puedes enviar los datos del formulario o realizar otras acciones
    }


});



function validarForm(){

    
    //................True...................True
    esValido = validarCampo('password') && validarCampo('usuario'); // Validar campo de email
    
    
    return esValido
}


const validarCampo = (campo) => {
    const field = document.getElementById(campo); // Obtiene el elemento del campo mediante su ID
    const value = field.value

    if (value === '') {
        return false; // Devuelve false indicando que la validación ha fallado
    } else {
      return true; // Devuelve true indicando que la validación ha tenido éxito
    }

};

function mensajito(){
if (esValido=true){
    console.log("error")
    document.getElementById("capturah2").textContent = "Es necesario llenar todos los campos del formulario"
    document.getElementById("capturah2").style.color = "red";

    //sweet alert
    Swal.fire({
    icon: "error",
    title: "¡No se pudo enviar!",
    text: "Hay que completar todos los campos",
    footer: '<a href="#">Si no sos usuario, registrarse aquí</a>'
    });
    //alert("formulario invalido")
    }}





