$(document).ready(function () {
  
  
  console.log(console.log(sessionStorage.getItem("user_name")));
  
    $("#book_ride").submit(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();
     
      fire_ajax_submit();
	    
	
	  
    });
    
    
		
		  $("#source").click(function (event) {

      
        var source_type =$('#source').val().trim();
       
        if(source_type =="delhi"){
		var newOptions = {
			"Select Destination" :	"destination",
		"Dehradun" :	"dehradun",
 		 "Rishikesh"  : 	"rishikesh",
  			"Jaipur" : "jaipur"	 
			};
			
			var $el = $("#destination");
			$el.empty(); 
			$.each(newOptions, function(key,value) {
 			$el.append($("<option></option>").attr("value", value).text(key));
			});
			
			
		}
	 
	  if(source_type =="dehradun"){
				var newOptions = {
			"Select Destination" :	"destination",
		"Mussoorie" :	"mussoorie" ,
 		 "Nainital ":	"nainital",
  		"Kedarnath ":	"kedarnath"	
			};
			
			var $el = $("#destination");
			$el.empty(); 
			$.each(newOptions, function(key,value) {
 			$el.append($("<option></option>").attr("value", value).text(key));
			}); 
		}
		
		 if(source_type =="haldwani"){
				 
				 
				 	var newOptions = {
			"Select Destination" :	"destination",
			"Delhi"	:"delhi" ,
 			 "Nainital "	:"nainital" ,
  			"Chandigarh " :	"chandigarh"	
			};
			
			var $el = $("#destination");
			$el.empty(); 
			$.each(newOptions, function(key,value) {
 			$el.append($("<option></option>").attr("value", value).text(key));
			}); 
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
	var cus = sessionStorage.getItem("user_name");
	var cus_id = sessionStorage.getItem("user_id");
	
	var car_type =   $('#c_type').val().trim();
	     
	   
	search["customer"] ={
		"customerId" : cus_id,
		"username"  : cus
	};  
	
	   
    search["fromLocation"] = $('#source').val().trim();
    
     search["toLocation"] = $('#destination').val().trim();
       search["fromDateTime"] = $('#datetime').val();
     search["status"] = 0;
     
   
     var out = count_cost(car_type,search);
    	
    	search["driver"] ={
		"driverId" : out["cid"]
		 
	};  
     
    search["toDateTime"] = addDays(search["fromDateTime"]);
    console.log(addDays(search["fromDateTime"] ));
    
    search["distanceInKm"] = out["dist"];
    
    search["bill"] = out["cost"];
    
    console.log(search);
    
    
    
    
 

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/tripbooking",
        data: JSON.stringify(search),
       
        cache: false,
        timeout: 600000,
        success: function (data) {
   
    
  
	console.log("hello" + search);
  console.log(data);
  
  $("#es_dist").html(search["distanceInKm"]);
   $("#es_time").html(search["bill"]);
 // $(location).prop('href', redir);
  
  
  
  
  
  
  //check 
    showAndDismissAlert('success', 'Booking Successful!');
  
  
  
  
  
  
   
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            
       
    		showAndDismissAlert('danger', 'Error! Please try again!!! ');

            console.log("ERROR : ", e);
      
            
            
            
            
            

        }
    });
     



}

 




function count_cost(car_type,search){
	var out ={};
	
	var car ={
		"micro" : 15,
		"mini" : 17,
		"suv" : 18
	};
	console.log(search);
	console.log("count");
	
	if(search["fromLocation"]=="delhi"){
		
		if(search["toLocation"] == "dehradun"){
			out["cost"] = 244 * car[car_type];
			out["dist"] = 244;
			out["cid"] = 5;
		}
		
			if(search["toLocation"] == "rishikesh"){
			out["cost"] = 246 * car[car_type];
			out["dist"] = 246;
			out["cid"] = 4;
		}
		
		
			if(search["toLocation"] == "jaipur"){
			out["cost"] = 310 * car[car_type];
			out["dist"] = 310;
			out["cid"] = 6;
		}
		
		return out;
		
	}
	
	
		if(search["fromLocation"]=="dehradun"){
		
		if(search["toLocation"] == "mussoorie"){
			out["cost"] = 33 * car[car_type];
			out["dist"] = 33;
			out["cid"] = 1;
		}
		
			if(search["toLocation"] == "nainital"){
			out["cost"] = 301 * car[car_type];
			out["dist"] = 301;
			out["cid"] = 2;
		}
		
		
			if(search["toLocation"] == "kedarnath"){
			out["cost"] = 254 * car[car_type];
			out["dist"] = 254;
			out["cid"] = 8;
		}
		
		return out;
		
	}
	
	
		if(search["fromLocation"]=="haldwani"){
		
		if(search["toLocation"] == "delhi"){
			out["cost"] = 296 * car[car_type];
			out["dist"] = 296;
			out["cid"] = 11;
		}
		
			if(search["toLocation"] == "nainital"){
			out["cost"] = 42 * car[car_type];
			out["dist"] = 42;
			out["cid"] = 2;
		}
		
		
			if(search["toLocation"] == "chandigarh"){
			out["cost"] = 447 * car[car_type];
			out["dist"] = 447;
			out["cid"] = 4;
		}
		
		return out;
		
	}


	
}



function addDays(datee) {
  var result = new Date(datee);
  result.setDate(result.getDate() + 1);
  return result.toISOString();
}






function showAndDismissAlert(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}