export interface CheckInData {
  mood: string;
  energy: number;
  notes: string;
}

export interface CheckInFormProps {
  onSubmit: (data: CheckInData) => Promise<void>;
  loading?: boolean;
  error?: string | null;
  suggestion?: string | null;
}

export interface MoodOption {
  label: string;
  value: string;
}
