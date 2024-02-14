import Landing from './pages/landing';
import Auth from './pages/auth';

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Auth />} />
        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
