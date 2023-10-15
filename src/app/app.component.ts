import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      tile: 'tree',
      imageUrl: 'assets/image/4k-windowsiran-com-2.jpg' ,
      username: 'nature',
      content: 'i saw neat tree'
    },
    {
      tile: 'mountion',
      imageUrl: 'assets/image/4k-windowsiran-com-5.jpg' ,
      username: 'mountion',
      content: 'i saw neat mountion'
    },
    {
      tile: 'bikking',
      imageUrl: 'assets/image/4k-windowsiran-com-6.jpg' ,
      username: 'bikking',
      content: 'i saw neat bikking'
    },
    {
      tile: 'tree',
      imageUrl: 'assets/image/4k-windowsiran-com-2.jpg' ,
      username: 'nature',
      content: 'i saw neat tree'
    },


  ];
  getposts(){
    return this.posts
  }
  
}

