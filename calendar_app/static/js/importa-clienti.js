'use strict';

(function( $ ) {
    var myDropzone = new Dropzone("#kt_import_customers_dropzone", {
        url: "https://www.google.it", 
        paramName: "file", 
        maxFiles: 1,
        maxFilesize: 10, 
        addRemoveLinks: true,
        accept: function(file, done) {
        
        }
    });
})( jQuery );