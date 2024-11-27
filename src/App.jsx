import React, { useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged in');
        navigate('/');
      } else {
        console.log('Logged out');
        navigate('/login');
      }
      setLoading(false); 
    });

    
    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
