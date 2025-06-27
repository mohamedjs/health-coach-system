import { useState } from 'react';
import type { CheckInData } from '../types/index';

export function useCheckInForm(onSubmit: (data: CheckInData) => Promise<{ suggestion: string }>, initialMood = 'happy') {
  const [mood, setMood] = useState(initialMood);
  const [energy, setEnergy] = useState(5);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const result =  await onSubmit({ mood, energy, notes });
      setSuggestion(result.suggestion);
    } catch (e: any) {
      setError(e?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    mood,
    setMood,
    energy,
    setEnergy,
    notes,
    setNotes,
    loading,
    error,
    setError,
    suggestion,
    setSuggestion,
    handleSubmit,
  };
} 