import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class roomCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getRandomImage(): string{
    let image: string[] = [
      'http://www.mbc.net/default/mediaObject/photos-2017/September-/26-9-2017/ozil%201%20(2)/original/7c3e02797bdebfb620a2ac36871a82bd3cb69380/ozil%201%20(2).jpg',
      'http://images.locationdesign.net//Blog/Posts/2017/1/31/37253_19ffe646-103d-4ef7-ba5b-8a51e7ebf0b9.jpg',
      'https://www.zoomtaqnia.com/wp-content/uploads/2015/05/sweethome3d-600x330.jpg',
      'http://nisfeldunia.ahram.org.eg/Media/Multimedia/2017/11/27/2017-636473746887893380-789.png',
      'http://www.sayidaty.net/sites/default/files/20/04/2016/1461152194_shutterstock_196122077_copy.jpg',
      'https://static.ounousa.com/Content/ResizedImages/638/654/inside/161010103236076.jpg'
    ]

    return image[Math.floor(Math.random() * (image.length -1))];
  }
}
