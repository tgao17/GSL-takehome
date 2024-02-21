import { useNavigate } from 'react-router-dom';

/**
 *
 * @returns custom React Hook for navigating home since we will be dealing with this address quite often in our http
 */
export function useNavHome() {
  let navigate = useNavigate();

  const navigateHome = () => {
    navigate('/home');
  };

  return { navigateHome };
}
