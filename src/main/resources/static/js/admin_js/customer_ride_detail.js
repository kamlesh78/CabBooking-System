$(document).ready(function () {
  
   
 
       console.log(sessionStorage.getItem("user_id"));

        

   $("#logout").click(function(){
   sessionStorage.removeItem("user_id");
});


   $("#finduser").click(function(){
   var u_id = $("#customerID").val();
    fire_ajax_submit(u_id);
   
});

});

function fire_ajax_submit(u_id) {
/*
    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();
*/
 
 
     
 
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "GET",
       // contentType: "application/json",
        url: "/tripbooking/" +u_id ,
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
	console.log(data);
     		 var trHTML = '';
          $.each(data, function (i, item) {
	var stat = item.status == true ? "completed" : "Not completed";
	console.log(stat);
          trHTML += '<tr><td>' + item.customer.username + '</td><td>' + item.driver.username + '</td><td>' + item.driver.cab.carType + '</td><td>' +item.fromLocation + '</td><td>' +item.toLocation + '</td><td>' +stat+'</td><td>' + item.bill + '</td><td>' + item.toDateTime.substring(0,10) + "</td></tr>" ;
           
        });
        
        
         $('#customer_detail tbody').html(trHTML);
        /*
        $('#records_table').append(trHTML);
       $('#username').text(data["username"]);
       $('#phone').text(data["mobileNumber"]);
       $('#email').text(data["email"]);
   */
	 

  

 
            
         
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



function showAndDismissAlert(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
 