import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding1 from './src/screens/Onboarding/Onboarding1';
import Onboarding2 from './src/screens/Onboarding/Onboarding2';
import Onboarding3 from './src/screens/Onboarding/Onboarding3';
import LoginScreen from './src/screens/Auth/LoginScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    } else if (currentScreen === 3) {
      setCurrentScreen('login');
    }
  };

  const handleSkip = () => {
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    console.log('Login successful');
    // Will navigate to dashboard later
  };

  const renderScreen = () => {
    if (currentScreen === 1) {
      return <Onboarding1 onNext={handleNext} onSkip={handleSkip} />;
    }

    if (currentScreen === 2) {
      return <Onboarding2 onNext={handleNext} onSkip={handleSkip} />;
    }

    if (currentScreen === 3) {
      return <Onboarding3 onNext={handleNext} onSkip={handleSkip} />;
    }

    if (currentScreen === 'login') {
      return <LoginScreen onLogin={handleLogin} />;
    }

    return null;
  };

  return <SafeAreaProvider>{renderScreen()}</SafeAreaProvider>;
}
