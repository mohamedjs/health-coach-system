import { createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';

// Custom theme for better mobile support
const appConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      background: '#ffffff',
      backgroundHover: '#f8f9fa',
      backgroundPress: '#e9ecef',
      backgroundFocus: '#dee2e6',
      color: '#212529',
      colorHover: '#495057',
      colorPress: '#6c757d',
      colorFocus: '#495057',
      borderColor: '#dee2e6',
      borderColorHover: '#adb5bd',
      borderColorPress: '#6c757d',
      borderColorFocus: '#86b7fe',
      placeholderColor: '#6c757d',
    },
    dark: {
      ...config.themes.dark,
      background: '#000000',
      backgroundHover: '#1c1c1e',
      backgroundPress: '#2c2c2e',
      backgroundFocus: '#3a3a3c',
      color: '#ffffff',
      colorHover: '#f2f2f7',
      colorPress: '#d1d1d6',
      colorFocus: '#f2f2f7',
      borderColor: '#3a3a3c',
      borderColorHover: '#48484a',
      borderColorPress: '#636366',
      borderColorFocus: '#007AFF',
      placeholderColor: '#8e8e93',
    },
  },
});

export default appConfig;
