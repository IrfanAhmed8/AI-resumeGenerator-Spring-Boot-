package com.resume.backend.AI_resume.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {
    @GetMapping("/")
    public String hello(){
        return "hello world";
    }
}
