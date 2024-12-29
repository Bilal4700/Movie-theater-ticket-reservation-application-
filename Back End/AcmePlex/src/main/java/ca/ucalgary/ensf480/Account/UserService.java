package ca.ucalgary.ensf480.Account;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import ca.ucalgary.ensf480.Movie.MovieRepository;
import ca.ucalgary.ensf480.Movie.Movies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;
    private final MovieRepository movieRepository;


    public UserService(UserRepository userRepository, MovieRepository movieRepository) {
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
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
    
    public String updateTickets(String email, String newTicket, String movieTitle) {
        Movies movie = movieRepository.findByTitle(movieTitle);
        if (movie == null) {
            throw new IllegalArgumentException("Movie with title '" + movieTitle + "' not found");
        }
        String ticketName = movie.getTitle() + " Seat number " + newTicket;
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("User with email '" + email + "' not found");
        }

        String oldTickets = user.getTickets();
        if (oldTickets == null || oldTickets.isEmpty()) {
            user.setTickets(ticketName);
        } else {
            user.setTickets(oldTickets + "," + ticketName);
        }

        userRepository.save(user);
        return user.getTickets();
    }
    
    public String refundTicket(String email, String movieTitle, int seatNumber) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new IllegalArgumentException("User not found");
        }

        String tickets = user.getTickets();

        String updatedTickets = Arrays.stream(tickets.split(","))
                .filter(ticket -> !ticket.equals(movieTitle + " Seat number " + seatNumber))
                .collect(Collectors.joining(","));

        user.setTickets(updatedTickets.isEmpty() ? null : updatedTickets);
        userRepository.save(user);

        return updatedTickets.isEmpty() ? "null" : updatedTickets;
    }



}