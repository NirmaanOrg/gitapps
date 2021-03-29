import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
imgdata:any[]=[];
  constructor(private img:DataService) { }

  ngOnInit(): void {
    this.img.Getdata().subscribe((result)=>{
      this.imgdata=result["data"];
    })
  }

}
