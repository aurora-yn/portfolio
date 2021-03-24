import React, { useEffect, useState } from 'react';
import Router from 'components/Router';
import { authService } from 'fbase';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      <Router isLoggedIn={isLoggedIn} />
      <footer>&copy; yun {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
