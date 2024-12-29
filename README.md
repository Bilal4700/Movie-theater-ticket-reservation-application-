Movie Theatre Booking System

This project is a Movie Theatre Booking System built using React for the frontend and Spring Boot for the backend. The website allows users to book tickets for movies, manage their bookings, and enjoy additional features by logging in.

Features

Guest User:

Can view available movies and book tickets.

Limited ticket booking functionality compared to logged-in users.

Logged-in User:

Book tickets for multiple movies.

Save credit card information securely.

Cancel booked tickets.

Admin Features:

Cancel or refund tickets for logged-in users.

Technologies Used

Frontend:

React: For building the user interface.

CSS: For styling the application.

Backend:

Spring Boot: For handling backend logic and API development.

MySQL: For storing user data, movie information, and bookings.

Setup and Installation

Follow these steps to set up and run the project on your local machine:

Step 1: Clone the Repository

Step 2: Backend Setup

Database Configuration:

A MySQL dump file is provided in the database/ directory.

Import the MySQL file to set up your database:

mysql -u [username] -p [database_name] < database/database_backup.sql

Replace [username] with your MySQL username and [database_name] with the name you want for the database.

Update application.properties:

Navigate to the src/main/resources/application.properties file in the backend directory.

Update the database credentials with your own:

#mysql connection
spring.datasource.url=jdbc:mysql://localhost:3306/{database}
spring.datasource.username={your username}
spring.datasource.password={your password}
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl



Run the Spring Boot Application:

Navigate to the backend folder and run:

./mvnw spring-boot:run

The backend will start on http://localhost:8080.

Step 3: Frontend Setup

Install Dependencies:

Navigate to the frontend directory:

cd my-app

Install all necessary dependencies:

npm install

Run the Frontend Application:

Start the development server:

npm start

The application will run on http://localhost:3000.

How to Use the Application

Access the Application:

Open http://localhost:3000 in your browser.

Booking Tickets:

View available movies and select seats to book tickets.

Login to unlock more features, such as booking multiple tickets for different movies.

Cancel Tickets:

Navigate to your Dashboard to view and cancel tickets.

Payment:

Enter your credit card details when booking a ticket.

Logged-in users can save their credit card information for faster bookings.


Key Features to Customize

Database Connection:

Ensure application.properties has the correct database credentials.

Environment Variables:

Consider using environment variables for sensitive information like database credentials.

