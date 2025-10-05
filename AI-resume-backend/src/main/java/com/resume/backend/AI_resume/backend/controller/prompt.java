package com.resume.backend.AI_resume.backend.controller;

import com.resume.backend.AI_resume.backend.service.PromptService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/getResponse")
public class prompt {
    @Autowired
    PromptService promptService;



    @GetMapping("/prompt")
    public String generateResumeResponse(@RequestParam String prompt) throws IOException {
        JSONObject response = promptService.generateResumeResponse(prompt);
        return response.toString(4); // pretty print JSON
    }



}
