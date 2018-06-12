$(function() {

// $.get("temptext.txt", function(data) {
//     $('#impress').append(data);
//
//     var api = impress();
//     api.init();
// });

$.get("temptext2.txt", function(data) {
    $('#impress').append(data);

    var api = impress();
    api.init();
});

// api.next();
// api.prev();
// api.goto( stepIndex | stepElementId | stepElement, [duration] )
// api.tear();

});
