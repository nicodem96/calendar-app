"use strict";
var KTSigninGeneral = (function () {
    var e, t, i;
    return {
        init: function () {
            (e = document.querySelector("#kt_sign_in_form")),
            (t = document.querySelector("#kt_sign_in_submit")),
            (i = FormValidation.formValidation(e, {
                fields: {
                    email: { validators: { regexp: { regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "L'indirizzo e-mail non è valido" }, notEmpty: { message: "L'indirizzo e-mail è obbligatorio" } } },
                    password: { validators: { notEmpty: { message: "La password è richiesta" } } },
                },
                plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) },
            })),
            t.addEventListener("click", function (n) {
                n.preventDefault(),
                i.validate().then(function (i) {
                    "Valid" == i
                    ? (t.setAttribute("data-kt-indicator", "on"),
                    (t.disabled = !0),
                    setTimeout(function () {
                      t.removeAttribute("data-kt-indicator"),
                      (t.disabled = !1),
                      Swal.fire({ text: "Hai effettuato il log in con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Vai al pannello di controllo", customClass: { confirmButton: "btn btn-primary" } }).then(function (t) {
                          if (t.isConfirmed) {
                              (e.querySelector('[name="email"]').value = ""), (e.querySelector('[name="password"]').value = "");
                              var i = e.getAttribute("data-kt-redirect-url");
                              i && (location.href = i);
                          }
                      });
                  }, 2e3))
                    : Swal.fire({
                      text: "Spiacenti, sembra che siano stati rilevati alcuni errori, controlla i dati inseriti e riprova.",
                      icon: "error",
                      buttonsStyling: !1,
                      confirmButtonText: "Ok, capito!",
                      customClass: { confirmButton: "btn btn-primary" },
                  });
                });
            });
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTSigninGeneral.init();
});

