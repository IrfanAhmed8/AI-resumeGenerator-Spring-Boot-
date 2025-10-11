package com.resume.backend.AI_resume.backend.parser;

import org.springframework.stereotype.Component;

@Component
public class ExtractResume {
    public String extractResume(String modelResponse) {
        if (modelResponse == null || modelResponse.isEmpty())
            return "";

        // Use replaceAll() to apply regex
        String resumeContent = modelResponse.replaceAll("(?s)<think>.*?</think>", "").trim();
        return resumeContent;
    }
}
