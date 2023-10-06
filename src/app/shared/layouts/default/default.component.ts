import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeManagerService } from '../../services/theme-manager/theme-manager.service';
import { ITheme } from '../../interfaces/theme.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layouts-default',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultLayoutComponent implements OnInit {
  public activeTheme: ITheme = {} as ITheme;

  constructor(private themeManagerService: ThemeManagerService) {}

  ngOnInit(): void {
    this.activeTheme = this.themeManagerService.getTheme();

    this.themeManagerService.loadTheme().subscribe((theme) => {
      this.activeTheme = theme;
    });
  }
}
