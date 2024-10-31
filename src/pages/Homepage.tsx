import NavBar from '../ui/NavBar';
import RecommendedMovies from '../movies/RecommendedMovies';
import TopBar from '../ui/TopBar';

const Homepage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <TopBar />
      <RecommendedMovies />
    </>
  );
};

export default Homepage;
