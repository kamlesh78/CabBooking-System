$(document).ready(function () {
  
    $("#register").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();
	    
    });
		
		  $("#select_user").click(function (event) {

        //stop submit the form, we will post it manually.
       

        var user_type =$('#select_user').val().trim();
        if(user_type =="driver"){
	$("#chg").css("visibility", "visible");
	$("#chg").css("max-height", "100px");
}else{
	$("#chg").css("visibility", "hidden"); 
	$("#chg").css("max-height", "0");
	
}
	    
    });
		
});

function fire_ajax_submit() {
/*
    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();
*/
	   var search = {};
    search["username"] = $("#user").val();
     search["password"] = $("#pass").val();
     search["email"] = $("#email").val();
     search["mobileNumber"] = $("#phno").val();
     console.log(search["mobile_number"]);
     var user_type =$('#select_user').val().trim();
     console.log(user_type);
    
    
    
     if(user_type == "driver"){
	console.log("huwehuwheuweh");
	     var car_type =$('#car_type').val().trim();
		var car_id="";
		if(car_type="micro"){
			car_id=100;
		}  
		if(car_type="mini"){
			car_id=101;
		} 
		if(car_type="suv"){
			car_id=102;
		} 
			    search["cab"] = {"cabId":car_id};

	    search["licenseNo"] = $("#license_no").val();
	    search["rating"] = 0;
	   
		search["status"] = 0;
console.log(search["license_no"]);
console.log(car_id);
}
     
console.log(user_type);
	console.log("this"+ user_type);
	var my_url = "";
	var redir = "/";
	
	 
	
	if(user_type == "customer"){
	my_url = "/customer";
	 
	}
	
	if(user_type == "driver"){
	my_url = "/driver";
	  
	}
	
   

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: my_url,
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
/* 
   if(data=="login success"){
	console.log("logon");
	set_session(search,user_type);
	$(location).prop('href', redir);

}else{
	console.log(data);
	console.log(my_url);
	console.log(search);
		console.log("hatt");

}
            
  */      
  console.log(my_url);
	console.log(search);
  console.log(data);
 // $(location).prop('href', redir);
  
  
  
      showAndDismissAlert('success', 'User Registered Successfully!');

  
  
   
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

               		showAndDismissAlert('danger', 'Error! Please try again!!! ');


            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}

function set_session(search,user_type){
   
     
    
     
       $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/"+user_type+"/getid",
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 
   
 
     sessionStorage.setItem("user_id",data);
	 sessionStorage.setItem("user_name",search["username"]);
 
 
  
            
         
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