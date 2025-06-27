import React from 'react';
import { Platform } from 'react-native';
import { YStack, Text, TextArea, Input } from 'tamagui';

interface MobileNotesInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
}

export function MobileNotesInput({ 
  value, 
  onChange, 
  placeholder = "How are you feeling today?",
  onSubmitEditing
}: MobileNotesInputProps) {
  return (
    <YStack space="$2">
      <Text color="$color">Notes</Text>
      <TextArea
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        numberOfLines={Platform.OS === 'ios' ? undefined : 4}
        minHeight={Platform.OS === 'ios' ? 80 : undefined}
        maxHeight={120}
        size="$4"
        borderColor="$borderColor"
        borderWidth={1}
        borderRadius="$2"
        padding="$3"
        backgroundColor="$background"
        color="$color"
        placeholderTextColor="$placeholderColor"
        returnKeyType="done"
        blurOnSubmit={true}
        onSubmitEditing={onSubmitEditing}
        // iOS specific fixes
        {...(Platform.OS === 'ios' && {
          textAlignVertical: 'top',
          multiline: true,
        })}
        // Android specific fixes
        {...(Platform.OS === 'android' && {
          underlineColorAndroid: 'transparent',
        })}
      />
    </YStack>
  );
}
