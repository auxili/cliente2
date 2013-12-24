/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


i=1;
function inicia(){
    v = setInterval("cambiafoto()", 1000);
  
}
function cambiafoto(){
	mifoto = i + ".jpg";
	document.getElementById("foto").src=mifoto;
	i++;
	if (i>4) i=1;
}
function parafoto(){
	clearInterval(v);
}
