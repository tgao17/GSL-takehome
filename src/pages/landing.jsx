import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';
import { ThreeLanding } from '../other/ThreeLanding';

const Landing = () => {
  const { state, dispatch } = useContext(GLOBALContext);

  let navigate = useNavigate();

  handleLogin = () => {
    dispatch({ type: 'SET_VIEW_MODE', payload: 'Login' });
    navigate('/login');
    console.log(state);
  };

  handleSignUp = () => {
    dispatch({ type: 'SET_VIEW_MODE', payload: 'SignUp' });
    navigate('/signup');
    console.log(state);
  };

  return (
    <>
      <ThreeLanding />
      <div className='masterStyle'>
        <h1 className='landingText' style={{ width: '35rem' }}>
          Welcome to Greystone Amortiztion
        </h1>
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '130px',
          height: '50px',
          backgroundColor: 'lightblue',
          textAlign: 'center',
          // lineHeight: '100px',
          opacity: 0.1,
          pointerEvents: 'none',
          borderRadius: '0.1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        Rotate Me
      </div>
      <div
        className='masterStyle'
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        <div style={{ width: '35rem' }}>
          <h3 className='landingText'>What is Loan Amortiztion?</h3>
          <h5 className='landingText'>
            Amortization is an accounting technique used to periodically lower
            the book value of a loan or an intangible asset over a set period of
            time. Concerning a loan, amortization focuses on spreading out loan
            payments over time. When applied to an asset, amortization is
            similar to depreciation.
          </h5>
          <div style={{ display: 'flex', gap: 15 }}>
            <button
              className='simpleButton'
              id='landingButton1'
              onClick={() => handleLogin()}>
              Login
            </button>
            <button
              className='simpleButton'
              id='landingButton2'
              onClick={() => handleSignUp()}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
