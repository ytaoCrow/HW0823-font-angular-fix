import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-update-from',
  templateUrl: './user-update-from.component.html',
  styleUrls: ['./user-update-from.component.css']
})
export class UserUpdateFromComponent{

  user:User;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService
  ) {
    this.user = new User();
  }

  updateSubmit() {  //
    this.userService.update(this.user.id, this.user).subscribe
    (result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
