import React from 'react';
import { Platform } from 'react-native';
import { YStack, Text, XStack } from 'tamagui';
import { SliderTrack, Slider, SliderThumb, SliderTrackActive } from 'tamagui';

interface EnergySliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function EnergySlider({ value = 5, onChange }: EnergySliderProps) {
  if (typeof value !== 'number' || typeof onChange !== 'function') {
    throw new Error('EnergySlider requires a numeric value and an onChange function');
  }
  return (
    <YStack space={12}>
      <Text color="$color">Energy Level: {value}</Text>
      <YStack space={8}>
        <Slider
          min={1}
          max={10}
          step={1}
          value={[value]}
          onValueChange={vals => {
            if (vals && vals.length > 0 && typeof vals[0] === 'number') {
              onChange(vals[0]);
            }
          }}
          size="$4"
          orientation="horizontal"
          style={{ width: '100%', height: Platform.OS === 'ios' ? 40 : 32, justifyContent: 'center' }}
        >
          <SliderTrack backgroundColor="gray" height={6} borderRadius={999}>
            <SliderTrackActive backgroundColor="green" />
          </SliderTrack>
          <SliderThumb
            index={0}
            circular
            size={24}
            style={{ backgroundColor: 'green', borderWidth: 2, borderColor: '#fff' }}
          />
        </Slider>
        <XStack style={{ justifyContent: 'space-between', paddingHorizontal: 8 }}>
          <Text fontSize={12} color="gray">Low</Text>
          <Text fontSize={12} color="gray">High</Text>
        </XStack>
      </YStack>
    </YStack>
  );
}
