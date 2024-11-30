package ca.ucalgary.ensf480.Movie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MovieRepository extends JpaRepository<Movies, String> {
	Movies findByTitle(String title); 
	Movies findByDate(String date);
	Movies findByTime(String time);
}