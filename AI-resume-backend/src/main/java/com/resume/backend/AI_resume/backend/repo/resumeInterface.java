package com.resume.backend.AI_resume.backend.repo;

import org.json.JSONObject;

import java.io.IOException;

public interface resumeInterface {
    String generateResume(JSONObject formData) throws IOException;
}
