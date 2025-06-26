import React from 'react';
import { Platform } from 'react-native';
import { Button, Spinner } from 'tamagui';

interface SubmitButtonProps {
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}

export function SubmitButton({ 
  onPress, 
  loading = false, 
  disabled = false, 
  text = "Submit" 
}: SubmitButtonProps) {
  return (
    <Button 
      onPress={onPress} 
      disabled={disabled || loading} 
      size="$5"
      backgroundColor="$blue10"
      color="white"
      borderRadius="$4"
      fontWeight="600"
      pressStyle={{ 
        backgroundColor: '$blue9',
        scale: 0.97 
      }}
      disabledStyle={{
        backgroundColor: '$gray8',
        opacity: 0.6,
      }}
      // Platform specific styling
      style={{
        minHeight: Platform.OS === 'ios' ? 50 : 48,
        ...(Platform.OS === 'ios' && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }),
        ...(Platform.OS === 'android' && {
          elevation: 3,
        }),
      }}
    >
      {loading ? <Spinner color="white" size="small" /> : text}
    </Button>
  );
}
