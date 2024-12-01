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
    
    public String updateSeats(String title, String newSeat) {
    	
    	Movies movie =movieRepository.findByTitle(title);
    	String bookedSeats = movie.getSeats();
    	if(bookedSeats == null || bookedSeats.isEmpty()) {
    		movie.setSeats(newSeat);
    	}
    	else {
    		movie.setSeats(bookedSeats + "," + newSeat);
    	}
    	
    	movieRepository.save(movie);
    	
    	return movie.getSeats();
    	
    }
    
    
}
