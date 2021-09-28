$( document ).ready(function() {
    console.log( "ready!" );
    $( "#thefool" ).click(function() {
        $("#thefool").toggleClass("flipsidefool");
        $("#authdesc").toggleClass("hidden");
        $("#webdesc").toggleClass("hidden");
});
		$("#series2").click(function(){
    	$("#multimodal").toggleClass("hidden");
       if ($("#multimodal").hasClass("hidden")) {
       	if ($("#multimodallit").hasClass("hidden")) {
        	console.log("hidden");
        }
        else {
        	$("#multimodallit").toggleClass("hidden");
        }
    		if ($("#endofseriesreflec2").hasClass("hidden")) {
        	console.log("hidden");
        }
        else {
        	$("#endofseriesreflec2").toggleClass("hidden");
        }
    }
    });
    $("#mml").click(function(){
    	$("#multimodallit").toggleClass("hidden");
      if ($("#endofseriesreflec2").hasClass("hidden")) {
      	console.log("hidden");
      }
      else {
      $("#endofseriesreflec2").toggleClass("hidden");
      }
    });
    $("#eosr2").click(function(){
    	$("#endofseriesreflec2").toggleClass("hidden");
      if ($("#multimodallit").hasClass("hidden")) {
      	console.log("hidden");
      }
      else {
      $("#multimodallit").toggleClass("hidden");
      }
    });
    if ($("#multimodal").hasClass("hidden")) {
    	$("#multimodallit").toggleClass("hidden"); 
      $("#endofseriesreflec2").toggleClass("hidden");
      }
});
