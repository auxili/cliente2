<?php

sleep(0); //retardo la carga de la pagina 5 segundos para ver la animacion
//$n=$_GET["numero"];
$n=$_POST["numero"];
echo '<h4>La tabla del:</h4>
			<form action="multis.php" method="post">
			Numero: <input type="text" name="numero"/>
			<input type="submit" value="Ver tabla"	/>
			</form>';
echo "Tabla del $n<br><br><br>";
if($n == "") echo "no se que multi quieres hacer. Elige un numero.";
else{
	for($i=0;$i<=10;$i++)
		echo "$n x $i = ".($n*$i)."<br>";
}
?>