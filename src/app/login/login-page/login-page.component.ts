import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  name:string = ''
  password:string = ''
  message:string = ''


  constructor() { }

  ngOnInit(): void {
  }

  welcomeUser()
  {
    this.message = 'Welcome '+ this.name
  }

}
