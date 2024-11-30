package ca.ucalgary.ensf480.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;





@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Movies")
public class MovieController {

    private final MovieServices movieServices;

    @Autowired
    public MovieController(MovieServices movieServices) {
        this.movieServices = movieServices;
    }

    // Get all movies
    @GetMapping
    public Iterable<Movies> getAllMovies() {
        return movieServices.getAllMovies();
    }
    
    // Get a movie by title
    @GetMapping("/{title}")
    public Movies searchMovie(@PathVariable String title) {
        return movieServices.getMovieByTitle(title);
    }
    
    

    
        
}
