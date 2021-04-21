import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  pages=[
    {
      title:'Main',
      url:'home',
      icon:'home',
    },
    {
      title:'Profile',
      children:[
        {
          title:'Modify',
          url:'profile',
          icon:'md-build',
        },
    {
      title:'Log Out',
      url:'profile',
      icon:'md-log-out',
    },
    ]},
    
  ]
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  constructor() {}

}

