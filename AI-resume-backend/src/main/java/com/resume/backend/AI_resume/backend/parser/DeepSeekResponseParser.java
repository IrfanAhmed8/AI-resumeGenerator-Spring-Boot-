package com.resume.backend.AI_resume.backend.parser;

import org.json.JSONObject;
import org.springframework.stereotype.Component;

@Component
public class DeepSeekResponseParser {

    public static class ParsedResponse {
        private String think;
        private JSONObject jsonObject;

        public ParsedResponse(String think, JSONObject jsonObject) {
            this.think = think;
            this.jsonObject = jsonObject;
        }

        public String getThink() {
            return think;
        }

        public JSONObject getJsonObject() {
            return jsonObject;
        }

        @Override
        public String toString() {
            return "Think:\n" + think + "\n\nJSON:\n" + jsonObject.toString(4);
        }
    }

    public static ParsedResponse parseResponse(String response) {
        String thinkContent = "";
        JSONObject json = null;

        try {
            // Extract <think>...</think> part
            int thinkStart = response.indexOf("<think>");
            int thinkEnd = response.indexOf("</think>");

            if (thinkStart != -1 && thinkEnd != -1) {
                thinkContent = response.substring(thinkStart + 7, thinkEnd).trim();
            }

            // Extract JSON part (after </think>)
            String jsonPart = response.substring(thinkEnd + 8).trim();

            // Handle cases with extra characters before JSON
            int firstBrace = jsonPart.indexOf("{");
            if (firstBrace != -1) {
                jsonPart = jsonPart.substring(firstBrace);
            }

            json = new JSONObject(jsonPart);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return new ParsedResponse(thinkContent, json);
    }

}

