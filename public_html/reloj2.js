
t=setInterval("hora()", 1000);

function hora(){
fecha = new Date();
h = fecha.getHours();
m = fecha.getMinutes();
s = fecha.getSeconds();

hora = h  +":"+ m +":"+ s;

document.getElementById("reloj").innerHTML=hora;

}