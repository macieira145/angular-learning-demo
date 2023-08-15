import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage-service.service';
import { LS_THEME } from '../../constants/local-storage.constants';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private localStorageService: LocalStorageService) {}
}
