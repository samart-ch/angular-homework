import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
import { StorageService } from './storage.service';


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

  login(username: string, password: string): Observable<any> {
    return this.client.post(
      AUTH_API + '/v1/login',
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
