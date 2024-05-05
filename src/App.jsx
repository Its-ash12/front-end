import { Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Signup from './Modules/Admin/pages/Signup';
import Login from './Modules/Admin/pages/Login';

function App() {
  const [count, setCount] = useState(0);

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    backgroundColor: '#009579',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <>
      {/* Signup Button */}
      <div className='heading-container'> 
      <h1 className='heading'> Nephro Health Coach</h1>
      <h2>                     </h2>  </div>
      <Link to="/signup" style={buttonStyle}>
        Signup
      </Link>
    

      {/* Login Button */}
      <Link to="/login" style={buttonStyle}>
        Login
      </Link>

      {/* Routes */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
