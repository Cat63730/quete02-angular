import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  imgName: string = "ilou";
  imgSrc: string = 'https://randomuser.me/api/portraits/lego/2.jpg';
  userName: string = "Doe";
  firstName: string = "John";
  text: string ="";
  age: number = 25;
  secret : boolean = true;

  constructor(){}

  secretMethod () {
  this.secret = !this.secret;
 }

}
