import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import isAuthenticated from '../utils/isAuthenticated';

interface ProtectProps {
  children: React.ReactNode;
}

function Protect({ children }: ProtectProps): React.ReactNode {
  const navigate = useNavigate();
  const token = isAuthenticated();

  useEffect(() => {
    if (!token) return navigate('/');
  }, [token, navigate]);

  return children;
}

export default Protect;
