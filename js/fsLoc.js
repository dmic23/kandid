$(function () {
    $("#venue").foursquareAutocomplete({

        'latitude': lat,
        'longitude': lng,
        'minLength': 1,
        'search': function (event, ui) {
            $("#venue-name").html(ui.item.name);
            $("#venue-id").val(ui.item.id);
            $("#venue-address").html(ui.item.address);
            $("#venue-cityLine").html(ui.item.cityLine);
            return false;
        },
        'onError' : function (errorCode, errorType, errorDetail) {
        	var message = "Foursquare Error: Code=" + errorCode + ", errorType= " + errorType + ", errorDetail= " + errorDetail;
        	log(message);
        }
        
    });
});
function log(message) {
    $("<div/>").text(message).prependTo("#log");
    $("#log").scrollTop(0);
}