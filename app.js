
function onLoad() {
    document.addEventListener("deviceready", deviceReady, false);
}

var barcode = function () {
    $("#scan-btn").click(function () {
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
    });

}
 var deviceReady = $(function () {
    barcode();
});
