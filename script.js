$( document ).ready(function() {
    console.log( "ready!" );
    $( "#thefool" ).click(function() {
        $("#thefool").toggleClass("flipsidefool");
        $("#authdesc").toggleClass("hidden");
        $("#webdesc").toggleClass("hidden");
});
});