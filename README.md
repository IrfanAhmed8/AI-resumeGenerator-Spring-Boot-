# AI Resume Generator

AI-powered resume builder with a Java Spring Boot backend and a React + Vite frontend.  
Backend extracts structured resume data from a user prompt via an AI API; frontend lets users review/edit,chosse from from multiple templates and download resumes.

## Quick links
- Backend main: [AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/AiResumeBackendApplication.java](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/AiResumeBackendApplication.java)  
- Backend controller (prompt): [`com.resume.backend.AI_resume.backend.controller.prompt.generateResumeResponse`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/controller/prompt.java)  
- Backend service (AI call): [`com.resume.backend.AI_resume.backend.service.PromptService.generateResumeResponse`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/service/PromptService.java)  
- Gemini parser: [AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/GeminiResponseParser.java](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/GeminiResponseParser.java)  
- DeepSeek parser: [AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/DeepSeekResponseParser.java](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/DeepSeekResponseParser.java)  
- Backend config: [AI-resume-backend/src/main/resources/application.properties](AI-resume-backend/src/main/resources/application.properties)  
- Frontend entry: [AI-Resume-Generator-Frontend/src/main.jsx](AI-Resume-Generator-Frontend/src/main.jsx)  
- Frontend API client: [`generateFormData`](AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js) in [AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js](AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js)  
- Frontend form context: [`FormProvider` / `useForm`](AI-Resume-Generator-Frontend/src/context/formContext.jsx) in [AI-Resume-Generator-Frontend/src/context/formContext.jsx](AI-Resume-Generator-Frontend/src/context/formContext.jsx)  
- Frontend Dynamic Form: [AI-Resume-Generator-Frontend/src/pages/DynamicForm.jsx](AI-Resume-Generator-Frontend/src/pages/DynamicForm.jsx)  
- Build files: [AI-resume-backend/pom.xml](AI-resume-backend/pom.xml), [AI-Resume-Generator-Frontend/package.json](AI-Resume-Generator-Frontend/package.json)

## Architecture (high level)
- Backend:
  - REST controller: [`com.resume.backend.AI_resume.backend.controller.prompt`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/controller/prompt.java) receives prompts.
  - Service: [`PromptService`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/service/PromptService.java) builds prompt from template and calls the AI API.
  - Parsers: [`GeminiResponseParser`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/GeminiResponseParser.java) and [`DeepSeekResponseParser`](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/parser/DeepSeekResponseParser.java) extract JSON.
  - Persistence: Mongo repository [AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/repo/UsersRepo.java](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/repo/UsersRepo.java) and models under [AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/model/](AI-resume-backend/src/main/java/com/resume/backend/AI_resume/backend/model/).

- Frontend:
  - Vite + React app in [AI-Resume-Generator-Frontend/](AI-Resume-Generator-Frontend/).
  - API calls via [`generateFormData`](AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js).
  - Form state via [`FormProvider` / `useForm`](AI-Resume-Generator-Frontend/src/context/formContext.jsx).
  - Pages: prompt input -> extract -> edit in [DynamicForm](AI-Resume-Generator-Frontend/src/pages/DynamicForm.jsx) -> templates -> resume preview/download.

## Run locally

Prerequisites:
- Java 17+, Maven wrapper (included)
- Node 18+
- MongoDB running at the URI in [application.properties](AI-resume-backend/src/main/resources/application.properties)

Start backend:
- Unix/macOS:
  - ./mvnw spring-boot:run
- Windows:
  - mvnw.cmd spring-boot:run
The backend reads AI endpoint and key from [application.properties](AI-resume-backend/src/main/resources/application.properties). Ensure MongoDB is reachable (default uri: mongodb://localhost:27017/resumeDB).

Start frontend:
- cd AI-Resume-Generator-Frontend
- npm install
- npm run dev
Open http://localhost:5173 (Vite default) or as printed by the dev server.

Run backend tests:
- ./mvnw test (or mvnw.cmd test)

## Important files to edit
- Prompt template: [AI-resume-backend/src/main/resources/resume_description.txt](AI-resume-backend/src/main/resources/resume_description.txt) — modify extraction template here.
- AI config / keys: [AI-resume-backend/src/main/resources/application.properties](AI-resume-backend/src/main/resources/application.properties) — replace the API key/URL with your valid credentials or use environment injection.
- Frontend API base: [AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js](AI-Resume-Generator-Frontend/src/api/ResumeGenerator.js) — adjust BASE_URL if backend runs on a different host/port.


## License & contribution
This repository is a development starter. Sanitize secrets before publishing and add tests for parsers and API flows. Contributions via PRs are welcome.
