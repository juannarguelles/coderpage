//**Metodo ready**//
$(document).ready(function(){
  //**Metodo click**//
  $("#submit").click(function(){
    let nombre = $("#name").val();
    let email = $("#email").val();
    let mensaje = $("#mensaje").val();
    
    if(nombre.length == "")
    {
      $("#p1").text("Por favor ingrese su nombre");
      $("#name").focus();
      return false;
    }

    else if(email.length == ""){
      $("#p2").text("Por favor ingrese su email");
      $("#email").focus();
      return false;
    }

    else if(mensaje.length == ""){
      $("#p3").text("Por favor ingrese su mensaje");
      $("#mensaje").focus();
      return false;
    }

    else{
      return true
      /* let acceso = confirm("Su mensaje se envío correctamente");
      if( acceso == true)
      {
        window.location.href = '/index.html';
        return true;
      }
      else{
        return false;
      } */
    }
  });
});

