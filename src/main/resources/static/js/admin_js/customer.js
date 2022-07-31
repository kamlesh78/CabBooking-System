$(document).ready(function () {
	
   
  
   
  	   $("#logout").click(function(){
   sessionStorage.removeItem("user_id");
	});
   
   


 
       console.log(sessionStorage.getItem("user_id"));

  

		$("#usr").text(sessionStorage.getItem("user_name"));
		
		 fire_ajax_submit();


   

});


function fire_ajax_submit() {
 
 
 
     var uid = sessionStorage.getItem("user_id") ;
 
     
 
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "GET",
       // contentType: "application/json",
        url: "customer/all",
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
		console.log(data);
     		 var trHTML = '';
          $.each(data, function (i, item) {
	var c_id = item.customerId;
	 console.log(c_id);
	var stat = " <a href='#' onclick='delete_customer(" + c_id  +")'><i class='fa-solid fa-circle-minus'></i></a>";
	console.log(stat);
          trHTML += '<tr><td>' + item.customerId + '</td><td>' + item.username + '</td><td>' + item.email + '</td><td>' + item.mobileNumber + '</td><td>' + stat + "</td></tr>" ;
           
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



function delete_customer(c_id) {
 
    
     
 
      console.log("delete");
 
     
 
  

    $.ajax({
        type: "DELETE",
      //contentType: "application/json",
        url: "customer/"+c_id,
     //   data: search,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
		console.log(data);
     	 
            fire_ajax_submit();
 
               showAndDismissAlert('success', 'Customer Deleted Successfully');

         
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

                           		showAndDismissAlert('danger', 'Error in Deleting Customer!!! ');


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
 