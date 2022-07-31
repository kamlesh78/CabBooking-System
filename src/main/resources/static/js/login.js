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
 
    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/customer/login",
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 /*
            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
         
   */
   if(data=="login success"){
	console.log("logon");
	set_session(search);
	//$(location).prop('href', '/SelectionPage')

}else{
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

function set_session(search){
   
     
    
     
       $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/customer/login/getid",
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
 /*
            var json = "<h4>Ajax Response</h4><pre>"
                + JSON.stringify(data, null, 4) + "</pre>";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
         
   */
   
	console.log(data);
	
	//$(location).prop('href', '/SelectionPage')
 
  
            
         
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