import { HomeScreen } from 'app/features/home/screen'
import { CheckInData, View, Text } from '@my/ui';
import Constants from 'expo-constants';

export default function Screen() {
  const handleSubmit = async (data: CheckInData) => {
    const res = await fetch(`${Constants.expoConfig?.extra?.API_URL}/checkin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Network error');
    const result = await res.json();
    return result;
  };

  return (
    <HomeScreen onSubmit={handleSubmit} />
  )
}
