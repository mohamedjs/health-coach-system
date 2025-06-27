import React from 'react';
import { XStack } from 'tamagui';
import { Home, Moon, User, Leaf } from '@tamagui/lucide-icons';

interface FooterProps {
  active?: 'home';
}

export function Footer({ active = 'home' }: FooterProps) {
  return (
    <div style={{
      width: '100%',
      background: 'white',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.07)',
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 100,
    }}>
      <XStack justifyContent="space-around" alignItems="center" paddingVertical={16}>
        <span style={{ cursor: 'pointer' }}>
          <Home color={active === 'home' ? '#8BC34A' : '#bbb'} size={28} />
        </span>
      </XStack>
    </div>
  );
}