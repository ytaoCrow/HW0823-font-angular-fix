import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/v1/user/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  public delete(id: string){
    return this.http.delete<User>(`${this.usersUrl}${id}`);
  }



  public update(id :string, useData : User): Observable<any>{

    console.log("ttt", id, useData);
    return this.http.put<User>(`${this.usersUrl}${id}`, useData);
  }
}
