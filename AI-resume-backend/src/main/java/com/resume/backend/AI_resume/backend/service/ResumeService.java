package com.resume.backend.AI_resume.backend.service;
import com.resume.backend.AI_resume.backend.repo.resumeInterface;
import org.json.JSONObject;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import com.resume.backend.AI_resume.backend.parser.DeepSeekResponseParser;

import java.io.IOException;
import java.util.Map;

@Service
public class ResumeService implements resumeInterface {

   private ChatClient chatClient;

    @Autowired
    private DeepSeekResponseParser deepSeekResponseParser;

    public ResumeService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }
    @Override
    public String generateResume(JSONObject formData) throws IOException {

        // 1️⃣ Load template from file
        String resumeTemplate = this.loadFile("resume_template.txt");

        // 2️⃣ Replace placeholders with form data values

        String filledTemplate = putPromptToTemplate(resumeTemplate, formData.toMap());

        // 3️⃣ Send to AI model
        Prompt aiPrompt = new Prompt(filledTemplate);
        String response = chatClient.prompt(aiPrompt).call().content();

        // 4️⃣ Parse response JSON

        return response;
    }

    private String loadFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        try (var inputStream = resource.getInputStream()) {
            return new String(inputStream.readAllBytes());
        }
    }

    private String putPromptToTemplate(String template, Map<String, Object> values) {
        for (Map.Entry<String, Object> entry : values.entrySet()) {
            template = template.replace("{{" + entry.getKey() + "}}", entry.getValue().toString());
        }
        return template;
    }
}
