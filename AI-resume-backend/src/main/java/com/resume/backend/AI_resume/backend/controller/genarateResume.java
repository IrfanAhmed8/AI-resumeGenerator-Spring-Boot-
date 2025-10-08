package com.resume.backend.AI_resume.backend.controller;

import com.resume.backend.AI_resume.backend.service.ResumeService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/generateResume")
@CrossOrigin
public class genarateResume {
    @Autowired
   ResumeService resumeService;
    @PostMapping("/resume")
    public String generate(@RequestBody Map<String, Object> formData) throws IOException {
        JSONObject jsonObject = new JSONObject(formData);
        return resumeService.generateResume(jsonObject);
    }
}
