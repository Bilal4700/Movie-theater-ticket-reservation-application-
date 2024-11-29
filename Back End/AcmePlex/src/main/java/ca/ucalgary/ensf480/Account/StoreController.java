package ca.ucalgary.ensf480.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StoreController {

	@Autowired
    private final UserService userService;

    public StoreController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        String result = userService.registeredUsers(user);

        if ("Username already exists".equals(result) || "Email already exists".equals(result)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(result);
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}
