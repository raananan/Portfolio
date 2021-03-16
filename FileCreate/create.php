><?php

$get_text=$_POST['file'];

$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
fwrite($myfile, $get_text);
fclose($myfile);

?>