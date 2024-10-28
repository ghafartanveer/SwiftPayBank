// App.js
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationCheck } from './src/navigator';
import { StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    // StatusBar.setHidden(true);
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
    
      <NavigationCheck />
   
  );
};

export default App;
