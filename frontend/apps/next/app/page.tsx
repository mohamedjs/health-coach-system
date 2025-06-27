'use client'
import { HomeScreen } from 'app/features/home/screen'
import { CheckInData, Layout } from '@my/ui';
import Constants from 'expo-constants';
import { NextTamaguiProvider } from 'app/provider/NextTamaguiProvider';

export default function Screen() {
  const handleSubmit = async (data: CheckInData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Network error');
    const result = await res.json();
    return result;
  };

  return (
    <NextTamaguiProvider>
      <Layout>
        <HomeScreen onSubmit={handleSubmit} />
      </Layout>
    </NextTamaguiProvider>
  )
}
