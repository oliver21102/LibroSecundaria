
function inicio(){
  $(".circulo").on("click",verificar);
  $(".circulo").on("touchstart",function (){
     
     esTouch=true;
    verificar();
 });
 ajustar();

 sonidoFondo();
}

var esTouch=false;
function ajustar(){

 var alto=$(window).height();
  var ancho=$(window).width();
   var tamanio= ancho/45;  



   
    var vindice=document.getElementsByClassName("subindice");
    
    $("#pregunta2").css("fontSize",""+tamanio*0.8+"pt");
    $("#pregunta3").css("fontSize",""+tamanio*0.8+"pt");


    for(var ii=0; ii<vindice.length; ii++){
        vindice[ii].style.fontSize=""+(tamanio*0.5)+"pt";
    }

  var vcirculo= document.getElementsByClassName("circulo"); 
  var vpreg= document.getElementById("pregunta"); 
   document.getElementById("consigna").style.fontSize=""+(tamanio*1.2)+"pt";
   //document.getElementById("consigna").style.fontSize="36pt"; 
  vpreg.style.fontSize=""+(tamanio*0.8)+"pt"; 
  var vopciones= document.getElementsByClassName("opciones");  
  var vpanelBien=document.getElementById("panelBien");
  var vpanelMal=document.getElementById("panelMal");

  var txtEst=document.getElementsByClassName("textoE");  

  for(var tt=0; tt<txtEst.length; tt++){
       txtEst[tt].style.fontSize=""+(tamanio*0.6)+"px";
  }

 
  
  var k=20;
  for(var t=0; t<vcirculo.length;  t++){
     vcirculo[t].style.top=""+(k+6)+"%";
     vcirculo[t].style.left="15%";
     vopciones[t].style.left="5%";
     vopciones[t].style.top=""+(k+3)+"%";
     vopciones[t].style.fontSize=""+tamanio+"pt";
     k+=22;
  }

  desordenar(vcirculo,vopciones);
 /*
  $("#intentalo").on("click",volverEmpezar);
  $("#intentalo").on("touchstart",function (){
  volverEmpezar();
  });
*/
 

  vpanelBien.style.top=parseInt(vopciones[0].style.top)-2+"%"; 
  vpanelMal.style.top= parseInt(vopciones[1].style.top) -2+"%";
}



function volverEmpezar(){
  window.location="pag69.html";
}




 
function reubicar(obj){
  var vpanelMal=document.getElementById("panelMal");
   var posTop=document.getElementById($(obj).attr("id")).style.top;
  vpanelMal.style.top=parseInt(posTop)-6+"%";
}


function volverVisible(ob){
  $("#"+ob).css("visibility","visible");
}
function volverInVisible(ob){
  $("#"+ob).css("visibility","hidden");
}

function verificar(){
    
 if($(this).attr("id")=="p1"){
  deshabilitarHover();  //añasido
  pintar(this);

removerClassNoHover();  //añadido
  deshabilitarDemas();

  sonidoBien();
   volverVisible("panelBien");
   setTimeout(function(){
    var aaa= $("#flecha").parent().attr("alt");
   silenciar();
     if(aaa=="6"){
    //  window.location="fin.html";
    $("#intentalo").css("visibility","visible");
   
      return;
     }
   
   $("#flecha").css("visibility","visible");
   }, 1000);
 }else{
  
  deshabilitarHover();  //añadido
  pintarMal(this);
  reubicar(this);
  sonidoMal();

    volverVisible("panelMal");
   deshabilitarDemas();
  setTimeout(function(){
    removerClassNoHover();// añadido
    var ar1=document.getElementsByClassName("circulo");
    var ar2=document.getElementsByClassName("opciones");
    restablecerbtn(ar1);
    desordenar(ar1,ar2);
  var panB=document.getElementById("panelBien");
  var cir=document.getElementsByClassName("circulo");
   panB.style.top=parseInt(cir[getposId("p1",cir)].style.top)-6+"%";
  // reubicar(this);
    
    volverInVisible("panelBien");
    volverInVisible("panelMal");
  },1800 );
  setTimeout(function(){
    habilitarDemas();

   
  },2100);
 }
}

function getposId(id,ar){
 for(var i=0; i<ar.length; i++){
       if(ar[i].id==id){
         return i;
       }  
 }
 console.log("nose encontro las pos getposId");
 return -1;
}

function deshabilitarHover(){

  if(esTouch){
$(".circulo").addClass("circuloNoHover");
  }
}

function removerClassNoHover(){
  if(esTouch){
    $(".circulo").removeClass("circuloNoHover");
  }
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
function  restablecerbtn(ar1){
  for(var i=0; i<ar1.length; i++){
      ar1[i].style.backgroundColor="#ffffff";
      if(esTouch){

        ar1[i].style.boxShadow="inset 0 0 0 3px #2a6e7a";
      }
 
   
  }
}
function pintar(obId){
  $(obId).css("backgroundColor","#08A635 !important");
}
function pintarMal(obId){
  $(obId).css("backgroundColor","#FF0000 !important");
}

function deshabilitarDemas(){
 
deshabilitarClick();
} 
 

function deshabilitarClick(){
  $(".circulo").unbind("click",verificar);
   $(".circulo").unbind("touchstart",verificar);
}
function habilitarClick(){
   $(".circulo").on("click",verificar);
   $(".circulo").on("touchstart",function(){ 
   

    verificar();});
}

function  habilitarDemas(){
 
 habilitarClick();
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

function desordenar(ar1,ar2){
   var numeros=ran(ar1.length);
   var posiciones1=[];
   var posiciones2=[];
   
    for( var i=0; i<ar1.length; i++){
    posiciones1.push({lf:ar1[i].style.left,tp:ar1[i].style.top});
    posiciones2.push({lf:ar2[i].style.left,tp:ar2[i].style.top});
 
 
     }

  for( var ii=0; ii<ar1.length; ii++){
   ar1[ii].style.left=posiciones1[numeros[ii]-1].lf;
  ar1[ii].style.top=posiciones1[numeros[ii]-1].tp;

  ar2[ii].style.left=posiciones2[numeros[ii]-1].lf;
  ar2[ii].style.top=posiciones2[numeros[ii]-1].tp;

 
  }

}
   
function sonidoFondo(){
  var audio=document.getElementById("sonido"); 
    audio.play();
}

function silenciar(){
    var audio=document.getElementById("sonido"); 
    audio.pause();
}
