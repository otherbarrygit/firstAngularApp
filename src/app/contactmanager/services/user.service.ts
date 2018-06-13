import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor( private http: HttpClient ) {
    this.dataStore = { users: []};
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    const userUrl2 = 'http://localhost:5000';

    return this.http.get<User[]>(userUrl2)
      .subscribe( data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users');
      });
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next(Object.assign({}, this.dataStore).users); // this notifies all subscribers that there is a new user
      resolver(user);
    });
  }
}
