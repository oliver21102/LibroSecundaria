


$(document).ready(function(e){ 
 //console.log(codigoBook);
 
 $("#enviar").on("click",function(){
 //alert("asdasdasd");
 /*cambios */
 var codigoCliente;
  if($("#codigoisbn").val()==""){

  mensajeCamposVacios();
	 return;
  }
  /*cambios */
  var codigoisbn=$("#codigoisbn").val();
  try{
  codigoCliente=codigoBook;
  }catch(err){
  // console.log("el codigo nio exiotes");
  }
	 
 
   if(!navigator.onLine){
    swal("Error...", "Error de conexión", "error");
        return;
    }

/*cambios */
	 var url = "http://descargalibro.bienaventuranza.org/verificacion.php?jsoncallback=?"; 
   /*cambios */
	 
	 $.getJSON(url,{codigoI:codigoisbn,codCli:codigoCliente}).done(function(data){ 
    console.log(data.respuesta);
      
     if(data.respuesta=="correcto"){
     mostrarMensajeExitoso(codigoCliente);
     }else{
   mensajeFalloValidacion();
     }

  /*    */
  }).fail(function( jqxhr, textStatus, error ) {
  //var err = textStatus + ', ' + error;
  //console.log( "Request Failed: " + err);
 mensajeFalloValidacion();

});	
 })





function  mostrarMensajeExitoso(c){  
  window.location="../update/mensaje.html?v="+c+"";
}

function mensajeFalloValidacion(){
	swal("Error...", "Código inválido", "error");
}
/*cambios */
function mensajeCamposVacios(){
  swal({ 
title: "Introduzca el código",
text: "Campos vacios",
timer: 3000,
showConfirmButton: false 
});
}
/*cambios */

})