package ca.ucalgary.ensf480.Movie;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "movies")
public class Movies {
    @Id
    @Column(name = "Title")
    private String title;
    
    @Column(name = "Date")
    private String date;
    
    @Column(name = "Time")
    private String time;
    
    @Column(name = "Seats")
    private String seats;
    
    public Movies() {}

    public Movies(String title, String date, String time, String seats) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.seats = seats;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
    
    public void setSeats(String seats) {
    	this.seats = seats;
    }
    
    public String getSeats() {
    	return seats;
    }
    
}