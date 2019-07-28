import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  user = {};
  constructor(private http: HttpClient) {
    this.user = {
      'name':'',
      'contNumber':'',
      'email':'',
      'examDate':'',
      'examTime':'',
      'examMark':''
    };
  }

  addUserInfo = function(){
    console.log(this.user);
    this.http.post('http://localhost:4000/api/user/addUser', this.user)
        .subscribe(data => {
          console.log(data);
        }, error => {
          console.log(JSON.stringify(error.json()));
        });
  }

  ngOnInit() {
  }

}
