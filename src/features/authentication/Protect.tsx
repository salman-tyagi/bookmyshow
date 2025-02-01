import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

interface ProtectProps {
  children: React.ReactNode;
}

function Protect({ children }: ProtectProps): React.ReactNode {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.users);

  useEffect(() => {
    if (!isAuthenticated) return navigate('/');
  }, [isAuthenticated, navigate]);

  return children;
}

export default Protect;
