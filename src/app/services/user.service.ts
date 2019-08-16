import {User} from '../models/Users.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: '',
      hobbies: ['']
    }
  ];
  userSubject = new Subject<User[]>();
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
