// =============================================================
// MAIN EVENTS
// =============================================================

// On load the page
$(document).ready(function () {
	loadForm();
	loadGrid();
});

// =============================================================
// AUXILIAR EVENTS
// =============================================================

function bindFormData(id) {

	$.ajax({
		url: backendURL + '/read.php?id=' + id,
		type: 'GET',
		success: function (response) {

			response = $.parseJSON(response);

			$.each(response, function (key, item) {
				$('#id').val(id);
				$('#name').val(item.name);
				$('#phone_number').val(item.phone_number);
				$('#reg_date').val(item.reg_date);
			});
		}
	});
};

function loadForm(id) {

	$('#formRegion').html('').load('templates/form.tpl', function () {

		// After load
		registerFormEvents();

		if (id > 0) {
			bindFormData(id);
		}
	});
};

function loadGrid() {

	$('#gridRegion').load('templates/grid.tpl', function () {

		// After load
		// ...
	});

	readRecords();
};

function registerFormEvents(argument) {

	$("#contactForm").on("submit", function (e) {
		e.preventDefault();

		// Read form to json
		var json = {
			id: $('#id').val(),
			name: $('#name').val(),
			phone_number: $('#phone_number').val(),
			reg_date: $('#reg_date').val()
		};

		// Call the controller method
		createUpdateRecord(json, function (response) {

			response = JSON.parse(response);

			if (response.status) {

				// Refresh the grid
				readRecords();

				// Reset the form calling itself (crazy!)
				loadForm();
			}
			else {
				$('#messages').html(response.message).fadeIn().delay(2000).fadeOut();
			}
		});
	});

	$("#btnNew").on("click", function (e) {
		e.preventDefault();

		loadForm();
	});
}