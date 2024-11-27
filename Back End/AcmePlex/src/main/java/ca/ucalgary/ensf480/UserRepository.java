package ca.ucalgary.ensf480;

import org.springframework.data.jpa.repository.JpaRepository;
import ca.ucalgary.ensf480.User;

public interface UserRepository extends JpaRepository<User,Integer> {

}
