package com.cg.mts.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

 
    @GetMapping("/")
    public String index() {
        return "WelcomePage.html";
    }
    
    @GetMapping("/Register")
    public String register() {
        return "Register.html";
    }
    
    @GetMapping("/ForgetPassword")
    public String forgerpass() {
        return "ForgetPassword.html";
    }
    
    @GetMapping("/HomePage")
    public String home_page() {
        return "HomePage.html";
    }
    
    @GetMapping("/SelectionPage")
    public String selection_page() {
        return "SelectionPage.html";
    }
    
    @GetMapping("/UserProfile")
    public String userprofile_page() {
        return "UserProfile.html";
    }
    
    
    
    @GetMapping("/RideHistory")
    public String ridehistory_page() {
        return "RideHistory.html";
    }
    
    
    @GetMapping("/admin_dashboard")
    public String admin_homepage() {
        return "admin/admin-dashboard.html";
    }
    
    
    @GetMapping("/customer_details")
    public String admin_customerhomepage() {
        return "admin/customer.html";
    }
    
    
    @GetMapping("/driver_details")
    public String admin_driverhomepage() {
        return "admin/driver.html";
    }
    
    
    @GetMapping("/booking")
    public String booking_homepage() {
        return "Booking.html";
    }
    
    
    @GetMapping("/customer_tripdetails")
    public String customer_detailpage() {
        return "admin/customer_details.html";
    }
    
    
    @GetMapping("/driver_tripdetails")
    public String driver_detailpage() {
        return "admin/driver_details.html";
    }
    
    
    @GetMapping("/customer_detailupdate")
    public String customer_updatepage() {
        return "admin/customer_update.html";
    }
    
    @GetMapping("/driver_detailupdate")
    public String driver_updatepage() {
        return "admin/driver_update.html";
    }
    
    @GetMapping("/driver_home")
    public String driver_profile_page() {
        return "DriverProfile.html";
    }
    
    @GetMapping("/DriverRideHistory")
    public String driver_ridehistory_page() {
        return "DriverRideHistory.html";
    }
    
    @GetMapping("/best_driver")
    public String driver_bestdriver_page() {
        return "best_driver.html";
    }
    
    @GetMapping("/cab_detailupdate")
    public String cab_updatepage() {
        return "admin/cab_update.html";
    }
    
    @GetMapping("/customer_feedback")
    public String customer_feedback() {
        return "feedback.html";
    }
    
    @GetMapping("/driver_feedback")
    public String driverstar_feedback() {
        return "driver_feedback.html";
    }
}