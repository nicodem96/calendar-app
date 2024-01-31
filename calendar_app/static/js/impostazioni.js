"use strict";
var KTAccountSettingsSigninMethods = (function () {
    var t,
        e,
        n,
        o,
        i,
        s,
        r,
        a,
        l,
        d = function () {
            e.classList.toggle("d-none"), s.classList.toggle("d-none"), n.classList.toggle("d-none");
        },
        c = function () {
            o.classList.toggle("d-none"), a.classList.toggle("d-none"), i.classList.toggle("d-none");
        };
    return {
        init: function () {
            var m;
            (t = document.getElementById("kt_signin_change_email")),
                (e = document.getElementById("kt_signin_email")),
                (n = document.getElementById("kt_signin_email_edit")),
                (o = document.getElementById("kt_signin_password")),
                (i = document.getElementById("kt_signin_password_edit")),
                (s = document.getElementById("kt_signin_email_button")),
                (r = document.getElementById("kt_signin_cancel")),
                (a = document.getElementById("kt_signin_password_button")),
                (l = document.getElementById("kt_password_cancel")),
                e &&
                    (s.querySelector("button").addEventListener("click", function () {
                        d();
                    }),
                    r.addEventListener("click", function () {
                        d();
                    }),
                    a.querySelector("button").addEventListener("click", function () {
                        c();
                    }),
                    l.addEventListener("click", function () {
                        c();
                    })),
                t &&
                    ((m = FormValidation.formValidation(t, {
                        fields: {
                            emailaddress: { validators: { notEmpty: { message: "Email is required" }, emailAddress: { message: "The value is not a valid email address" } } },
                            confirmemailpassword: { validators: { notEmpty: { message: "Password is required" } } },
                        },
                        plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row" }) },
                    })),
                    t.querySelector("#kt_signin_submit").addEventListener("click", function (e) {
                        e.preventDefault(),
                            console.log("click"),
                            m.validate().then(function (e) {
                                "Valid" == e
                                    ? swal
                                          .fire({
                                              text: "Sent password reset. Please check your email",
                                              icon: "success",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, got it!",
                                              customClass: { confirmButton: "btn font-weight-bold btn-light-primary" },
                                          })
                                          .then(function () {
                                              t.reset(), m.resetForm(), d();
                                          })
                                    : swal.fire({
                                          text: "Sorry, looks like there are some errors detected, please try again.",
                                          icon: "error",
                                          buttonsStyling: !1,
                                          confirmButtonText: "Ok, got it!",
                                          customClass: { confirmButton: "btn font-weight-bold btn-light-primary" },
                                      });
                            });
                    })),
                (function (t) {
                    var e,
                        n = document.getElementById("kt_signin_change_password");
                    n &&
                        ((e = FormValidation.formValidation(n, {
                            fields: {
                                currentpassword: { validators: { notEmpty: { message: "Current Password is required" } } },
                                newpassword: { validators: { notEmpty: { message: "New Password is required" } } },
                                confirmpassword: {
                                    validators: {
                                        notEmpty: { message: "Confirm Password is required" },
                                        identical: {
                                            compare: function () {
                                                return n.querySelector('[name="newpassword"]').value;
                                            },
                                            message: "The password and its confirm are not the same",
                                        },
                                    },
                                },
                            },
                            plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row" }) },
                        })),
                        n.querySelector("#kt_password_submit").addEventListener("click", function (t) {
                            t.preventDefault(),
                                console.log("click"),
                                e.validate().then(function (t) {
                                    "Valid" == t
                                        ? swal
                                              .fire({
                                                  text: "Sent password reset. Please check your email",
                                                  icon: "success",
                                                  buttonsStyling: !1,
                                                  confirmButtonText: "Ok, got it!",
                                                  customClass: { confirmButton: "btn font-weight-bold btn-light-primary" },
                                              })
                                              .then(function () {
                                                  n.reset(), e.resetForm(), c();
                                              })
                                        : swal.fire({
                                              text: "Sorry, looks like there are some errors detected, please try again.",
                                              icon: "error",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, got it!",
                                              customClass: { confirmButton: "btn font-weight-bold btn-light-primary" },
                                          });
                                });
                        }));
                })();
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountSettingsSigninMethods.init();
});
var KTAccountSettingsDeactivateAccount = (function () {
    var t, n, e;
    return {
        init: function () {
            (t = document.querySelector("#kt_account_deactivate_form")) &&
                ((e = document.querySelector("#kt_account_deactivate_account_submit")),
                (n = FormValidation.formValidation(t, {
                    fields: { deactivate: { validators: { notEmpty: { message: "Seleziona la casella per disattivare il tuo account" } } } },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }),
                    },
                })),
                e.addEventListener("click", function (t) {
                    t.preventDefault(),
                        n.validate().then(function (t) {
                            "Valid" == t
                                ? swal
                                      .fire({
                                          text: "Sei sicuro di voler disattivare il tuo account?",
                                          icon: "warning",
                                          buttonsStyling: !1,
                                          showDenyButton: !0,
                                          confirmButtonText: "Sì",
                                          denyButtonText: "No",
                                          customClass: { confirmButton: "btn btn-light-primary", denyButton: "btn btn-danger" },
                                      })
                                      .then((t) => {
                                          t.isConfirmed
                                              ? Swal.fire({ text: "Il tuo account è stato disattivato.", icon: "success", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } })
                                              : t.isDenied && Swal.fire({ text: "Account non disattivato.", icon: "info", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } });
                                      })
                                : swal.fire({
                                      text: "Siamo spiacenti, sembra che siano stati rilevati alcuni errori, riprova.",
                                      icon: "error",
                                      buttonsStyling: !1,
                                      confirmButtonText: "Ok, capito!",
                                      customClass: { confirmButton: "btn btn-light-primary" },
                                  });
                        });
                }));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountSettingsDeactivateAccount.init();
});

var KTAccountSettingsProfileDetails = (function () {
    var e, t;
    return {
        init: function () {
            (e = document.getElementById("kt_account_profile_details_form")) &&
                (e.querySelector("#kt_account_profile_details_submit"),
                (t = FormValidation.formValidation(e, {
                    fields: {
                        fname: { validators: { notEmpty: { message: "Nome è obbligatoriod" } } },
                        lname: { validators: { notEmpty: { message: "Cognome è obbligatorio" } } },
                        company: { validators: { notEmpty: { message: "Azienda è obbligatorio" } } },
                        phone: { validators: { notEmpty: { message: "Telefono è obbligatorio" } } },
                        country: { validators: { notEmpty: { message: "Nazione è obbligatorio" } } },
                        "communication[]": { validators: { notEmpty: { message: "Seleziona almeno un metodo di comunicazione" } } },
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        submitButton: new FormValidation.plugins.SubmitButton(),
                        bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }),
                    },
                })),
                $(e.querySelector('[name="country"]')).on("change", function () {
                    t.revalidateField("country");
                }));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountSettingsProfileDetails.init();
});


