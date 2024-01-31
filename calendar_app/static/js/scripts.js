'use strict';

(function( $ ) {
	$('#app_sidebar_toggle').on('click', function(){
		$('body').toggleClass('sidebar-minimized');
		$(this).toggleClass('active');
	});
	
	if($('#chart_1_dashboard').length) {
		const ctx1Dash = document.getElementById('chart_1_dashboard');

		var xValues = ["In scadenza", "Con clienti", "BackOffice"];
		var yValues = [12, 50, 22];
		var barColors = ["#e14c2b", "#17a985","#001254"];

		new Chart("chart_1_dashboard", {
			type: "bar",
			data: {
				labels: xValues,
				datasets: [{
					backgroundColor: barColors,
					data: yValues,
					label: 'Attività'
				}]
			},
			options: {
				legend: {display: false},
				title: {
					display: true,
				},
				responsive: true,
				maintainAspectRatio: false,
			}
		});
	}
	if($('#chart_2_dashboard').length) {
		var xValues2 = ["Persone fisiche", "Persone giuridiche"];
		var yValues2 = [66, 34];
		var barColors2 = [
		"#16a086",
		"#1bbc9b",
		];

		new Chart("chart_2_dashboard", {
			type: "pie",
			data: {
				labels: xValues2,
				datasets: [{
					backgroundColor: barColors2,
					data: yValues2
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
			}
		});
	}
	
	if($('#chart_3_dashboard').length) {
		var xValues3 = ["Opportunità aperte", "Opportunità chiuse", "Opportunità di preventivare", "Opportunità in archivio"];
		var yValues3 = [10, 30, 15, 45];
		var barColors3 = [
		"#1d1ce6",
		"#4749ff",
		"#7a78ff",
		"#c37aff",
		];

		new Chart("chart_3_dashboard", {
			type: "pie",
			data: {
				labels: xValues3,
				datasets: [{
					backgroundColor: barColors3,
					data: yValues3
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
			}
		});
	}
	
	if($('#kt_profile_overview_table').length) {
		
		var t = $("#kt_profile_overview_table");
		const e = $(t).DataTable({ 
			info: !1, 
			order: [],
			"language": {
				"zeroRecords": "Nessuna corrispondenza trovata."
			},
			paging: false,
		});
		
		// a = $('#kt_filter_country');
		// var o, n;
		
		// a.on('change', function(s) {

		// 	var val = $.fn.dataTable.util.escapeRegex($(this).val());
		
		// 	e.column(4).search(val ? '^' + val + '$' : '', true, false).draw();
		// });

		// $.fn.dataTable.ext.search.push(function (t, e, a) {
		// 	var r = o,
		// 	s = n,
		// 	i = parseFloat(moment(e[1]).format()) || 0;
		// 	return !!((isNaN(r) && isNaN(s)) || (isNaN(r) && i <= s) || (r <= i && isNaN(s)) || (r <= i && i <= s));
		// });
		// document.getElementById("kt_filter_search").addEventListener("keyup", function (t) {
		// 	e.search(t.target.value).draw();
		// });
	}
	
	if ($('#kt_account_profile_details_form').length) {
		$( document ).ready(function() {
			var e, t;
			(e = document.getElementById("kt_account_profile_details_form")) &&
			(e.querySelector("#kt_account_profile_details_submit"),
			(t = FormValidation.formValidation(e, {
				fields: {
					ragione_sociale: { validators: { notEmpty: { message: "Ragione Sociale è obbligatorio" } } },
					p_iva: { validators: { notEmpty: { message: "P.IVA è obbligatorio" } } },
					codice_fiscale: { validators: { notEmpty: { message: "Codice Fiscale è obbligatorio" } } },
					sede: { validators: { notEmpty: { message: "Sede è obbligatorio" } } },
					email: { validators: { notEmpty: { message: "L'indirizzo e-mail è obbligatorio" }, emailAddress: { message: "Inserisci un indirizzo e-mail corretto" } } },
					"communication[]": { validators: { notEmpty: { message: "Please select at least one communication method" } } },
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					submitButton: new FormValidation.plugins.SubmitButton(),
					bootstrap: new FormValidation.plugins.Bootstrap5(),
				},
			})));
		});
		$('#kt_modal_edit_profile').on('hidden.bs.modal', function () {
			window.location.reload();
		});
	}
	

	$('#kt_datepicker_single').flatpickr({ });
	$("#kt_datepicker_range").flatpickr({
    altInput: true,
    mode: "range"
});
	

})( jQuery );
