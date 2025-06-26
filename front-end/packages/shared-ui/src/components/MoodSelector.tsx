import React from 'react';
import { Platform, Pressable } from 'react-native';
import { YStack, XStack, Text } from 'tamagui';
import { MoodOption } from '../types';

const moodOptions: MoodOption[] = [
  { label: '😊', value: 'happy' },
  { label: '😐', value: 'neutral' },
  { label: '😔', value: 'sad' },
  { label: '😡', value: 'angry' },
  { label: '😴', value: 'tired' },
];

interface MoodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function MoodSelector({ value, onChange }: MoodSelectorProps) {
  return (
    <YStack space="$2">
      <Text color="$color">Mood</Text>
      <XStack space="$2" justifyContent="space-between">
        {moodOptions.map(opt => (
          <Pressable
            key={opt.value}
            onPress={() => onChange(opt.value)}
            style={({ pressed }) => ({
              padding: 12,
              borderRadius: 8,
              backgroundColor: value === opt.value ? '#007AFF' : '#F2F2F7',
              opacity: pressed ? 0.7 : 1,
              minWidth: 50,
              alignItems: 'center',
              justifyContent: 'center',
              // iOS specific shadow
              ...(Platform.OS === 'ios' && {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
              }),
              // Android specific elevation
              ...(Platform.OS === 'android' && {
                elevation: 2,
              }),
            })}
          >
            <Text fontSize={24}>{opt.label}</Text>
          </Pressable>
        ))}
      </XStack>
    </YStack>
  );
}
