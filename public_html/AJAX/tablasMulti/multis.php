<?php

sleep(0); //retardo la carga de la pagina 5 segundos para ver la animacion

echo "Mandando datos desde un fichero PHP<br><br><br>";
$numero = $_GET["numero"];
for($i=0;$i<=10;$i++)
	echo "$numero x $i =".($i*$numero)." <br>";
?>