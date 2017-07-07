
 
var alto;
  var ancho;
   var tamanio;
function inicio(){
 ocultarTapa();
 sonidoFondo();
 reinicio();
}
  

var esTouch=false;
function reinicio(){
 console.log("reini");
    ajustar();
var vcirculo= document.getElementsByClassName("circulo"); 
var vopciones= document.getElementsByClassName("opciones"); 
 desordenar(vcirculo,vopciones);
 

 var vpanelBien=document.getElementById("panelBien");
  var vpanelMal=document.getElementById("panelMal");
vpanelBien.style.top=parseInt(vopciones[0].style.top)-4+"%"; 
  vpanelMal.style.top= parseInt(vopciones[1].style.top) -5+"%"; 
}


function ocultarTapa(){
   $("#capa").css("visibility","hidden");
}
function mostrarTapa(){
     $("#capa").css("visibility","visible");
}

function ajustar(){ 
   alto=$(window).height();
   ancho=$(window).width();
  tamanio= ancho/45;  
   
    var vindice=document.getElementsByClassName("subindice");
     for(var ii=0; ii<vindice.length; ii++){
        vindice[ii].style.fontSize=""+(tamanio*0.8)+"pt";
    }
  var vcirculo= document.getElementsByClassName("circulo"); 
  var vopciones= document.getElementsByClassName("opciones");  
  var k=33;

  $("#pregunta2").css("fontSize",""+tamanio*0.8+"pt");
    $("#pregunta3").css("fontSize",""+tamanio*0.8+"pt");

  for(var t=0; t<vcirculo.length;  t++){
     vcirculo[t].style.top=""+(k+6)+"%";
     vcirculo[t].style.left="40%";
     vopciones[t].style.left="5%";
     vopciones[t].style.top=""+k+"%";
     vopciones[t].style.fontSize=""+tamanio+"pt";
     k+=18;
  }
  

  var vpreg= document.getElementById("pregunta"); 
   $("#consigna").css("fontSize",""+(tamanio)+"pt");
  vpreg.style.fontSize=""+(tamanio*0.8)+"pt"; 
  var vopciones= document.getElementsByClassName("opciones");  

  var txtEst=document.getElementsByClassName("textoE");  

  for(var tt=0; tt<txtEst.length; tt++){
       txtEst[tt].style.fontSize=""+(tamanio*0.6)+"px";
  }
  $(".circulo").on("click",function(e){ verificar(e)});
  $(".circulo").on("touchstart",function (e){
     esTouch=true;
    verificar(e);
 });
document.getElementById("panelBien").style.top=parseInt(vopciones[0].style.top)-4+"%"; 
}



 
function reubicar(obj){
  var vpanelMal=document.getElementById("panelMal");
   var posTop=document.getElementById($(obj).attr("id")).style.top;
  vpanelMal.style.top=parseInt(posTop)-10+"%";
}

function volverVisible(ob){
  $("#"+ob).css("visibility","visible");
}
function volverInVisible(ob){
  $("#"+ob).css("visibility","hidden");
}

function verificar(e){

 if($("#"+e.target.id+"").attr("id")=="p1"){

  mostrarTapa();
  deshabilitarHover();  //añasido
  pintar("#"+e.target.id+"");

removerClassNoHover();  //añadido
  deshabilitarDemas();

  sonidoBien();
   volverVisible("panelBien");
   setTimeout(function(){
    var aaa= $("#flecha").parent().attr("alt");
   silenciar();
     if(aaa=="6"){
      setTimeout(function(){
   window.location="fin.html";       
      },1000);
      return;
     }
   
   $("#flecha").css("visibility","visible");
   }, 1000);
 }else{
   mostrarTapa();
  sonidoMal();
 pintarMal("#"+e.target.id+"");
  reubicar("#"+e.target.id+"");
   volverVisible("panelMal");
  setTimeout(function(){
    var vcirculo=document.getElementsByClassName("circulo");
    resetearCirculos(vcirculo);
    ocultarTapa();
  $("#circuloRojo").css("visibility","hidden");
  var vcirculo= document.getElementsByClassName("circulo");
  volverInVisible("panelMal");
    reinicio();}, 2000);
 }
}

function resetearCirculos(ar){
for(var i=0; i<ar.length; i++){
      ar[i].style.border="3px solid #000000";
      ar[i].style.backgroundColor="#ffffff";
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
  }
}

function removerClassNoHover(){
  if(esTouch){
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
 
function pintar(obId){
    $(obId).css("backgroundColor","#08A635"); 
}


function pintarMal(obId){

   $(obId).css("backgroundColor","#FF0000");
}

function deshabilitarDemas(){
deshabilitarClick();
} 
 

function deshabilitarClick(){
   $(".circulo").unbind("click",function(e){verificar(e)});
   $(".circulo").unbind("touchstart",function (e){verificar(e)});
}
function habilitarClick(){
   $(".circulo").on("click",function(e){verificar(e)});
   $(".circulo").on("touchstart",function(e){ 
    verificar(e);});
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
  console.log("desordenno");
}


   
function sonidoFondo(){
  var audio=document.getElementById("sonido"); 
   audio.play();
}

function silenciar(){
    var audio=document.getElementById("sonido"); 

    audio.pause();
}
