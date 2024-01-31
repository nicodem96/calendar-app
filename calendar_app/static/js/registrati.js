"use strict";
var KTSignupGeneral = (function () {
    var e,
        t,
        a,
        r,
        s = function () {
            return 100 === r.getScore();
        };
    return {
        init: function () {
            (e = document.querySelector("#kt_sign_up_form")),
                (t = document.querySelector("#kt_sign_up_submit")),
                (r = KTPasswordMeter.getInstance(e.querySelector('[data-kt-password-meter="true"]'))),
                (a = FormValidation.formValidation(e, {
                    fields: {
                        "first-name": { validators: { notEmpty: { message: "Nome è obbligatorio" } } },
                        "last-name": { validators: { notEmpty: { message: "Cognome è obbligatorio" } } },
                        email: { validators: { regexp: { regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "L'indirizzo e-mail non è valido" }, notEmpty: { message: "L'indirizzo e-mail è obbligatorio" } } },
                        password: {
                            validators: {
                                notEmpty: { message: "La password è obbligatoria" },
                                callback: {
                                    message: "Inserisci una password valida",
                                    callback: function (e) {
                                        if (e.value.length > 0) return s();
                                    },
                                },
                            },
                        },
                        "confirm-password": {
                            validators: {
                                notEmpty: { message: "La conferma della password è obbligatoria" },
                                identical: {
                                    compare: function () {
                                        return e.querySelector('[name="password"]').value;
                                    },
                                    message: "Le password inserite non sono uguali.",
                                },
                            },
                        },
                        toc: { validators: { notEmpty: { message: "Devi accettare i termini e le condizioni" } } },
                    },
                    plugins: { trigger: new FormValidation.plugins.Trigger({ event: { password: !1 } }), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) },
                })),
                t.addEventListener("click", function (s) {
                    s.preventDefault(),
                        a.revalidateField("password"),
                        a.validate().then(function (a) {
                            "Valid" == a
                                ? (t.setAttribute("data-kt-indicator", "on"),
                                  (t.disabled = !0),
                                  setTimeout(function () {
                                      t.removeAttribute("data-kt-indicator"),
                                          (t.disabled = !1),
                                          Swal.fire({ text: "Registrazione avvenuta con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Vai al pannello di controllo", customClass: { confirmButton: "btn btn-primary" } }).then(
                                              function (t) {
                                                  if (t.isConfirmed) {
                                                      e.reset(), r.reset();
                                                      var a = e.getAttribute("data-kt-redirect-url");
                                                      a && (location.href = a);
                                                  }
                                              }
                                          );
                                  }, 1500))
                                : Swal.fire({
                                      text: "Spiacenti, sembra che siano stati rilevati alcuni errori, controlla i dati inseriti e riprova.",
                                      icon: "error",
                                      buttonsStyling: !1,
                                      confirmButtonText: "Ok, capito!",
                                      customClass: { confirmButton: "btn btn-primary" },
                                  });
                        });
                }),
                e.querySelector('input[name="password"]').addEventListener("input", function () {
                    this.value.length > 0 && a.updateFieldStatus("password", "NotValidated");
                });
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTSignupGeneral.init();
});
