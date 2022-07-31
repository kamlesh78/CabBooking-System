$(document).ready(function () {
  
   
 
       console.log(sessionStorage.getItem("user_id"));

        fire_ajax_submit();


   $("#logout").click(function(){
   sessionStorage.removeItem("user_id");
});

   

});

function fire_ajax_submit() {
/*
    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();
*/
     var uid = sessionStorage.getItem("user_id") ;
 
     
 
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "GET",
       // contentType: "application/json",
        url: "/driver/bestdrivers",
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 $.each(data, function (i, item) { 
	   $('#bestdriver').text(item.username);
       $('#phone').text(item.mobileNumber);
       $('#email').text(item.email);
   	   $('#license').text(item.licenseNo);
   	   $('#rating').text(item.rating);
	 
	 
  });
console.log(data);

 

  

 
            
         
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4><pre>"
                + e.responseText + "</pre>";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}


 