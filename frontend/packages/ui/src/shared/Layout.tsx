import React from 'react';
import { Platform } from 'react-native';
import { YStack } from 'tamagui';
import { Header as MobileHeader } from '../mobile/Header';
import { Footer as MobileFooter } from '../mobile/Footer';
import { Header as WebHeader } from '../web/Header';
import { Footer as WebFooter } from '../web/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  const isWeb = Platform.OS === 'web';
  return (
    <YStack flex={1}>
      {isWeb ? <WebHeader /> : <MobileHeader />}
      {children}
      {isWeb ? <WebFooter active="home" /> : <MobileFooter active="home" />}
    </YStack>
  );
} 