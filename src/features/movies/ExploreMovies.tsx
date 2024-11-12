import { useParams } from 'react-router-dom';

function ExploreMovies(): JSX.Element {
  const { movies } = useParams<{ movies: string }>();
  console.log(movies);

  return <div>explore movies</div>;
}

export default ExploreMovies;
