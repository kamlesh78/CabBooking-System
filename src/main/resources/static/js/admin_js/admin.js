$(document).ready(function () {
	
   
  
   
  	   $("#logout").click(function(){
   sessionStorage.removeItem("user_id");
	});
   
   


 
       console.log(sessionStorage.getItem("user_id"));

  

		$("#usr").text(sessionStorage.getItem("user_name"));
		
		 fire_ajax_submit();


   

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
        url: "admin/customerwise",
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
		console.log(data);
     		 var trHTML = '';
          $.each(data, function (i, item) {
	var stat = item.status == true ? "completed" : "Not completed";
	console.log(stat);
          trHTML += '<tr><td>' + item.customer.username + '</td><td>' + item.driver.username + '</td><td>' + item.fromLocation + '</td><td>' + item.toLocation + '</td><td>' + item.bill + '</td><td>' + stat + "</td></tr>" ;
           
        });
        
        
         $('#trip').append(trHTML);
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


 