import React from 'react';
import { Platform } from 'react-native';
import { Button, Spinner } from 'tamagui';

interface SubmitButtonProps {
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}

export function SubmitButton({
  onPress = () => {},
  loading = false,
  disabled = false,
  text = "Submit"
}: SubmitButtonProps = {}) {
  const isWeb = Platform.OS === 'web';
  const isIOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  let minHeight = 48;
  if (isIOS) minHeight = 50;
  if (isWeb) minHeight = 48;

  const platformStyle: any = {};
  if (isIOS) {
    platformStyle.shadowColor = '#000';
    platformStyle.shadowOffset = { width: 0, height: 2 };
    platformStyle.shadowOpacity = 0.1;
    platformStyle.shadowRadius = 4;
  } else if (isAndroid) {
    platformStyle.elevation = 3;
  } else if (isWeb) {
    platformStyle.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    platformStyle.transition = 'box-shadow 0.2s';
  }

  // Explicitly override all hover styles for web to prevent any hover color/design change
  // This disables all hover effects, including background, border, and shadow
  const noHoverStyle = isWeb
    ? {
        backgroundColor: '$blue10',
        color: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        borderColor: 'transparent',
        outline: 'none',
        filter: 'none',
        opacity: 1,
        // Remove any transform or scale on hover
        transform: 'none',
      }
    : undefined;

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
        scale: 0.97
      }}
      disabledStyle={{
        opacity: 0.6,
      }}
      style={{
        minHeight,
        marginTop: 16,
        marginBottom: 8,
        marginHorizontal: 0,
        ...platformStyle,
      }}
      hoverStyle={isWeb ? { opacity: 1, filter: 'none', transform: 'none' } : undefined}
      focusStyle={isWeb ? { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' } : undefined}
    >
      {loading ? <Spinner color="white" size="small" /> : text}
    </Button>
  );
}
