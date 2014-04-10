// =============================================================
// CRUD METHODS
// =============================================================

// CREATE & UPDATE
function createUpdateRecord(jsonData, callback) {
	$.ajax({
		type: "POST",
		url: backendURL + '/createUpdate.php',
		data: JSON.stringify(jsonData),
		contentType: 'application/json',
		success: callback
	});
};

// READ
function readRecords() {
	$.ajax({
		url: backendURL + '/read.php',
		type: 'GET',
		success: function (response) {

			response = $.parseJSON(response);

			var rows = '';

			$('#dataRow').html('').append('Loading...');

			setTimeout(function () {

				$.each(response, function (key, item) {

					rows +=
						'<tr id="trGrid" value="' + item.id + '">' +
						'<td>' + item.id + '</td>' +
						'<td>' + item.name + '</td>' +
						'<td>' + item.phone_number + '</td>' +
						'<td>' + item.reg_date + '</td>' +
						'<td>' +
						'<button class="btnDelete" value="' + item.id + '">Delete</button>' +
						'</td>' +
						'</tr>';

					$('#dataRow').html('').append(rows);

					var row = $('#trGrid td');

					row.on('click', function (e) {
						e.preventDefault();

						var id = $(e.currentTarget).parent().attr('value');

						loadForm(id);
					});

					$(".btnDelete").on("click", function (e) {
						e.preventDefault();

						var id = e.currentTarget.value;

						deleteRecord(id, function (response) {

							response = JSON.parse(response);

							if (response.status) {

								readRecords();

								loadForm();
							}
							else {
								$('#messages').html(response.message).fadeIn().delay(2000).fadeOut();
							}
						});
						
					});
				});

			}, 100);
		}
	});
};

// DELETE
function deleteRecord(id, callback) {
	$.ajax({
		type: "DELETE",
		url: backendURL + '/delete.php?id=' + id,
		success: callback
	});
};