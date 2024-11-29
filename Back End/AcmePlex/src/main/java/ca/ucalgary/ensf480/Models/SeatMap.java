package ca.ucalgary.ensf480.Models;

public class SeatMap {
    private Seat[] seats;

    public SeatMap() {
        seats = new Seat[20];  // Initialize a fixed-size array of 20 seats
        for (int i = 0; i < 20; i++) {
            seats[i] = new Seat(i + 1);  // Initialize seats with seat numbers 1 to 20
        }
    }

    public Seat getSeat(int seatNumber) {
        if (seatNumber > 0 && seatNumber <= seats.length) {
            return seats[seatNumber - 1];
        }
        return null;
    }

    public boolean reserveSeat(int seatNumber) {
        Seat seat = getSeat(seatNumber);
        if (seat != null && !seat.isInUse()) {
            seat.setInUse();  // Reserve the seat (set in use)
            return true;
        }
        return false;
    }

    public boolean releaseSeat(int seatNumber) {
        Seat seat = getSeat(seatNumber);
        if (seat != null && seat.isInUse()) {
            //seat.setInUse(false);  // Reset the seat's inUse status to false (not in use)
            return true;
        }
        return false;
    }

    public void displaySeatMap() {
        for (Seat seat : seats) {
            System.out.println("Seat " + seat.getSeatNumber() + ": " + (seat.isInUse() ? "Occupied" : "Available"));
        }
    }
}
