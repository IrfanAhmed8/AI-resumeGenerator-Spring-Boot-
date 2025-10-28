package com.resume.backend.AI_resume.backend.controller;

import com.resume.backend.AI_resume.backend.model.SignIn;
import com.resume.backend.AI_resume.backend.model.UserRequest;
import com.resume.backend.AI_resume.backend.model.UserResponse;
import com.resume.backend.AI_resume.backend.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

    private final Userservice userservice;

    @Autowired
    public UserController(Userservice userservice) {
        this.userservice = userservice;
    }

    @PostMapping("/register")
    public UserResponse register(@RequestBody UserRequest request){
        return userservice.register(request);
    }
    @PostMapping("/signIn")
    public Map<String, String> signIn(@RequestBody SignIn request) {
        String name = userservice.signIn(request); // suppose this returns user’s name
        Map<String, String> response = new HashMap<>();
        response.put("name", name);
        return response;
    }

}
