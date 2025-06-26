import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
} from 'react-native';
import { YStack, Text, Paragraph } from 'tamagui';
import { MoodSelector } from './MoodSelector';
import { EnergySlider } from './EnergySlider';
import { MobileNotesInput } from './MobileNotesInput';
import { SubmitButton } from './SubmitButton';
import { CheckInFormProps, CheckInData } from '../types';

export function MobileCheckInForm({ 
  onSubmit, 
  loading = false, 
  error = null, 
  suggestion = null 
}: CheckInFormProps) {
  const [mood, setMood] = useState('happy');
  const [energy, setEnergy] = useState(5);
  const [notes, setNotes] = useState('');

  const handleSubmit = async () => {
    Keyboard.dismiss(); // Dismiss keyboard before submit
    const data: CheckInData = { mood, energy, notes };
    await onSubmit(data);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#ffffff' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <YStack flex={1} justifyContent="center" alignItems="center" padding="$4" space="$4" backgroundColor="$background">
              <Text fontSize={24} fontWeight="bold" color="$color">
                Daily Health Check-In
              </Text>
              
              <YStack width="90%" maxWidth={400} space="$4">
                <MoodSelector value={mood} onChange={setMood} />
                <EnergySlider value={energy} onChange={setEnergy} />
                <MobileNotesInput 
                  value={notes} 
                  onChange={setNotes}
                  onSubmitEditing={handleSubmit}
                />
                <SubmitButton onPress={handleSubmit} loading={loading} />
                
                {suggestion && (
                  <Paragraph color="$green10" marginTop="$2" textAlign="center">
                    {suggestion}
                  </Paragraph>
                )}
                {error && (
                  <Paragraph color="$red10" marginTop="$2" textAlign="center">
                    {error}
                  </Paragraph>
                )}
              </YStack>
            </YStack>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
