package com.resume.backend.AI_resume.backend.service;

import com.resume.backend.AI_resume.backend.model.SignIn;
import com.resume.backend.AI_resume.backend.model.User;
import com.resume.backend.AI_resume.backend.model.UserRequest;
import com.resume.backend.AI_resume.backend.model.UserResponse;
import com.resume.backend.AI_resume.backend.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class Userservice {

    private final UsersRepo usersRepo;

    @Autowired
    public Userservice(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;
    }

    public UserResponse register(UserRequest request) {
        // Create a new user entity
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword()) // you can hash it later
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        // Save to MongoDB
        User savedUser = usersRepo.save(user);

        // Prepare response
        UserResponse response = new UserResponse();
        response.setId(savedUser.getId());
        response.setName(savedUser.getName());
        response.setEmail(savedUser.getEmail());
        response.setCreatedAt(savedUser.getCreatedAt());
        response.setUpdatedAt(savedUser.getUpdatedAt());

        return response;
    }

    public String signIn(SignIn request) {
        // Find user by email
        User user = usersRepo.findByEmail(request.getEmail())
                .orElse(null);

        // If user not found or password doesn't match
        if (user == null || !user.getPassword().equals(request.getPassword())) {
            return "Invalid email or password";
        }

        // Successful login — return user's name
        return user.getName();
    }
}
