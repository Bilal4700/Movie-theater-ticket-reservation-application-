import { useParams } from "react-router-dom";
import "../Styles/UpcomingMovies.css";
import AnyoneButYou from "../movies_img/AnyoneButYou.jpg";
import Balistic from "../movies_img/Balistic.jpg";
import DoNotOpen from "../movies_img/DoNotOpen.jpg";
import Gladiator2 from "../movies_img/Gladiator2.jpg";
import Shooter from "../movies_img/Shooter.jpg";
import TakeCover from "../movies_img/TakeCover.jpg";
import Uprising from "../movies_img/Uprising.jpg";

const imageMap = {
	AnyoneButYou: AnyoneButYou,
	Balistic: Balistic,
	DoNotOpen: DoNotOpen,
	Gladiator2: Gladiator2,
	Shooter: Shooter,
	TakeCover: TakeCover,
	Uprising: Uprising,
};

function UpcomingMovies() {
	const { movie } = useParams();

	return (
		<div className="container">
			<div className="movie-image">
				<img
					className="movie-poster"
					src={imageMap[movie] }
					alt={movie}
				/>
			</div>
			<h1 className="title">🎬 {movie}</h1>
      <p className="message">Coming Soon to Theater!</p>
		</div>
	);
}

export default UpcomingMovies;
