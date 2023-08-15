import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from './shared/services/app/app-service.service';
import {
  APP_DARK_THEME,
  APP_LIGHT_THEME,
} from './shared/constants/app.constants';
import { ThemeManagerService } from './shared/services/theme-manager/theme-manager.service';
import { ITheme } from './shared/interfaces/theme.interface';
import { ThemeManager } from './shared/classes/theme-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private activeTheme: ITheme;

  constructor(
    private appService: AppService,
    private themeManagerService: ThemeManagerService
  ) {
    this.activeTheme = this.themeManagerService.getTheme();
    if (this.activeTheme === null)
      this.activeTheme = { theme: APP_LIGHT_THEME } as ITheme;
  }

  ngOnInit(): void {
    this.themeManagerService.loadTheme().subscribe((newTheme) => {
      this.activeTheme = newTheme as ITheme;
    });
  }

  public changeTheme() {
    this.themeManagerService.setTheme(
      this.activeTheme.theme === APP_DARK_THEME
        ? APP_LIGHT_THEME
        : APP_DARK_THEME
    );
  }

  public isDarkThemeEnabled(): boolean {
    if (this.activeTheme.theme === APP_DARK_THEME) return true;
    else return false;
  }
}
