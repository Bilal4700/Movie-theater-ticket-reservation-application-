package ca.ucalgary.ensf480.Movie;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ca.ucalgary.ensf480.Movie.MovieRepository;
import ca.ucalgary.ensf480.Movie.Movies;


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
    
    public String refundSeat(String movieTitle, int seatNumber) {
        Movies movie = movieRepository.findByTitle(movieTitle);
        if (movie == null) {
            throw new IllegalArgumentException("Movie not found");
        }

        String seats = movie.getSeats();

        // Filter out the refunded seat
        String updatedSeats = Arrays.stream(seats.split(","))
                .filter(seat -> !seat.equals(String.valueOf(seatNumber)))
                .collect(Collectors.joining(","));

        // Update seats in the database
        movie.setSeats(updatedSeats.isEmpty() ? null : updatedSeats);
        movieRepository.save(movie);

        return updatedSeats.isEmpty() ? "null" : updatedSeats;
    }

    
    
}
