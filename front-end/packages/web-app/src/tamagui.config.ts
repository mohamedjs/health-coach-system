import { createTamagui } from 'tamagui';
import { config as tamaguiConfig } from '@tamagui/config';

const config = createTamagui(tamaguiConfig);

export type Conf = typeof config;
export { config };
