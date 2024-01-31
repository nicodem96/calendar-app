var KTAddFilter = (function () {
    var e;
    return {
        init: function () {
            (e = $(".single-filter .form-check-input")),
            e.on("change", function (t) {
                t.preventDefault();
                var k = $(this).attr('value'),
                l = $(this).attr('data-list'),
                n = $(this).parents('.form-switch').find('label').text();
                if ($(this).is(':checked')) {
                    $('<div class="single-filter" data-filter-id="'+k+'"><span class="fw-semibold fs-6 me-2">'+n+'</span><div class="separator separator-dashed my-3"></div></div>').appendTo('.list-filters[data-list="'+l+'"]');
                    Swal.fire({ text: "Il filtro è stato aggiunto.", icon: "success", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } })
                }
                else {
                    $('.list-filters[data-list="'+l+'"] .single-filter[data-filter-id="'+k+'"]').remove();
                    Swal.fire({ text: "Il filtro è stato rimosso.", icon: "warning", confirmButtonText: "Ok", buttonsStyling: !1, customClass: { confirmButton: "btn btn-light-primary" } })
                }
            });

        },
    };
})();
KTUtil.onDOMContentLoaded(function () {
    KTAddFilter.init();
});