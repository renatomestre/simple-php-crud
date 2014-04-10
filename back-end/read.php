<?php
    require 'conn.php';

    $query = "select * from contact";

    if ( isset($_GET['id']) ) {
        $query .= ' where id = ' . $_GET['id'];
    }

    try {
        
        $statement = $db->prepare($query);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);
        $json = json_encode($results);

    } catch(PDOException $e) {
        
        echo 'An error has ocurred: '.$e->getMessage();
    }
    
    echo $json;
?>