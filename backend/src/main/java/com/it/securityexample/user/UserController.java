package com.it.securityexample.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> userRegister(@RequestBody UserEntity user) {
        if (userService.saveUser(user) != null) {
            return new ResponseEntity<>("User Registered Successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Oops! User not registered", HttpStatus.OK);
        }
    }

}
