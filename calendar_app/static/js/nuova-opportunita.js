'use strict';

(function( $ ) {
	$('input[name="status_opportunity"]').on('change', function(){
		$(this).parents('li').addClass('current');
		$('.calitera-progressbar li').removeClass('active');
		$('.calitera-progressbar li').each(function(){
			$(this).addClass('active');
			if ($(this).hasClass('current')) {
				$(this).removeClass('current')
				return false;
			}
		});
	});
})( jQuery );

var KTSendOfferCustomer = (function () {
	var t, e, i, k;
	t = document.getElementById("kt_send_opportunity");
	k = document.getElementById("kt_new_opportunity_submit");
	return {
		init: function () {
			
			(t.addEventListener("click", function (t) {
				t.preventDefault(),
				Swal.fire({
					text: "Sei sicuro di voler Inviare l'offerta al cliente?",
					icon: "warning",
					showCancelButton: !0,
					buttonsStyling: !1,
					confirmButtonText: "Sì, procedi con l'invio!",
					cancelButtonText: "No, torna alla configurazione dell'Opportunità",
					customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light" },
				}).then(function (t) {
					t.value
					? Swal.fire({ text: "E-mail inviata con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Torna alla configurazione dell'Opportunità", customClass: { confirmButton: "btn fw-bold btn-primary" } })
					: "cancel" === t.dismiss && Swal.fire({ text: "Non si è proceduto con l'invio della e-mail.", icon: "error", buttonsStyling: !1, confirmButtonText: "Ok, capito!", customClass: { confirmButton: "btn btn-primary" } });
				});
			}),
			(e = document.querySelector("#kt_new_opportunity_form")),
			(i = FormValidation.formValidation(e, {
				fields: {
					cliente: { validators: { notEmpty: { message: "Cliente è obbligatoriod" } } },
					servizio: { validators: { notEmpty: { message: "Servizio è obbligatorio" } } },
					data_scadenza: { validators: { notEmpty: { message: "Data di scadenza è obbligatorio" } } },
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					submitButton: new FormValidation.plugins.SubmitButton(),
					bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }),
				},
			})),
			k.addEventListener("click", function (n) {
				console.log('clicked');
				n.preventDefault(),
				i.validate().then(function (i) {
					"Valid" == i
					? (Swal.fire({ text: "Hai creato una nuova Opportunità con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Vai al pannello delle Opportunità", customClass: { confirmButton: "btn btn-primary" } }).then(function (t) {
							if (t.isConfirmed) {
								var i = e.getAttribute("data-kt-redirect-url");
								i && (location.href = i);
							}
						}))
					: Swal.fire({
						text: "Spiacenti, sembra che siano stati rilevati alcuni errori, controlla i dati inseriti e riprova.",
						icon: "error",
						buttonsStyling: !1,
						confirmButtonText: "Ok, capito!",
						customClass: { confirmButton: "btn btn-primary" },
					});
				});
			}),
			$(e.querySelector('[name="cliente"]')).on("change", function () {
				i.revalidateField("cliente");
			}),
			$(e.querySelector('[name="servizio"]')).on("change", function () {
				i.revalidateField("servizio");
			}));
		},
	};
})();
KTUtil.onDOMContentLoaded(function () {
	KTSendOfferCustomer.init();
});