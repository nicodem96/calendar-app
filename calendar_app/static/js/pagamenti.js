"use strict";
var KTProfileGeneral = (function () {
    var t, e, i, o;
    return {
        init: function () {
            (t = document.querySelector("#kt_followers_show_more_button")),
                (e = document.querySelector("#kt_followers_show_more_cards")),
                (i = document.querySelector("#kt_user_follow_button")),
                (o = document.querySelector("#kt_user_profile_nav")),
                t &&
                    t.addEventListener("click", function (i) {
                        t.setAttribute("data-kt-indicator", "on"),
                            (t.disabled = !0),
                            setTimeout(function () {
                                t.removeAttribute("data-kt-indicator"), (t.disabled = !1), t.classList.add("d-none"), e.classList.remove("d-none"), KTUtil.scrollTo(e, 200);
                            }, 2e3);
                    }),
                i &&
                    i.addEventListener("click", function (t) {
                        t.preventDefault(),
                            i.setAttribute("data-kt-indicator", "on"),
                            (i.disabled = !0),
                            i.classList.contains("btn-success")
                                ? setTimeout(function () {
                                      i.removeAttribute("data-kt-indicator"),
                                          i.classList.remove("btn-success"),
                                          i.classList.add("btn-light"),
                                          i.querySelector(".svg-icon").classList.add("d-none"),
                                          (i.querySelector(".indicator-label").innerHTML = "Follow"),
                                          (i.disabled = !1);
                                  }, 1500)
                                : setTimeout(function () {
                                      i.removeAttribute("data-kt-indicator"),
                                          i.classList.add("btn-success"),
                                          i.classList.remove("btn-light"),
                                          i.querySelector(".svg-icon").classList.remove("d-none"),
                                          (i.querySelector(".indicator-label").innerHTML = "Following"),
                                          (i.disabled = !1);
                                  }, 1e3);
                    }),
                KTUtil.on(document.body, '[data-kt-follow-btn="true"]', "click", function (t) {
                    t.preventDefault();
                    var e = this,
                        i = e.querySelector(".indicator-label"),
                        o = e.querySelector(".following"),
                        n = e.querySelector(".follow");
                    e.setAttribute("data-kt-indicator", "on"),
                        (e.disabled = !0),
                        n.classList.add("d-none"),
                        o.classList.add("d-none"),
                        setTimeout(function () {
                            e.removeAttribute("data-kt-indicator"),
                                (e.disabled = !1),
                                e.classList.contains("btn-light-primary")
                                    ? (e.classList.remove("btn-light-primary"), e.classList.add("btn-light"), n.classList.remove("d-none"), (i.innerHTML = "Follow"))
                                    : (e.classList.add("btn-light-primary"), e.classList.remove("btn-light"), o.classList.remove("d-none"), (i.innerHTML = "Following"));
                        }, 2e3);
                }),
                o &&
                    o.getAttribute("data-kt-sticky") &&
                    KTUtil.isBreakpointUp("lg") &&
                    ("1" === localStorage.getItem("nav-initialized") && window.scroll({ top: parseInt(o.getAttribute("data-kt-page-scroll-position")), behavior: "smooth" }), localStorage.setItem("nav-initialized", "1"));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTProfileGeneral.init();
});

var KTAccountBillingGeneral = (function () {
    var t;
    return {
        init: function () {
            (t = document.querySelector("#kt_account_billing_cancel_subscription_btn")) &&
                t.addEventListener("click", function (t) {
                    t.preventDefault(),
                        swal
                            .fire({
                                text: "Are you sure you would like to cancel your subscription ?",
                                icon: "warning",
                                buttonsStyling: !1,
                                showDenyButton: !0,
                                confirmButtonText: "Yes",
                                denyButtonText: "No",
                                customClass: { confirmButton: "btn btn-primary", denyButton: "btn btn-light-danger" },
                            })
                            .then((t) => {
                                t.isConfirmed && Swal.fire({ text: "Your subscription has been canceled.", icon: "success", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } });
                            });
                }),
                KTUtil.on(document.body, '[data-kt-billing-action="card-delete"]', "click", function (t) {
                    t.preventDefault();
                    var n = this;
                    swal.fire({
                        text: "Sei sicuro di voler eliminare questa carta?",
                        icon: "warning",
                        buttonsStyling: !1,
                        showDenyButton: !0,
                        confirmButtonText: "Sì",
                        denyButtonText: "No",
                        customClass: { confirmButton: "btn btn-primary", denyButton: "btn btn-light-danger" },
                    }).then((t) => {
                        t.isConfirmed &&
                            (n.setAttribute("data-kt-indicator", "on"),
                            (n.disabled = !0),
                            setTimeout(function () {
                                Swal.fire({ text: "La carta selezionata è stata eliminata con successo", icon: "success", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } }).then((t) => {
                                    n.closest('[data-kt-billing-element="card"]').remove();
                                });
                            }, 2e3));
                    });
                }),
                KTUtil.on(document.body, '[data-kt-billing-action="address-delete"]', "click", function (t) {
                    t.preventDefault();
                    var n = this;
                    swal.fire({
                        text: "Sei sicuro di voler eliminare l'indirizzo selezionato?",
                        icon: "warning",
                        buttonsStyling: !1,
                        showDenyButton: !0,
                        confirmButtonText: "Sì",
                        denyButtonText: "No",
                        customClass: { confirmButton: "btn btn-primary", denyButton: "btn btn-light-danger" },
                    }).then((t) => {
                        t.isConfirmed &&
                            (n.setAttribute("data-kt-indicator", "on"),
                            (n.disabled = !0),
                            setTimeout(function () {
                                Swal.fire({ text: "L'indirizzo selezionato è stato eliminato con successo.", icon: "success", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } }).then((t) => {
                                    n.closest('[data-kt-billing-element="address"]').remove();
                                });
                            }, 2e3));
                    });
                });
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAccountBillingGeneral.init();
});

var KTModalNewAddress = (function () {
    var t, e, n, o, i, r;
    return {
        init: function () {
            (r = document.querySelector("#kt_modal_new_address")) &&
                ((i = new bootstrap.Modal(r)),
                (o = document.querySelector("#kt_modal_new_address_form")),
                (t = document.getElementById("kt_modal_new_address_submit")),
                (e = document.getElementById("kt_modal_new_address_cancel")),
                $(o.querySelector('[name="country"]'))
                    .select2()
                    .on("change", function () {
                        n.revalidateField("country");
                    }),
                (n = FormValidation.formValidation(o, {
                    fields: {
                        "first-name": { validators: { notEmpty: { message: "Nome è obbligatorio" } } },
                        "last-name": { validators: { notEmpty: { message: "Cognome è obbligatorio" } } },
                        country: { validators: { notEmpty: { message: "Nazione è obbligatorio" } } },
                        address1: { validators: { notEmpty: { message: "Indirizzo è obbligatorio" } } },
                        address2: { validators: { notEmpty: { message: "Indirizzo 2 è obbligatorio" } } },
                        city: { validators: { notEmpty: { message: "Città è obbligatorio" } } },
                        state: { validators: { notEmpty: { message: "provincia è obbligatorio" } } },
                        postcode: { validators: { notEmpty: { message: "CAP è obbligatorio" } } },
                    },
                    plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) },
                })),
                t.addEventListener("click", function (e) {
                    e.preventDefault(),
                        n &&
                            n.validate().then(function (e) {
                                console.log("validated!"),
                                    "Valid" == e
                                        ? (t.setAttribute("data-kt-indicator", "on"),
                                          (t.disabled = !0),
                                          setTimeout(function () {
                                              t.removeAttribute("data-kt-indicator"),
                                                  (t.disabled = !1),
                                                  Swal.fire({ text: "L'indirizzo è stato salvato con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, capito!", customClass: { confirmButton: "btn btn-primary" } }).then(
                                                      function (t) {
                                                          t.isConfirmed && i.hide();
                                                      }
                                                  );
                                          }, 2e3))
                                        : Swal.fire({
                                              text: "Siamo spiacenti, sembra che siano stati rilevati alcuni errori, riprova.",
                                              icon: "error",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, capito!",
                                              customClass: { confirmButton: "btn btn-primary" },
                                          });
                            });
                }),
                e.addEventListener("click", function (t) {
                    t.preventDefault(),
                        Swal.fire({
                            text: "Are you sure you would like to cancel?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Yes, cancel it!",
                            cancelButtonText: "No, return",
                            customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light" },
                        }).then(function (t) {
                            t.value
                                ? (o.reset(), i.hide())
                                : "cancel" === t.dismiss && Swal.fire({ text: "Your form has not been cancelled!.", icon: "error", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } });
                        });
                }));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTModalNewAddress.init();
});

