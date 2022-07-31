$(document).ready(function () {
  
    $("#login_submit").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        fire_ajax_submit();
	    
    });

});

function fire_ajax_submit() {
/*
    var search = {}
    search["username"] = $("#username").val();
    //search["email"] = $("#email").val();
*/
	   var search = {};
    search["username"] = $("#username").val();
     search["password"] = $("#password").val();
     var user_type =$('#usert').val().trim();

 
	var my_url = "";
	var redir = "";
	
	if(user_type == "admin"){
		
	my_url = "/admin/login";
	redir = "/admin_dashboard";
	}
	
	if(user_type == "customer"){
	my_url = "/customer/login";
	redir = "/SelectionPage";
	}
	
	if(user_type == "driver"){
	my_url = "/driver/login";
	 redir = "/driver_home";
	 
	}
	
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: my_url,
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 console.log(data);
   if(data=="login success"){
	console.log("logon");
	set_session(search,user_type);
	$(location).prop('href', redir)

}else{
	console.log(data);
	console.log(my_url);
	console.log(search);
		console.log("hatt");

}
            
         
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

function set_session(search,user_type){
   
     
   console.log(search);
    console.log(user_type);
     
     
       $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/"+user_type+"/getid",
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 
   console.log(data);
 
     sessionStorage.setItem("user_id",data);
	 sessionStorage.setItem("user_name",search["username"]);
	 
	 console.log(sessionStorage.getItem("user_id"));
	 
 
 
  
            
    
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