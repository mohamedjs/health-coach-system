import { createTamagui } from 'tamagui';
import { appConfig as tamaguiConfig } from '@health-coach/shared-ui';

const config = createTamagui(tamaguiConfig);

export type Conf = typeof config;
export { config };