var KTModalNewCard = (function () {
    var t, e, n, r, o, i;
    return {
        init: function () {
            (i = document.querySelector("#kt_modal_new_card")) &&
                ((o = new bootstrap.Modal(i)),
                (r = document.querySelector("#kt_modal_new_card_form")),
                (t = document.getElementById("kt_modal_new_card_submit")),
                (e = document.getElementById("kt_modal_new_card_cancel")),
                $(r.querySelector('[name="card_expiry_month"]')).on("change", function () {
                    n.revalidateField("card_expiry_month");
                }),
                $(r.querySelector('[name="card_expiry_year"]')).on("change", function () {
                    n.revalidateField("card_expiry_year");
                }),
                (n = FormValidation.formValidation(r, {
                    fields: {
                        card_name: { validators: { notEmpty: { message: "Intestatario della carta è obbligatorio" } } },
                        card_number: { validators: { notEmpty: { message: "Numero della carta è obbligatorio" }, creditCard: { message: "Card number is not valid" } } },
                        card_expiry_month: { validators: { notEmpty: { message: "Mese è obbligatorio" } } },
                        card_expiry_year: { validators: { notEmpty: { message: "Anno è obbligatorio" } } },
                        card_cvv: { validators: { notEmpty: { message: "CCV è obbligatorio" }, digits: { message: "CVV deve contenere solo sumeri" }, stringLength: { min: 3, max: 4, message: "CVV deve contenere solo 3 o 4 numeri" } } },
                    },
                    plugins: { trigger: new FormValidation.plugins.Trigger(), bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) },
                })),
                t.addEventListener("click", function (e) {
                    e.preventDefault(),
                        n &&
                            n.validate().then(function (e) {
                                console.log("validated!"),
                                    "Valid" == e
                                        ? (t.setAttribute("data-kt-indicator", "on"),
                                          (t.disabled = !0),
                                          setTimeout(function () {
                                              t.removeAttribute("data-kt-indicator"),
                                                  (t.disabled = !1),
                                                  Swal.fire({ text: "La tua carta è stata salvata con successo!", icon: "success", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }).then(
                                                      function (t) {
                                                          t.isConfirmed && o.hide();
                                                      }
                                                  );
                                          }, 2e3))
                                        : Swal.fire({
                                              text: "Siamo spiacenti, sembra che siano stati rilevati alcuni errori, riprova.",
                                              icon: "error",
                                              buttonsStyling: !1,
                                              confirmButtonText: "Ok, capito!",
                                              customClass: { confirmButton: "btn btn-primary" },
                                          });
                            });
                }),
                e.addEventListener("click", function (t) {
                    t.preventDefault(),
                        Swal.fire({
                            text: "Sei sicuro di voler procedere con l'annullamento dell'operazione?",
                            icon: "warning",
                            showCancelButton: !0,
                            buttonsStyling: !1,
                            confirmButtonText: "Sì, procedi con l'annullamento!",
                            cancelButtonText: "No, torna all'inserimento dati",
                            customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light" },
                        }).then(function (t) {
                            t.value
                                ? (r.reset(), o.hide())
                                : "cancel" === t.dismiss && Swal.fire({ text: "Non si è proceduto con l'annulllamento", icon: "error", buttonsStyling: !1, confirmButtonText: "Ok, capito!", customClass: { confirmButton: "btn btn-primary" } });
                        });
                }));
        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTModalNewCard.init();
});


