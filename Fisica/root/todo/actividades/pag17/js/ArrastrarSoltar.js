 var dimension;
var arrastreIndex;
var audio;

 function inicio(){
  sonidoFondo();
 ajustar();
 }

 function ajustar(){
 iniciandoEventos();
 arrastreIndex=10;
var vpalabra= document.getElementsByClassName("palabra");
var vtexto =document.getElementsByClassName("TextoRespuesta");
 acomodarPalabras(vpalabra);
 acomodarEspacios();
 acomodarTexto();
      var alto=$(window).height();
  var ancho=$(window).width();
     ancho=(ancho+alto)/2;
   var tamanio= ancho/45;
 $("#consigna").css("fontSize",""+(tamanio)+"pt");
   for(var t=0; t<vpalabra.length; t++){
     vpalabra[t].style.fontSize=""+(tamanio)+"pt";

   }
   for(var t1=0; t1<vtexto.length; t1++){
      vtexto[t1].style.fontSize=""+(tamanio)+"pt";
   }

 desordenar("palabra");
 }
function acomodarTexto(){
var vespacios=document.getElementsByClassName("espacio"); 
var vtexto=document.getElementsByClassName("TextoRespuesta"); 

 for( var t=0; t<vtexto.length; t++){
  vtexto[t].style.left= parseInt(vespacios[t].style.left)+15+"%";
  vtexto[t].style.top=vespacios[t].style.top;
 }


}

function acomodarPalabras(palabra){
 var k=27;
 var izq=5;
 for(var ii=0; ii<palabra.length; ii++){
   palabra[ii].style.left=izq+"%";
   palabra[ii].style.top=k+"%";
   k=k+13;
 }
}
function acomodarEspacios(){
  var vespacios=document.getElementsByClassName("espacio");
  var k=27; var izq=25;
 for(var ii=0; ii<vespacios.length; ii++){
   vespacios[ii].style.left=izq+"%";
   vespacios[ii].style.top=k+"%";
   k=k+13;
 }
}
 

 function iniciandoEventos(){
 desordenar("palabras");
 var pal= document.getElementsByClassName('palabra');
  var esp= document.getElementsByClassName('espacio');
    for(var i=0; i< pal.length; i++){
     $("#"+pal[i].id).draggable({containment: "window",revert:true,drag:arrastrar});
      $("#"+esp[i].id).droppable({accept:"#"+ pal[i].id+"",drop:soltar});
    }

 }
   
function sonidoFondo(){
  audio = document.createElement("audio");
    audio.src = "./sonido/sonidoF.mp3";
    audio.play();
}
function silenciarSonido(){
   audio.pause();
}

 function desordenar(ar){

 var clasee= document.getElementsByClassName(ar);
 var posiciones=[];
 var numerosD=ran(clasee.length);
for( var i=0; i<clasee.length; i++){
 posiciones.push({lf:clasee[i].style.left,tp:clasee[i].style.top});
}

for( var ii=0; ii<clasee.length; ii++){
   clasee[ii].style.left=posiciones[numerosD[ii]-1].lf;
  clasee[ii].style.top=posiciones[numerosD[ii]-1].tp;
}

    
}
 
function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }


    function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=arrastreIndex;
 arrastreIndex++;
}

 


function mostrarSig(){
 document.getElementById("flecha").style.visibility="visible";
 silenciarSonido();
}



var cantidad=0;

function soltar(event,ui){
dimension= document.getElementsByClassName("palabra").length;
   var elemento=event.target.id;

 document.getElementById(ui.draggable.attr('id')).style.left=document.getElementById(elemento).style.left;
 document.getElementById(ui.draggable.attr('id')).style.top=document.getElementById(elemento).style.top;
 
  document.getElementById(ui.draggable.attr('id')).style.width= parseInt(document.getElementById(elemento).style.width)+"%";
  document.getElementById(ui.draggable.attr('id')).style.height=parseInt(document.getElementById(elemento).style.height)+"%";
  //document.getElementById(ui.draggable.attr('id')).style.zIndex=1;
 ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
    cantidad++;  sonidoMB();

  if(cantidad==dimension){
       mostrarSig();
   }
} 


function sonidoMB(){
  var audio = document.createElement("audio");
 
    audio.src = "./sonido/bien.mp3";
    audio.play();
}
