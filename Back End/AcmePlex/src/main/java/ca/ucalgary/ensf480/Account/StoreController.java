package ca.ucalgary.ensf480.Account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class StoreController {

    @Autowired
    private final UserService userService;

    public StoreController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        String result = userService.registeredUsers(user);

        if ("Username already exists".equals(result) || "Email already exists".equals(result)) {
            return result;
        }

        return "Account Created Successfully";
    }

    @PostMapping("/logged")
    public String login(@RequestBody User user) {
        // Validate the credentials
            boolean Verified = userService.verifyLogin(user);
            if(Verified) {
                return "Login Successful!";
            }else {
                return"Invalid email or password!";
            }


        }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    
    @GetMapping("/users/email/{email}")
    public User getUserByEmail(@PathVariable String email) {
        User user = userService.findByEmail(email);
        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        return user;
    }

    }