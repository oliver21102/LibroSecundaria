
var dimension;
var cantidad;
var seleccionadas;
var audio;
 function inicio(){
 ajustar();
  var vcuadroV=document.getElementsByClassName("cuadroV");
  var vcuadroF=document.getElementsByClassName("cuadroF");
  inciarEventos(vcuadroV);
   inciarEventos(vcuadroF);
    dimension= document.getElementsByClassName("cuadroV").length;
   cantidad=0;
  seleccionadas=0;
  sonidoFondo();
 }



 function inciarEventos(ar){
   for(var i=0; i<ar.length; i++){
      $("#"+ar[i].id).on("click",verificar);
      $("#"+ar[i].id).on("touchstart",verificar);
   }

   }
  function 	ajustar(){
    var alto=$(window).height();
  var ancho=$(window).width();
     ancho=(ancho+alto)/2;
   var tamanio= ancho/45;
  
  var vresp= document.getElementsByClassName("respuestas");
  var vcuadroV=document.getElementsByClassName("cuadroV");
  var vcuadroF=document.getElementsByClassName("cuadroF");
  var vtexto=document.getElementsByClassName("texto");

   
  /////////////////////

  //////////////
  for(var t=0; t<vtexto.length; t++){
  	 vtexto[t].style.fontSize=""+tamanio+"pt";
  }

  $("#consigna").css("fontSize",""+tamanio+"pt");
   var kk=23;
   for(var i=0; i<vresp.length; i++){
   	vresp[i].style.fontSize=""+tamanio+"pt";
    vresp[i].style.left="28%";
    vresp[i].style.top=""+kk+"%";

     /////////////
    vcuadroF[i].style.left="12%";
    vcuadroF[i].style.top=""+(kk)+"%";

    vcuadroV[i].style.left="18%";
    vcuadroV[i].style.top=""+(kk)+"%";

     /////////
    kk+=20;
   }
   console.log(seleccionadas);
  }



  

function verificar(e){
   seleccionadas++;
   var op=$(this).attr("id");
   if(op=="f1" || op=="f2" || op=="v3" || op=="f4"){
    console.log("pasooo");
      pintarBien(this);
      cantidad++;  
      sonidoBien();
      deshabilitar("#"+op);
      bloqContrario($(this).attr("id"));
   var ar= document.getElementsByClassName($(this).attr("class"));    
    var pos=getPos($(this).attr("id"),ar);
   }else{
    if(op=="v1" || op=="v2" || op=="f3" || op=="v4"){
      deshabilitar("#"+op);
     pintarMal(this);
     sonidoMal();
     bloqContrario($(this).attr("id"));
    }
   }
   console.log("selec "+seleccionadas);
    if(seleccionadas==dimension){

       if(cantidad==dimension){
        pasarSiguiente();
        return;
      }
      intentaloDeNuevo();
    }
  

 }
 
function intentaloDeNuevo(){
   
   $("#intentalo").on("click",inciar);
   $("#intentalo").on("touchstart",inciar);

  $("#intentalo").css("visibility","visible");
  $("#intentalo").css("zIndex","4");
}


function inciar(){
 window.location="pag82.html";

}


function getPos(id,ar){
  for(var t=0; t<ar.length; t++ ){
   if(ar[t].id==id){
     return t;
   }

  }
  return -1;
}
function esVerdader(idOb){
 return $("#"+idOb).attr("class")=="cuadroV";
}
function esFalso(idOb){
  return $("#"+idOb).attr("class")=="cuadroF";
}
function bloqContrario(ob){ 
 
    if(esVerdader(ob)){
    var ar= document.getElementsByClassName($("#"+ob).attr("class"));    
  var pos=getPos(ob,ar);
  var vfal=document.getElementsByClassName("cuadroF");
  var  vid= "#"+vfal[pos].id+"";
 // console.log(vid);
 
   deshabilitar(vid);
      return ;  
    }else{
  
      if(esFalso(ob)){
      var ar2= document.getElementsByClassName($("#"+ob).attr("class"));    
  var pos2=getPos(ob,ar2);
  var vVer=document.getElementsByClassName("cuadroV");
  var  vid2= "#"+vVer[pos2].id+"";
  //console.log(vid2);
   deshabilitar(vid2);

  
      }
      return ;
    }

}


function deshabilitar(ob){
   $(ob).unbind("click",verificar);
   $(ob).unbind("touchstart",verificar);
}


function habilitar(ob){
  $(ob).on("click",verificar);
  $(ob).on("touchstart",verificar);

}

function pasarSiguiente(){
 ///setTimeout(function (){  window.location="dos.html"; },2000);
 $("#flecha").css("visibility","visible");
 silenciar();
}



function sonidoBien(){
 var audio = document.createElement("audio");
 
    audio.src = "./sonido/bien.mp3";
    audio.play();
}

function sonidoMal(){
 var audio = document.createElement("audio");
 
    audio.src = "./sonido/mal.mp3";
    audio.play();
} 

function pintarBien(ob){
 $(ob).css("backgroundColor","#10C93E"); 
}

function pintarMal(ob){

 $(ob).css("backgroundColor","#FF0000");
}


function sonidoFondo(){
   audio = document.createElement("audio");
 
    audio.src = "./sonido/sonidoF.mp3";
    audio.play();
}

function silenciar(){

 audio.pause();
}