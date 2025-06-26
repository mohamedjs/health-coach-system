import React, { useState } from 'react';
import { YStack, Text, Paragraph } from 'tamagui';
import { MoodSelector } from './MoodSelector';
import { EnergySlider } from './EnergySlider';
import { NotesInput } from './NotesInput';
import { SubmitButton } from './SubmitButton';
import { CheckInFormProps, CheckInData } from '../types';

export function CheckInForm({ 
  onSubmit, 
  loading = false, 
  error = null, 
  suggestion = null 
}: CheckInFormProps) {
  const [mood, setMood] = useState('happy');
  const [energy, setEnergy] = useState(5);
  const [notes, setNotes] = useState('');

  const handleSubmit = async () => {
    const data: CheckInData = { mood, energy, notes };
    await onSubmit(data);
  };

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" padding="$4" space>
      <Text fontSize={24} fontWeight="bold">Daily Health Check-In</Text>
      <YStack width={300}>
        <MoodSelector value={mood} onChange={setMood} />
        <EnergySlider value={energy} onChange={setEnergy} />
        <NotesInput value={notes} onChange={setNotes} />
        <SubmitButton onPress={handleSubmit} loading={loading} />
        
        {suggestion && (
          <Paragraph color="$green10" marginTop="$2">{suggestion}</Paragraph>
        )}
        {error && (
          <Paragraph color="$red10" marginTop="$2">{error}</Paragraph>
        )}
      </YStack>
    </YStack>
  );
}
