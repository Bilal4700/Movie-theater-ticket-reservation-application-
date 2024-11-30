package ca.ucalgary.ensf480.Account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
 // Endpoint to fetch a user's details by their username
    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    }