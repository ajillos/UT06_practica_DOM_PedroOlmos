var list=document.getElementById('list')
var AE=document.getElementById('AñadirElemento');

function añadir(){
    list.innerHTML=list.innerHTML+'<li>'+AE.value;
    AE.value="";
}
