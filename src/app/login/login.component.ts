import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BACKURL = "http://localhost:3000"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = "";

  constructor(private router:Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    let  DATA = {username:this.username};
    this.httpClient.post(BACKURL + "/api/auth", DATA, httpOptions).subscribe((res:any)=>{
      
      console.log("posting: " + JSON.stringify(DATA));
      console.log("postRes: " + JSON.stringify(res));

      if (res.valid) {
        console.log("correct")
        sessionStorage.setItem('userid', res.userid.toString());
        sessionStorage.setItem('userlogin', res.valid.toString());
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('userbirthdate', res.email);
        sessionStorage.setItem('userage', res.role);

        this.router.navigateByUrl('/chat')
      } else {
        alert("Incorrect login")
      }
    })

  }

}
