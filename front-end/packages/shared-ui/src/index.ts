export { CheckInForm } from './components/CheckInForm';
export { MoodSelector } from './components/MoodSelector';
export { EnergySlider } from './components/EnergySlider';
export { NotesInput } from './components/NotesInput';
export { SubmitButton } from './components/SubmitButton';
export { MobileCheckInForm } from './components/MobileCheckInForm';
export { MobileNotesInput } from './components/MobileNotesInput';

// Export types
export type { CheckInData, CheckInFormProps, MoodOption } from './types';

//export config
export { default as appConfig } from './config/tamagui.config';

// Re-export common Tamagui components
export {
  YStack,
  XStack,
  Text,
  Button,
  Spinner,
  Paragraph
} from 'tamagui';
