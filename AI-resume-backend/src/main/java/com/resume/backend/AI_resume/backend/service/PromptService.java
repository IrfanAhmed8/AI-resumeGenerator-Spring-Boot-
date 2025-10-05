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
@Service
public class PromptService implements promptInterface {
    private ChatClient chatClient;
    @Autowired
    private DeepSeekResponseParser deepSeekResponseParser;
    public PromptService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    @Override
    public JSONObject generateResumeResponse(String prompt) throws IOException {

        String promptDescription = this.loadFile("resume_description.txt");


        String fixPromptDescription = this.putPromptToTemplate(promptDescription, Map.of(
                "userDescription", prompt
        ));

        // Create prompt
        Prompt prompt1 = new Prompt(fixPromptDescription);
        String response = chatClient.prompt(prompt1).call().content();


        DeepSeekResponseParser.ParsedResponse parsed = deepSeekResponseParser.parseResponse(response);

        // You can log or debug to verify
        System.out.println("=== THINK ===");
        System.out.println(parsed.getThink());
        System.out.println("=== JSON ===");
        System.out.println(parsed.getJsonObject().toString(4));

        // Return only JSON part (you can change this if you also want to return think part)
        return parsed.getJsonObject();
    }
    public String loadFile(String filename) throws IOException {
        ClassPathResource resource = new ClassPathResource(filename);
        try (var inputStream = resource.getInputStream()) {
            return new String(inputStream.readAllBytes());
        }
    }

    String putPromptToTemplate(String template, Map<String,String> values){
        for(Map.Entry<String,String> entry:values.entrySet()){
            template=template.replace("{{"+entry.getKey()+"}}",entry.getValue());
        }
        return template;
    }
}
