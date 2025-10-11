package com.resume.backend.AI_resume.backend.service;

import com.resume.backend.AI_resume.backend.parser.DeepSeekResponseParser;
import com.resume.backend.AI_resume.backend.repo.promptInterface;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class PromptService implements promptInterface {

    private static final Logger logger = LoggerFactory.getLogger(PromptService.class);

    private ChatClient chatClient;

    @Autowired
    private DeepSeekResponseParser deepSeekResponseParser;

    public PromptService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public JSONObject generateResumeResponse(String prompt) {
        try {
            String promptDescription = this.loadFile("resume_description.txt");
            String fixPromptDescription = this.putPromptToTemplate(promptDescription, Map.of(
                    "userDescription", prompt
            ));

            // Create prompt and get response
            Prompt prompt1 = new Prompt(fixPromptDescription);
            String response = chatClient.prompt(prompt1).call().content();

            logger.info("Raw AI Response: {}", response);

            if (response == null || response.trim().isEmpty()) {
                logger.error("Empty response from AI service");
                return createErrorResponse("Empty response from AI service");
            }

            DeepSeekResponseParser.ParsedResponse parsed = deepSeekResponseParser.parseResponse(response);

            logger.info("=== THINK ===");
            logger.info(parsed.getThink());
            logger.info("=== JSON ===");

            // Ensure we always return a valid JSONObject
            JSONObject jsonObject = parsed.getJsonObject();
            if (jsonObject == null) {
                logger.warn("Parsed JSON object is null, returning empty JSON");
                return createErrorResponse("Failed to parse AI response");
            }

            return jsonObject;

        } catch (Exception e) {
            logger.error("Error generating resume response: {}", e.getMessage(), e);
            return createErrorResponse("Error processing request: " + e.getMessage());
        }
    }

    private JSONObject createErrorResponse(String errorMessage) {
        JSONObject errorResponse = new JSONObject();
        errorResponse.put("error", true);
        errorResponse.put("message", errorMessage);
        errorResponse.put("timestamp", System.currentTimeMillis());
        return errorResponse;
    }

    public String loadFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        try (var inputStream = resource.getInputStream()) {
            return new String(inputStream.readAllBytes());
        }
    }

    String putPromptToTemplate(String template, Map<String,String> values) {
        for(Map.Entry<String,String> entry:values.entrySet()) {
            template = template.replace("{{"+entry.getKey()+"}}", entry.getValue());
        }
        return template;
    }
}