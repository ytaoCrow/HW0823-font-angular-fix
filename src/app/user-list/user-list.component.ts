import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from  '../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteItem(id: string, index: number) {
    this.userService.delete(id).subscribe(response =>{
      this.users.splice(index, 1);
    });
  }

  updateUser(id: string, i: number){

  }
}
