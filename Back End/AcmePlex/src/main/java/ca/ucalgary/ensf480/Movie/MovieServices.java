package ca.ucalgary.ensf480.Movie;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MovieServices {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieServices(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Iterable<Movies> getAllMovies() {
        return movieRepository.findAll();
    }
    
    public Movies getMovieByTitle(String title) {
        return movieRepository.findByTitle(title);
    }
    
    
    
}
