import React from 'react';
import { XStack } from 'tamagui';
import { Home, Moon, BarChart2, User, Leaf } from '@tamagui/lucide-icons';

interface FooterProps {
  active?: 'home' | 'leaf' | 'moon' | 'chart' | 'user';
}

export function Footer({ active = 'home' }: FooterProps) {
  return (
    <XStack justifyContent="space-around" alignItems="center" padding="$2" backgroundColor="white">
      <Home color={active === 'home' ? '#8BC34A' : '#bbb'} />
    </XStack>
  );
} 