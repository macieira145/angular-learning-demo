import { APP_DARK_THEME, APP_LIGHT_THEME } from '../constants/app.constants';
export interface ITheme {
  theme: typeof APP_DARK_THEME | typeof APP_LIGHT_THEME;
}
