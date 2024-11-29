package ca.ucalgary.ensf480.Models;

public class Seat {
    private int seatNumber;
    private boolean inUse;

    public Seat(int seatNumber) {
        this.seatNumber = seatNumber;
        this.inUse = false;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    public boolean isInUse() {
        return inUse;
    }

    public void setInUse() {
        this.inUse = true;
    }
}
