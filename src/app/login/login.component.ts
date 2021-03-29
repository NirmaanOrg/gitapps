import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  senddata(data:NgForm)
  {
     console.log("data of form is:",data.value);
  }





  numbers:number[]=[10,20,30,40,50];
  
  status:boolean=true;
  changestatus()
  {
    this.status=!this.status;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
