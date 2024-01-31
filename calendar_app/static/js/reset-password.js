"use strict";
var KTAuthResetPassword = (function () {
    var t, e, i;
    return {
        init: function () {
            (t = document.querySelector("#kt_password_reset_form")),
                (e = document.querySelector("#kt_password_reset_submit")),
                (i = FormValidation.formValidation(t, {
                    fields: { email: { validators: { regexp: { regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "L'indirizzo e-mail non è valido" }, notEmpty: { message: "L'indirizzo e-mail è obbligatorio" } } } },
                    plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) },
                })),
                e.addEventListener("click", function (r) {
                    r.preventDefault(),
                        i.validate().then(function (i) {
                            "Valid" == i
                                ? (e.setAttribute("data-kt-indicator", "on"),
                                  (e.disabled = !0),
                                  setTimeout(function () {
                                      e.removeAttribute("data-kt-indicator"),
                                          (e.disabled = !1),
                                          Swal.fire({
                                              text: "Abbiamo inviato un link per reimpostare la password alla tua e-mail.",
                                              icon: "success",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, capito!",
                                              customClass: { confirmButton: "btn btn-primary" },
                                          }).then(function (e) {
                                              if (e.isConfirmed) {
                                                  t.querySelector('[name="email"]').value = "";
                                                  var i = t.getAttribute("data-kt-redirect-url");
                                                  i && (location.href = i);
                                              }
                                          });
                                  }, 1500))
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
    KTAuthResetPassword.init();
});
