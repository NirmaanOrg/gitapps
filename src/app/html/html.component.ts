import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
names:string="";


test(data:any):void{
  console.log("test is called:",data);
}




name:string="Nirmaan";
n:number=100;
imgurl:string="http://4.bp.blogspot.com/--5ND_bRH2CQ/UEhZCUQ0DxI/AAAAAAAAA50/vS3dt0UNxvU/s1600/sun-ray-lake-full-HD-nature-background-wallpaper-for-laptop-widescreen.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
