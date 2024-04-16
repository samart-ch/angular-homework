import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';
import { BaseModel } from '@app/models/base-model';
import { UserLogin } from '@app/models/user-login';


const AUTH_API = 'https://training-homework.calllab.net';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private currentUserSubject = new BehaviorSubject<string>('');
  
  constructor(
    private client: HttpClient,
    private storage: StorageService) {}

  login(username: string, password: string): Observable<BaseModel<UserLogin>> {

    return this.client.post<BaseModel<UserLogin>>(
      environment.apiEndpoint + '/v1/login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  logout() : void {

    this.storage.clean();

  }

  public get isLoggedIn(): boolean {
    return this.storage.getUser() !== null;
  }

  public get getToken(): string | undefined {
    return this.storage.getUser().data?.accessToken;
  }

  public setUserValue(user: string): void {
    this.currentUserSubject.next(user);
  }

  public get currentUserValue() {
    return  this.currentUserSubject.value;
  }

  public get currentuserName(): string | undefined {
    return this.storage.getUser().data?.fullName;
  }



}
