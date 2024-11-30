package ca.ucalgary.ensf480.Account;

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
    }


