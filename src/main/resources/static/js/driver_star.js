 var glo={};
$(document).ready(function () {
  
  
 
       console.log(sessionStorage.getItem("user_id"));
fire_ajax_submit();
      
	
	
 $("#finduser").click(function(){
	var d_id = $("#select_d").val();
	console.log(d_id);
 	put_driver(d_id);
});


$("#submit_user").click(function(){
	
	 
	 
	rating_update();
	
	
});


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
        url: "/tripbooking/" +uid ,
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
	 
     		 
        var outp='';
        var foo={};
          $.each(data, function (i, item) {
	if(!foo[item.driver.driverId]){
		foo[item.driver.driverId] = true;
		 outp += '<option value=" ' + item.driver.driverId + '">' + item.driver.username + '</option>';
	}
		  
	
         // trHTML += '<tr><td>' + item.driver.username + '</td><td>' + item.driver.mobileNumber +'</td><td>' + item.toLocation  + '</td><td>' + item.fromDateTime.substring(0,10) + "</td></tr>" ;
           
        });
        
        
         $('#select_d').append(outp);
        /*
        $('#records_table').append(trHTML);
       $('#username').text(data["username"]);
       $('#phone').text(data["mobileNumber"]);
       $('#email').text(data["email"]);
   */
	 

  


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













function put_driver(d_id) {
 
     
 
 

    $.ajax({
        type: "GET",
       // contentType: "application/json",
        url: "/driver/" +d_id ,
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
	glo = data;
  $("#driver_name").prop("readonly", true);
   $("#driver_mobile").prop("readonly", true);
   
    $("#driver_name").val(data.username);
    $("#driver_mobile").val(data.mobileNumber);
    $("#driver_star").val(data.rating);
    
    
    
    
    
   
   
console.log("tra");
console.log(glo);
        },
        error: function (e) {

            

        }
    });

}



function rating_update() {
 
     

 
 glo["rating"] =  $("#driver_star").val();
 
 console.log("check");
 console.log(glo);
 
    $.ajax({
        type: "PUT",
       contentType: "application/json",
        url: "/driver",
       data: JSON.stringify(glo),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
	console.log(data);
 showAndDismissAlert('success', 'Driver Rating Updated Successfully');
 
   

        },
        error: function (e) {

        showAndDismissAlert('danger', 'Error in Updating Driver rating!!! ');

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





/*




function fire_ajax_submit() {
 
   
     var uid = sessionStorage.getItem("user_id") ;
 
     
 
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "GET",
       // contentType: "application/json",
        url: "/tripbooking/" +uid ,
      //  data: uid,
       
        cache: false,
        timeout: 600000,
        success: function (data) {
	console.log(data);
     		 var trHTML = '';
        var inp='';
          $.each(data, function (i, item) {
		inp = '<input type="text" id=""'
	
          trHTML += '<tr><td>' + item.driver.username + '</td><td>' + item.driver.mobileNumber +'</td><td>' + item.toLocation  + '</td><td>' + item.fromDateTime.substring(0,10) + "</td></tr>" ;
           
        });
        
        
 
  

 
            
         
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

*/
 