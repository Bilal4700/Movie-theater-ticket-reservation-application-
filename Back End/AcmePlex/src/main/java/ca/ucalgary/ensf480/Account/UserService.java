package ca.ucalgary.ensf480.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
    private final UserRepository userRepository;
	
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public String registeredUsers(User user) {
    	
    	if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Email already exists";
        }
        
        System.out.println("Saving user: " + user.getUsername());
        userRepository.save(user);
    	return "Account Created Successfully";
    }
    
    public boolean verifyLogin(User user) {
    	if(userRepository.findByEmail(user.getEmail()) != null && userRepository.findByPassword(user.getpassword()) != null) {
    		return true;
    	}
    	return false;
    }
}
