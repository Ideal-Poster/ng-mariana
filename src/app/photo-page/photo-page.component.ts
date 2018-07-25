import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent {
  images = [
    {
      img: '../../assets/images/gallery-images/22343555_10210834833050403_1518752323_o.jpg',
      thumb: '../../assets/images/gallery-images/22343555_10210834833050403_1518752323_o.jpg',
      description: 'Image 1'
    },
    {
      img: '../../assets/images/gallery-images/22345566_10210834831930375_1164890123_o.jpg',
      thumb: '../../assets/images/gallery-images/22345566_10210834831930375_1164890123_o.jpg',
      description: 'Image 2'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3031WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3031WEB.jpg',
      description: 'Image 3'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3108WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3108WEB.jpg',
      description: 'Image 4'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3289WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3289WEB.jpg',
      description: 'Image 5'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3322WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3322WEB.jpg',
      description: 'Image 6'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3434WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3434WEB.jpg',
      description: 'Image 7'
    },
    {
      img: '../../assets/images/gallery-images/AI3A3486WEB.jpg',
      thumb: '../../assets/images/gallery-images/AI3A3486WEB.jpg',
      description: 'Image 8'
    },
    {
      img: '../../assets/images/gallery-images/Copy of AI3A3205WEB.jpg',
      thumb: '../../assets/images/gallery-images/Copy of AI3A3205WEB.jpg',
      description: 'Image 9'
    },
    {
      img: '../../assets/images/gallery-images/Copy of AI3A3298WEB.jpg',
      thumb: '../../assets/images/gallery-images/Copy of AI3A3298WEB.jpg',
      description: 'Image 8'
    },
    {
      img: '../../assets/images/gallery-images/mindings_pic.jpg',
      thumb: '../../assets/images/gallery-images/mindings_pic.jpg',
      description: 'Image 9'
    }
  ];

  constructor() {}
}
