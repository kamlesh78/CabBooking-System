$(document).ready(function () {
  var use_this;
   var pas="";
    var micro= 100;
            
     var mini =  101;
            
            
     var suv = 102;
            
            
                   
       console.log(sessionStorage.getItem("user_id"));

           $("#updd").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
 
 		update_cus();
	    
    });

   $("#logout").click(function(){
   sessionStorage.removeItem("user_id");
});


   $("#finduser").click(function(){
   var u_id = $("#cabTy").val();
    console.log(u_id);
    
    if(u_id== micro){
	fetch_cab(micro);
	//fire_ajax_submit(fetch_cab(micro));
		}
		  if(u_id== mini){
			fetch_cab(mini);
//	fire_ajax_submit(fetch_cab(mini));
		}
		
		if(u_id== suv){
			fetch_cab(suv);
	//fire_ajax_submit(fetch_cab(suv));
		}
   
   
});



});

function fire_ajax_submit(carD) {
/*
    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();
*/

use_this = carD;
 $("#cus").prop("readonly", true);
 $("#customerName").prop("readonly", true);
 		$("#cus").val(carD.cabId);
     	$("#customerName").val(carD.carType);
     	$("#customerEmail").val(carD.perKmRate);
     
 
    $("#btn-search").prop("disabled", true);

   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

}


 function  update_cus(){
		
		
		
		 use_this["perKmRate"]  =$("#customerEmail").val();
			
     	
      
	 
	  $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "/cab",
        data: JSON.stringify(use_this),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
      
 
        console.log(data);
  
 // fire_ajax_submit(search["customerId"]);
  
  
  showAndDismissAlert('success', 'Cab Details Updated Successfully');
  
  
   
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

           showAndDismissAlert('danger', 'Error in Updating Cab Details!!! ');

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });
}


function fetch_cab(cabtId){
	
	 
	  $.ajax({
        type: "GET",
    //    contentType: "application/json",
        url: "/cab/"+cabtId,
   //     data: JSON.stringify(use_this),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
      
 
        console.log( data);
 
  	 fire_ajax_submit(data);
   
   

        },
        error: function (e) {

           showAndDismissAlert('danger', ' Cab Details Not Found!!! ');


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