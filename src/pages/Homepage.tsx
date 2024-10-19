import NavBar from '../ui/NavBar';
import RecommendedMovies from '../ui/RecommendedMovies';
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
