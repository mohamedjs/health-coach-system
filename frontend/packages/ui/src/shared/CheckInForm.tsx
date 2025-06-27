import React, { useState, useRef, useEffect } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
  Modal,
  View,
  Animated,
  Dimensions,
} from 'react-native';
import { YStack, Text, Paragraph, Button, XStack, useThemeName } from 'tamagui';
import { useCheckInForm } from '../hooks/useCheckInForm';
import { CheckInData } from '../types/index';
import { MoodSelector } from './MoodSelector';
import { EnergySlider } from './EnergySlider';
import { NotesInput } from '../web/NotesInput';
import { SubmitButton } from './SubmitButton';
import { MobileNotesInput } from '../mobile/MobileNotesInput';

interface CheckInFormProps {
  onSubmit: (data: CheckInData) => Promise<{ suggestion: string }>;
}



export const CheckInForm = ({ onSubmit }: CheckInFormProps) => {
  const {
    mood, setMood, energy, setEnergy, notes, setNotes,
    loading, error, suggestion, handleSubmit
  } = useCheckInForm(onSubmit);

  const [showSuggestion, setShowSuggestion] = useState(false);
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;


  // Mood-based colors and styles
  const getMoodStyles = () => {
    const baseBg =  '#ffffff';
    const baseText =  '#111827';
    
    switch (mood) {
      case 'happy':
        return {
          popupBgColor:  '#fffbeb',
          overlayColor: 'rgba(255, 193, 7, 0.2)',
          textColor: baseText,
          shadowColor: '#fbbf24',
          buttonBgColor: '#22c55e',
          accentColor: '#fbbf24',
        };
      case 'sad':
        return {
          popupBgColor:  '#f0f9ff',
          overlayColor: 'rgba(59, 130, 246, 0.15)',
          textColor: baseText,
          shadowColor: '#3b82f6',
          buttonBgColor: '#3b82f6',
          accentColor: '#60a5fa',
        };
      case 'angry':
        return {
          popupBgColor:  '#fef2f2',
          overlayColor: 'rgba(239, 68, 68, 0.2)',
          textColor: baseText,
          shadowColor: '#ef4444',
          buttonBgColor: '#ef4444',
          accentColor: '#f87171',
        };
      case 'neutral':
        return {
          popupBgColor: baseBg,
          overlayColor:  'rgba(0,0,0,0.4)',
          textColor: baseText,
          shadowColor:  '#6b7280',
          buttonBgColor: '#6b7280',
          accentColor: '#9ca3af',
        };
      default:
        return {
          popupBgColor: baseBg,
          overlayColor:  'rgba(0,0,0,0.4)',
          textColor: baseText,
          shadowColor:  '#6b7280',
          buttonBgColor: '#10b981',
          accentColor: '#34d399',
        };
    }
  };

  const moodStyles = getMoodStyles();
  const buttonTextColor = '#ffffff';

  // animations depending on MOOD
  const showPopupAnimation = () => {
    // Reset all animations
    fadeAnim.setValue(0);
    slideAnim.setValue(50);
    rotateAnim.setValue(0);

    switch (mood) {
      case 'happy':
        // HAPPY: Bouncy, energetic, joyful animations
        scaleAnim.setValue(0.2);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          // Super bouncy scale (excitement)
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 150,
            friction: 4, // Very bouncy
            useNativeDriver: true,
          }),
          // Quick, upward slide (uplifting)
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          // Playful rotation
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]).start();
        break;

      case 'sad':
        // SAD: Slow, gentle, comforting animations
        scaleAnim.setValue(0.9);
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600, // Slower, more gentle
            useNativeDriver: true,
          }),
          Animated.parallel([
            // Very gentle scale (non-overwhelming)
            Animated.spring(scaleAnim, {
              toValue: 1,
              tension: 30,
              friction: 15, // Very soft
              useNativeDriver: true,
            }),
            // Minimal slide (comforting)
            Animated.timing(slideAnim, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
        ]).start();
        break;

      case 'angry':
        // ANGRY: Sharp, intense, but controlled animations
        scaleAnim.setValue(0.1);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 150, // Quick, assertive
            useNativeDriver: true,
          }),
          // Strong, controlled scale
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 200,
            friction: 8,
            useNativeDriver: true,
          }),
          // Sharp slide movement
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          // Noticeable rotation (intensity)
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
        break;

      case 'neutral':
        // NEUTRAL: Balanced, calm, straightforward animations
        scaleAnim.setValue(0.7);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
          // Balanced scale
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 80,
            friction: 10,
            useNativeDriver: true,
          }),
          // Steady slide
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          // Minimal rotation
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
        break;

      default:
        // DEFAULT: Standard pleasant animation
        scaleAnim.setValue(0.5);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 100,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]).start();
    }
  };

  const hidePopupAnimation = (callback) => {
    switch (mood) {
      case 'happy':
        // Quick, bouncy exit
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(callback);
        break;

      case 'sad':
        // Gentle, slow fade
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.95,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start(callback);
        break;

      case 'angry':
        // Quick, definitive exit
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.05,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start(callback);
        break;

      default:
        // Standard exit
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.3,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start(callback);
    }
  };

  // Show popup when suggestion is available
  useEffect(() => {
    if (suggestion) {
      setShowSuggestion(!showSuggestion);
      setTimeout(() => {
        showPopupAnimation(); // Animation now depends on mood
        startPulseAnimation(); // Pulse for happy/angry moods
      }, 100);
    }
  }, [suggestion]); // Added mood dependency

  const handleClosePopup = () => {
    pulseAnim.stopAnimation(); // Stop pulse animation
    hidePopupAnimation(() => {
      setShowSuggestion(false);
    });
  };

  // Rotation interpolation - different intensity based on mood
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: (() => {
      switch (mood) {
        case 'happy': return ['0deg', '5deg']; // Most playful
        case 'angry': return ['0deg', '3deg']; // Intense but controlled
        case 'sad': return ['0deg', '0.5deg']; // Minimal, gentle
        case 'neutral': return ['0deg', '1deg']; // Balanced
        default: return ['0deg', '2deg'];
      }
    })(),
  });

  // Mood-based pulse animation
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  const startPulseAnimation = () => {
    if (mood === 'happy') {
      // Happy gets energetic pulse
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else if (mood === 'angry') {
      // Angry gets subtle, controlled pulse
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.02,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
    // Sad and neutral don't get pulse - they need calm
  };

  const Notes = Platform.OS === 'web' ? NotesInput : MobileNotesInput;

  const content = (
    <YStack style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 16, 
      backgroundColor:  '#fff' 
    }} space="$4">
      <Text fontSize={24} fontWeight="bold" color="$color">
        Daily Health Check-In
      </Text>
      <YStack style={{ width: '90%', maxWidth: 400 }} space="$4">
        <MoodSelector value={mood} onChange={setMood} />
        <EnergySlider value={energy || 5} onChange={setEnergy} />
        <Notes
          value={notes}
          onChange={setNotes}
        />
        <SubmitButton onPress={handleSubmit} loading={loading} />
        {error && (
          <Paragraph style={{ color: '#ef4444', marginTop: 8, textAlign: 'center' }}>
            {error}
          </Paragraph>
        )}
      </YStack>
    </YStack>
  );

  return (
    <>
      {Platform.OS !== 'web' && (
        <StatusBar 
          barStyle={ "dark-content"} 
          backgroundColor={ "#ffffff"} 
        />
      )}
      {Platform.OS === 'web' ? (
        content
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor:  '#ffffff' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {content}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}

      {/* Enhanced Animated Popup */}
      <Modal
        visible={showSuggestion && !!suggestion}
        transparent
        animationType="none" // We handle animations manually
        onRequestClose={handleClosePopup}
      >
      <Animated.View style={{
        flex: 1,
        backgroundColor: moodStyles.overlayColor,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeAnim,
      }}>

          <Animated.View
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: [
                { translateX: -170 }, // Half of popup width
                { translateY: -120 }, // Half of popup height
                { scale: Animated.multiply(scaleAnim, pulseAnim) }, // Combine scale and pulse
                { translateY: slideAnim },
                { rotate: rotateInterpolate },
              ],
            }}
          >
            <YStack
              space="$4"
              style={{
                backgroundColor: moodStyles.popupBgColor,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 12,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                padding: 28,
                minWidth: 320,
                maxWidth: 360,
                alignItems: 'center',
                shadowColor: moodStyles.shadowColor,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.25,
                shadowRadius: 16,
                elevation: 12,
                borderWidth: 1,
                borderColor: moodStyles.accentColor + '40',
              }}
            >
              {/* Decorative element - different styles for each mood */}
              <View style={{
                width: 50,
                height: 6,
                backgroundColor: moodStyles.accentColor,
                borderRadius: 3,
                marginBottom: 8,
                opacity: mood === 'sad' ? 0.6 : 1,
              }} />
              
              <Text 
                fontSize={20} 
                fontWeight={"600"} 
                style={{ color: moodStyles.textColor }}
              >
                {(() => {
                  switch (mood) {
                    case 'happy': return "🌟 Uplifting Suggestion";
                    case 'sad': return "💙 Gentle Suggestion";
                    case 'angry': return "🔥 Helpful Suggestion";
                    case 'neutral': return "💭 Personal Suggestion";
                    default: return "💡 Personal Suggestion";
                  }
                })()}
              </Text>
              
              <Paragraph style={{ 
                textAlign: 'center', 
                fontSize: 16, 
                lineHeight: 24,
                color: moodStyles.textColor,
                marginVertical: 8,
                fontWeight:  '500',
              }}>
                {suggestion}
              </Paragraph>
              
              <XStack space="$3" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
                <Button
                  onPress={handleClosePopup}
                  style={{
                    backgroundColor: moodStyles.buttonBgColor,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 12,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    paddingHorizontal: 24,
                    paddingVertical: 12,
                    minWidth: 120,
                    maxWidth: 220,
                    height: 70,
                    alignSelf: 'center',
                    shadowColor: moodStyles.buttonBgColor,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.15,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <Text style={{ 
                    color: buttonTextColor, 
                    fontWeight: '600',
                    fontSize:  16,
                    textAlign: 'center',
                  }}>
                    {(() => {
                      switch (mood) {
                        case 'happy': return "Awesome! 🎉";
                        case 'sad': return "Thank you 💙";
                        case 'angry': return "Got it 💪";
                        case 'neutral': return "Understood";
                        default: return "Got it! ✨";
                      }
                    })()}
                  </Text>
                </Button>
              </XStack>
            </YStack>
          </Animated.View>
        </Animated.View>
      </Modal>
    </>
  );
}