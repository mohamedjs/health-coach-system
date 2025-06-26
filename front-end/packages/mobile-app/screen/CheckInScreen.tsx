import React, { useState } from 'react';
import { MobileCheckInForm } from '@health-coach/shared-ui';
import type { CheckInData } from '@health-coach/shared-ui';

export function CheckInScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSubmit = async (data: CheckInData) => {
    setLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      // You can implement a real API call here, or use a mock for mobile
      // For now, just simulate a delay and a suggestion
      await new Promise(res => setTimeout(res, 1000));
      setSuggestion('Mobile suggestion: Stay hydrated!');
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MobileCheckInForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      suggestion={suggestion}
    />
  );
}
