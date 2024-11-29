package ca.ucalgary.ensf480.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUsername(String username); 
    User findByEmail(String email);
    User findByPassword(String password);
}
