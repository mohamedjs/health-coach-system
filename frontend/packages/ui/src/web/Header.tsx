import React from 'react';
import { XStack, Text, YStack } from 'tamagui';
import { Clover, Search } from '@tamagui/lucide-icons';

export const Header = () => {
  return (
    <div style={{
      width: '100%',
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      position: 'relative',
      zIndex: 10,
    }}>
      <XStack alignItems="center" justifyContent="space-between" paddingVertical={18} paddingHorizontal={32}>
        <Clover size={32} color="#8BC34A" />
        <Text fontSize={28} fontWeight="700" letterSpacing={1} color="#222">Home</Text>
        <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>
          <Search size={28} color="#222" />
        </span>
      </XStack>
    </div>
  );
} 