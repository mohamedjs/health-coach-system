import React from 'react';
import { Platform } from 'react-native';
import { YStack, Text, Slider, XStack } from 'tamagui';

interface EnergySliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function EnergySlider({ value, onChange }: EnergySliderProps) {
  return (
    <YStack space="$3">
      <Text color="$color">Energy Level: {value}</Text>
      <YStack space="$2">
        <Slider 
          min={1} 
          max={10} 
          step={1} 
          value={[value]} 
          onValueChange={([val]) => onChange(val)}
          size="$4"
          // Platform specific styling
          style={{
            height: Platform.OS === 'ios' ? 40 : 20,
          }}
        />
        <XStack justifyContent="space-between" paddingHorizontal="$2">
          <Text fontSize={12} color="$gray10">Low</Text>
          <Text fontSize={12} color="$gray10">High</Text>
        </XStack>
      </YStack>
    </YStack>
  );
}
