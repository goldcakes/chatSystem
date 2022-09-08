import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Userobj } from '../userobj';

const BACKURL = "http://localhost:3000"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userid = 0;
  username = "";
  email = "";
  role = "standard";

  constructor(private router: Router, private httpClient: HttpClient) {
    if (!(sessionStorage.getItem('userlogin')=="true")){
      alert("login please");
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit(): void {
  }

  addUser(){
    let userobj = {
      'userid': this.userid,
      'username': this.username, 
      'email': this.email, 
      'role': this.role
    }
    this.httpClient.post<Userobj[]>(BACKURL + '/loginafter', userobj,  httpOptions)
      .subscribe((m: any) => {console.log(JSON.stringify(m));});
  }

}
