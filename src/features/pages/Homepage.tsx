import { useNavigate, useSearchParams } from 'react-router-dom';
import RecommendedMovies from '../movies/RecommendedMovies';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';

import { getGoogleUser } from '../authentication/services/apiGoogleLogin';
import { login } from '../authentication/userSlice';

import { getItem, setItem } from '../utils/localStorage';

const Homepage = (): JSX.Element => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email = params.get('email');
  const token = params.get('token');

  const localToken = getItem('token');
  const storedCity = getItem('city');

  const googleUser = useCallback(async (): Promise<void> => {
    const user = await getGoogleUser(email!);
    if (!user) return;

    dispatch(login(user));
    navigate(`/home/${storedCity}`);
  }, [email, storedCity, dispatch, navigate]);

  useEffect(() => {
    if (!token) return;

    setItem('token', token);
    navigate(`/?email=${email}`);
  }, [token, email, navigate]);

  useEffect(() => {
    if (email && localToken) {
      googleUser();
    }
  }, [email, localToken, googleUser]);

  return <RecommendedMovies />;
};

export default Homepage;
