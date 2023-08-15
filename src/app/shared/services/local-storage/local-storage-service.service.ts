import { Injectable } from '@angular/core';
import { filter, fromEvent, map, Observable, pipe, Subject } from 'rxjs';
import { LS_THEME } from '../../constants/local-storage.constants';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private storageChanges$: Observable<StorageEvent>;

  constructor() {
    this.storageChanges$ = fromEvent<StorageEvent>(window, 'storage');
  }

  /**
   * Creates a value in the local storage
   * @param key - identifier of the value in local storage
   * @param value - object that needs to be stored
   * @returns - true if saved successfully or false if it fails
   */
  public setValue(key: string, value: any): boolean {
    localStorage.setItem(key, JSON.stringify(value));

    const storageEvent = new StorageEvent('storage', {
      key,
      newValue: JSON.stringify(value),
      storageArea: localStorage,
    });

    window.dispatchEvent(storageEvent);

    return this.valueExists(key);
  }

  /**
   * Gets a value from the local storage
   * @param key - identifier of the value in local storage
   * @returns - value if exists or null if it does not
   */
  public getValue(key: string): any | null {
    let data = localStorage.getItem(key);

    if (data !== null) return JSON.parse(data);
    else return null;
  }

  /**
   * Delete a value from the local storage
   * @param key - identifier of the value in local storage
   * @returns - true if successfully deleted or false if it fails
   */
  public deleteValue(key: string): boolean {
    localStorage.removeItem(key);

    return this.valueExists(key);
  }

  /**
   * Checks if a value exists in the local storage
   * @param key - identifier of the value in local storage
   * @returns - true if exists or false if it does not
   */
  public valueExists(key: string): boolean {
    if (localStorage.getItem(key) !== undefined && null) return true;
    else return false;
  }

  /**
   * Obeserves the value stored in local storage with the correspondent key
   * @param key - identifier of the value in local storage
   * @returns - observable that holds the value
   */
  public observeValue(key: string): Observable<any> {
    return this.storageChanges$.pipe(
      // Filter events for the specific key you're interested in
      filter((event: StorageEvent) => event.key === key),
      // Map to the new value of the key
      map((event: StorageEvent) =>
        event.newValue === null ? null : JSON.parse(event.newValue)
      )
    );
  }
}
