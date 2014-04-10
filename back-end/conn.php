<?php

$database_name = 'php-crud';

$host = "mysql:host=127.0.0.1;dbname=".$database_name;
$user = 'root';
$password = '';

try{

	$db = new PDO($host, $user, $password);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
	
	echo 'Error: '.$e->getMessage();
}