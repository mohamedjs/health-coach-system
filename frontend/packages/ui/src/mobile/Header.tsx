import React from 'react';
import { XStack, Text } from 'tamagui';
import { Clover, Search } from '@tamagui/lucide-icons';

export function Header() {
  return (
    <XStack alignItems="center" justifyContent="space-between" padding="$3" backgroundColor="white">
      <Clover size={28} color="#8BC34A" />
      <Text fontSize={22} fontWeight="bold">Home</Text>
      <Search size={26} color="#222" />
    </XStack>
  );
} 