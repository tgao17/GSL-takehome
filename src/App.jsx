import { GLOBALContextProvider } from './globalStateContext';

import Landing from './pages/Landing';
import { SignUp, Login } from './pages/Auth';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

const App = () => {
  // const { state } = useReducer(GLOBALContext);
  // // let navigate = useNavigate();
  // console.log(state);
  // switch (state.viewMode) {
  //   case 'landing':
  //     navigate('/');
  //     break;
  //   case 'login':
  //     navigate('/login');
  //     break;
  //   default:
  //     navigate('/');
  // }

  return (
    <GLOBALContextProvider>
      <RouterProvider router={router} />
    </GLOBALContextProvider>
  );
};

export default App;
