import React, { useState } from 'react';
import { CheckInForm } from '@health-coach/shared-ui';
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
      const res = await fetch('http://localhost:5000/api/v1/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) throw new Error('Network error');
      
      const result = await res.json();
      setSuggestion(result.suggestions?.[0] || 'No suggestion');
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CheckInForm
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      suggestion={suggestion}
    />
  );
}