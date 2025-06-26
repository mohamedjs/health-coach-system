import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { View } from 'react-native';
import { CheckInScreen } from '../screen/CheckInScreen';
import { appConfig } from '@health-coach/shared-ui';

export default function App() {
  return (
    <TamaguiProvider config={appConfig}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CheckInScreen />
      </View>
    </TamaguiProvider>
  );
}
