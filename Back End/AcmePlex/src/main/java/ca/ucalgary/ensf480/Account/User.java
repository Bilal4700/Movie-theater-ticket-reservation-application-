package ca.ucalgary.ensf480.Account;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "Username") 
    private String username;

    @Column(name = "Email") 
    private String email;

    @Column(name = "Password") 
    private String password;
    
    @Column(name = "CCN")
    private String ccn;
    
    @Column(name = "CVV")
    private String cvv;
    
    @Column(name = "EXP")
    private String exp;
    
    public User() {
    }

    public User(String username, String email, String password, String ccn, String cvv, String exp) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.ccn = ccn;
        this.cvv = cvv;
        this.exp = exp;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }
    
    public String getCCN() {
    	return ccn;
    }
    
    public void setCCN(String ccn) {
    	this.ccn =ccn;
    }
    
    public String getCVV() {
    	return cvv;
    }
    
    public void setCVV(String cvv) {
    	this.cvv = cvv;
    }
    
    public String getEXP() {
    	return exp;
    }
    
    public void setEXP(String exp) {
    	this.exp = exp;
    }
}
