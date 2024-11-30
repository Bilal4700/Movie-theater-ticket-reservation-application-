package ca.ucalgary.ensf480;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"ca.ucalgary.ensf480.Account","ca.ucalgary.ensf480.Movie"})
public class AcmePlexApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcmePlexApplication.class, args);
		
	}

}
