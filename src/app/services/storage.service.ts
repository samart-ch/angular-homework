import { Injectable } from '@angular/core';
import { BaseModel } from '@app/models/base-model';
import { UserLogin } from '@app/models/user-login';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public static readonly USER_KEY = 'user-auth';

  constructor() { }

  clean(): void {
    sessionStorage.clear();
  }

  public saveUser(user: BaseModel<UserLogin>): void {
    sessionStorage.removeItem(StorageService.USER_KEY);
    sessionStorage.setItem(StorageService.USER_KEY, JSON.stringify(user));
  }

  public getUser(): BaseModel<UserLogin> {
    const user = sessionStorage.getItem(StorageService.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
}
