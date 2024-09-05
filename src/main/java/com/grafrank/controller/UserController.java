package com.grafrank.controller;

import com.grafrank.model.User;
import com.grafrank.model.Account;
import com.grafrank.model.Admin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private List<String> users = new ArrayList<>();
    @GetMapping
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();

        Admin john = new Admin();
        Account jane = new Account();
        jane.setUsername("janey");

        users.add(john);
        users.add(jane);

        return users;
    }
    @PostMapping
    public String createUser(@RequestBody String user) {
        users.add(user);
        return "User created: " + user;
    }
    @DeleteMapping("/{user}")
    public String deleteUser(@PathVariable String user) {
        if (users.contains(user)) {
            users.remove(user);
            return "User deleted: " + user;
        }
        return "User not found";
    }
}
