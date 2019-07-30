var rev = document.getElementById('revista')
rev.addEventListener("click", formu);
var lib = document.getElementById('libro')
lib.addEventListener("click", formu2);
var pag = document.getElementById('paginaWeb')
pag.addEventListener("click", formu3);
var per = document.getElementById('periodico')
per.addEventListener("click", formu4);
var ent = document.getElementById('mat')
ent.addEventListener("click", formu5);



function cita(){

  c1 = document.getElementById('v1')
  c2 = document.getElementById('v2')
  c3 = document.getElementById('v3')
  c4 = document.getElementById('v4')
  c5 = document.getElementById('v5')
  c6 = document.getElementById('v6')
  c7 = document.getElementById('v7')

  var citacompleta = "Su cita es: " + c1.value + "," + " " + c2.value + "." + " " + "(" + c3.value + ")" + "." + " " + c6.value + "." + " " + "<i>" + c4.value + "</i>" + "," + " " + "Vol" + " " + "<i>" + c5.value + "</i>" + ","  + " " + "p" + ". " + c7.value + ". ";
  document.getElementById('cont1').innerHTML=citacompleta;
}

function cita2(){
  c11 = document.getElementById('v11')
  c22 = document.getElementById('v22')
  c33 = document.getElementById('v33')
  c44 = document.getElementById('v44')
  c55 = document.getElementById('v55')
  c66 = document.getElementById('v66')

  var citacompleta = "Su cita es: " + c11.value + "," + " " + c22.value + "." + " " + "(" + c33.value + ")" + "." + " " +  "<i>" + c66.value + "</i>" + "." + " " + c55.value + ":"  + " " + c44.value + ". ";
document.getElementById('cont2').innerHTML=citacompleta;
}

  function cita3(){
    c11 = document.getElementById('v111')
    c22 = document.getElementById('v222')
    c44 = document.getElementById('v444')
    c33 = document.getElementById('v333')
    c55 = document.getElementById('v555')
    c66 = document.getElementById('v666')
    var citacompleta = "Su cita es: " + c11.value + "," + " " + c22.value + "." + " " + "(" + c44.value + ")" + "." + " " + "<i>" + c33.value + "</i>" + "." + " " + "Recuperado el  " + c55.value + ","  + " " + "del sitio web" + ": "+ " " + c66.value + ". ";
    document.getElementById('cont3').innerHTML=citacompleta;}

function cita4(){
  c11 = document.getElementById('v1111')
  c22 = document.getElementById('v2222')
  c33 = document.getElementById('v3333')
  c44 = document.getElementById('v4444')
  c55 = document.getElementById('v5555')
  c66 = document.getElementById('v6666')
  var citacompleta = "Su cita es: " + c11.value + "," + " " + c22.value + "." + " " + "(" + c55.value + ")" + "." + " " + c33.value + "." + " "  + "<i>" + c66.value + "</i>" + ","  + " " + "p" + ". "+ " " + c44.value + ". ";
  document.getElementById('cont4').innerHTML=citacompleta;}


  function cita5(){
    c11 = document.getElementById('v1111')
    c22 = document.getElementById('v2222')
    c33 = document.getElementById('v3333')
    c44 = document.getElementById('v4444')
    c55 = document.getElementById('v5555')
    c66 = document.getElementById('v6666')
    var citacompleta = "Su cita es: " + c11.value + "," + " " + c22.value + "." + " " + "(" + c55.value + ")" + "." + " " + c33.value + "." + " "  + c66.value + ","  + " " + "p" + ". "+ " " + c44.value + ". ";
    document.getElementById('cont5').innerHTML=citacompleta;}

function formu(){
var frm =document.getElementById('forma');
if(frm.style.display=="none"){frm.style.display="block"}
else
if(frm.style.display=="block"){frm.style.display="none"}


}

function formu2(){
var frm2 = document.getElementById('formb');
if(frm2.style.display=="none"){frm2.style.display="block"}
else
if(frm2.style.display=="block"){frm2.style.display="none"}
}

function formu3(){
var frm3 = document.getElementById('formc');
if(frm3.style.display=="none"){frm3.style.display="block"}
else
if(frm3.style.display=="block"){frm3.style.display="none"}
var rev4 = document.getElementById('send3')
rev4.addEventListener("click", cita3);
}

function formu4(){
var frm4 = document.getElementById('formd');
if(frm4.style.display=="none"){frm4.style.display="block"}
else
if(frm4.style.display=="block"){frm4.style.display="none"}
var rev5 = document.getElementById('send4')
rev5.addEventListener("click", cita4);
}

function formu5(){
var frm2 = document.getElementById('forme');
if(frm2.style.display=="none"){frm2.style.display="block"}
else
if(frm2.style.display=="block"){frm2.style.display="none"}
}
