<?php
	$json = file_get_contents("php://input");

	if(isset($json)) {

		$json = json_decode($json);

		require "conn.php";

		// Validation goes here
		// ...
		// ...
		// ...

		// Check if is updating or inserting
		$isUpdating = $json->{'id'} > 0;

		// UPDATE query
		if ($isUpdating) {
			$query = "update contact set name = :name, phone_number = :phone_number, reg_date = :reg_date where id = :id";
		}
		// CREATE query
		else {
			$query = "insert into contact (name, phone_number, reg_date) values (:name, :phone_number, :reg_date)";
		}

		try {
			$statement = $db->prepare($query);

			$statement->bindParam(':name', $json->{'name'});
			$statement->bindParam(':phone_number', $json->{'phone_number'});
			$statement->bindParam(':reg_date', $json->{'reg_date'});

			if ($isUpdating) {
				$statement->bindParam(':id', $json->{'id'});
			}

			$statement->execute();

			$response = array('status' => true, 'message' => "Success on save");

			echo json_encode($response);

		} catch(PDOException $e) {
			
			$response = array('status' => false, 'message' => $e->getMessage());

			echo json_encode($response);
		}
	}
?>