package ca.ucalgary.ensf480.Account;

import java.util.List;

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

    public User getUserByUsername(String username) {
        // Fetch the user from the repository
        return userRepository.findByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public String updateTickets(String email,String newTicket) {
    	User user = userRepository.findByEmail(email);
    	String oldTickets = user.getTickets();
    	if(oldTickets == null || oldTickets.isEmpty()) {
    		user.setTickets(newTicket);
    	}else {
    		user.setTickets(oldTickets + ","+ newTicket);
    	}
    	userRepository.save(user);
    	return user.getTickets();
    }

}