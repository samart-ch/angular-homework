import { Injectable } from '@angular/core';
import { LoginForm } from '@app/models/login-form';
import { BaseModel, UserLogin } from '@app/models/user-login';

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

  public getUser(): LoginForm {
    const user = sessionStorage.getItem(StorageService.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  public isLoggedIn(): boolean {

    let ddd = sessionStorage.getItem(StorageService.USER_KEY) !== null;

    return sessionStorage.getItem(StorageService.USER_KEY) !== null;
  }
}
