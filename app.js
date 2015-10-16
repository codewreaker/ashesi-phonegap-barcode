$(function () {

    $('body').on('click','#scan-btn',scanBarCode());




    var scanBarCode = function () {
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          $("#textDisplay").val("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          $("#textDisplay").val("Scanning failed: " + error);
      }
   );
    }

});
