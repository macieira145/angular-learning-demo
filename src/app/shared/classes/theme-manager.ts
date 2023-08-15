import { APP_DARK_THEME, APP_LIGHT_THEME } from '../constants/app.constants';
import { ITheme } from '../interfaces/theme.interface';

export class ThemeManager implements ITheme {
  theme: typeof APP_DARK_THEME | typeof APP_LIGHT_THEME;

  constructor(theme: string) {
    this.theme = <typeof APP_DARK_THEME | typeof APP_DARK_THEME>theme;
  }
}
