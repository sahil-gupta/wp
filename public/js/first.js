$(function() {

$.get("temptext.txt", function(data) {

    $('#impress-first').append(data);
    var api = impress('impress-first');
    api.init();
});

// api.next();
// api.prev();
// api.goto( stepIndex | stepElementId | stepElement, [duration] )
// api.tear();

});
