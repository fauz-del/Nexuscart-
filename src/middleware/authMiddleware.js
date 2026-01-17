import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const ProtectedButton = ({ children, onClick }: any) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate('/auth/login'); // Redirect to login if not authenticated
    } else {
      onClick();
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};
