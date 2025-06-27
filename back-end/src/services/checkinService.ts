import { CheckInRequest, CheckInResponse, Mood } from '../types/checkin';

export default class CheckInService {
  private static moodSuggestions: Record<Mood, string[]> = {
    happy: [
      'Keep up the positive energy!',
      'Share your happiness with someone today!',
      'Maintain your good mood with a walk.'
    ],
    neutral: [
      'Try a new activity to boost your mood.',
      'Take a few deep breaths and stretch.',
      'Listen to your favorite music.'
    ],
    sad: [
      'Reach out to a friend or loved one.',
      'Take a short walk outside.',
      'Try writing down your thoughts.'
    ],
    angry: [
      'Practice deep breathing for 2 minutes.',
      'Take a break and step away for a moment.',
      'Try some light stretching.'
    ],
    tired: [
      'Take a power nap if you can.',
      'Drink a glass of water.',
      'Do some gentle stretching.'
    ]
  };

  static getSuggestionForCheckIn({ mood }: CheckInRequest): CheckInResponse {
    const suggestions = this.moodSuggestions[mood];
    const random = Math.floor(Math.random() * suggestions.length);
    return { suggestion: suggestions[random] };
  }
}
