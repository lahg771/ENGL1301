$( document ).ready(function() {
    console.log( "ready!" );
    $( "#thefool" ).click(function() {
        $("#thefool").toggleClass("flipsidefool");
        $("#authdesc").toggleClass("hidden");
        $("#webdesc").toggleClass("hidden");
});
		$("#series1").click(function(){
    	$("#multimodal").toggleClass("hidden");
       if ($("#multimodal").hasClass("hidden")) {
    	$("#multimodallit").toggleClass("hidden");
    }
    });
    $("#mml").click(function(){
    	$("#multimodallit").toggleClass("hidden");
    });
});
