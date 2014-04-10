<?php
	require 'conn.php';

	if ( isset($_GET['id']) ) {

		$query = "delete from contact where id = :id";

		try {
			
			$statement = $db->prepare($query);

			$statement->bindParam(':id', $_GET['id']);

			$statement->execute();

			$response = array('status' => true, 'message' => "Success on delete");

			echo json_encode($response);

		} catch(PDOException $e) {

			$response = array('status' => false, 'message' => $e->getMessage());

			echo json_encode($response);
		}
	}
	else {

		$response = array('status' => false, 'message' => "Missing ID value");

		echo json_encode($response);
	}
?>