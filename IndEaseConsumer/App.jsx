import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './src/context/AuthContext';
import { RequestProvider } from './src/context/RequestContext';
import { NotificationProvider } from './src/context/NotificationContext';
import AppNavigator from './src/navigation/AppNavigator';
import colors from './src/constants/colors';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.card}
      />
      <AuthProvider>
        <RequestProvider>
          <NotificationProvider>
            <AppNavigator />
          </NotificationProvider>
        </RequestProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default App;
