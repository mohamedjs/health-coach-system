import React from 'react';
import { YStack, Text, TextArea } from 'tamagui';

interface NotesInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function NotesInput({ value, onChange, placeholder = "How are you feeling today?" }: NotesInputProps) {
  return (
    <YStack>
      <TextArea
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        numberOfLines={3}
        size="$4"
      />
    </YStack>
  );
}
