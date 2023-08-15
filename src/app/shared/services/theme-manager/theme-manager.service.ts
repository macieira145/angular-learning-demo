import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage-service.service';
import { Observable } from 'rxjs';
import { LS_THEME } from '../../constants/local-storage.constants';
import { ITheme } from '../../interfaces/theme.interface';
import { ThemeManager } from '../../classes/theme-manager';

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  constructor(private localStorageService: LocalStorageService) {}

  public loadTheme(): Observable<ITheme> {
    return this.localStorageService.observeValue(LS_THEME);
  }

  public setTheme(value: string): void {
    this.localStorageService.setValue(LS_THEME, new ThemeManager(value));
  }

  public getTheme(): ITheme {
    return this.localStorageService.getValue(LS_THEME) as ThemeManager;
  }
}
