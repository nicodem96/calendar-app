var KTConfirmDeleteFieldCRM = (function () {
    var t,
    n = () => {
        t.querySelectorAll('[data-kt-field-filter="delete_row"]').forEach((t) => {
            t.addEventListener("click", function (t) {
                t.preventDefault();
                const n = t.target.closest("tr"),
                r = n.querySelector('[data-kt-field-filter="field_name"]').innerText;
                Swal.fire({
                    text: "Sei sicuro di voler eliminare il campo " + r + "?",
                    icon: "warning",
                    showCancelButton: !0,
                    buttonsStyling: !1,
                    confirmButtonText: "Sì, cancella!",
                    cancelButtonText: "No, annulla",
                    customClass: { confirmButton: "btn fw-bold btn-danger", cancelButton: "btn fw-bold btn-active-light-primary" },
                }).then(function (t) {
                    t.value
                    ? Swal.fire({ text: "Hai eliminato il campo " + r + "!", icon: "success", buttonsStyling: !1, confirmButtonText: "Torna alla personalizzazione del tuo CRM", customClass: { confirmButton: "btn fw-bold btn-primary" } }).then(function () {
                      e.row($(n)).remove().draw();
                  })
                    : "cancel" === t.dismiss && Swal.fire({ text: r + " non è stato eliminato.", icon: "error", buttonsStyling: !1, confirmButtonText: "Torna alla personalizzazione del tuo CRM", customClass: { confirmButton: "btn fw-bold btn-primary" } });
                });
            });
        });
    };
    return {
        init: function () {
            t = document.querySelector("#kt_fields_crm_overview_table");
            n();
            const e = $(t).DataTable({ 
                info: !1, 
                order: [],
                "language": {
                    "zeroRecords": "Nessuna corrispondenza trovata."
                },
                paging: false,
            });
        }
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTConfirmDeleteFieldCRM.init();
});


