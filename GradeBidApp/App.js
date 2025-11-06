import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Onboarding1 from './src/screens/Onboarding/Onboarding1';
import Onboarding2 from './src/screens/Onboarding/Onboarding2';
import Onboarding3 from './src/screens/Onboarding/Onboarding3';
import LoginScreen from './src/screens/Auth/LoginScreen';
import Dashboard from './src/screens/Dashboard/Dashboard';
import ProfileScreen from './src/screens/Profile/ProfileScreen';
import AIDoubtSolver from './src/screens/AI/AIDoubtSolver';
import StudyMaterialMarketplace from './src/screens/StudyMaterials/StudyMaterialMarketplace';
import ChatTransactionManagement from './src/screens/Chat/ChatTransactionManagement';
import './global.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard'); 

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
    setCurrentScreen('dashboard');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const handleNavigateToAI = () => {
    setCurrentScreen('ai');
  };

  const handleNavigateToMaterials = () => {
    setCurrentScreen('materials');
  };

  const handleNavigateToChat = () => {
    setCurrentScreen('chat');
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

    if (currentScreen === 'dashboard') {
      return (
        <Dashboard
          onNavigateToProfile={handleNavigateToProfile}
          onNavigateToAI={handleNavigateToAI}
          onNavigateToMaterials={handleNavigateToMaterials}
          onNavigateToChat={handleNavigateToChat}
        />
      );
    }

    if (currentScreen === 'profile') {
      return <ProfileScreen onBack={handleBackToDashboard} />;
    }

    if (currentScreen === 'ai') {
      return <AIDoubtSolver onBack={handleBackToDashboard} />;
    }

    if (currentScreen === 'materials') {
      return <StudyMaterialMarketplace onBack={handleBackToDashboard} />;
    }

    if (currentScreen === 'chat') {
      return <ChatTransactionManagement onBack={handleBackToDashboard} />;
    }

    return null;
  };

  return <SafeAreaProvider>{renderScreen()}</SafeAreaProvider>;
}
