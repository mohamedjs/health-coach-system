export type Mood = 'happy' | 'neutral' | 'sad' | 'angry' | 'tired';

export interface CheckInRequest {
  mood: Mood;
  energy: number;
  notes: string;
}

export interface CheckInResponse {
  suggestions: string[];
}
