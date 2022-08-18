import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-update-from',
  templateUrl: './user-update-from.component.html',
  styleUrls: ['./user-update-from.component.css']
})
export class UserUpdateFromComponent implements OnInit{

 user:User;




  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService
  ) {
    this.user = new User();
  }


    updateSubmit() {  //
        console.log("paramsss", this.route.queryParams, this.route.queryParams)
        this.route.queryParams.subscribe(params => {
        console.log("xxx", params)
        this.userService.update(params['id'], this.user).subscribe
        (result => this.gotoUserList());
    })
  }

  gotoUserList() {
    this.router.navigate(['/users']
    );
  }

  ngOnInit(): void {

  }
}
