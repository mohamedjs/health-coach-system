import {
  YStack
} from '@my/ui'
import { CheckInForm, CheckInFormProps } from '@my/ui'


export function HomeScreen({ onSubmit }: CheckInFormProps) {
  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
        <CheckInForm onSubmit={onSubmit} />
    </YStack>
  )
}
