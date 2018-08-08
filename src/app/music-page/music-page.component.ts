import { Component } from '@angular/core';
// For MDB Angular Pro
import { DropdownModule, WavesModule } from 'ng-uikit-pro-standard';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent {
  selector = 0;
  groups = [
    {
      name: 'Smoke & Sugar',
      description: `Smoke and Sugar is a New York City based 5 person band.
        We fuse funk, soul, jazz and rock together to bring you that perfect
        balance on smoke and sugar.`,
      image1: '../../assets/images/smoke-and-sugar/image-1.jpg',
      image2: '../../assets/images/smoke-and-sugar/image-2.jpg',
      selector: 0,
      color: '#4a5e73',
      linkName: 'Website',
      link: 'https://www.smokeandsugarmusic.com'
    },
    {
      name: 'SYBLING',
      description: `SYBLING is a New York City based band with sisters Alice and Mari.`,
      image1: '../../assets/images/SYBLING/image-1.jpg',
      image2: '../../assets/images/SYBLING/image-2.jpg',
      selector: 1,
      color: '#565374',
      linkName: 'Soundcloud',
      link: 'https://soundcloud.com/sybling'
    },
    {
      name: 'The Lovelace Band',
      description: `The Lovelace Band is a Manhattan-based ensemble
        that plays jazz, blues, funk, bossa nova & lounge music,
        imminently available for parties, events, weddings,
        and back-alley honky-tonks`,
      image1: '../../assets/images/lovelace-band/image-1.jpg',
      image2: '../../assets/images/lovelace-band/image-2.jpg',
      selector: 2,
      color: '#6f6a49',
      linkName: 'Website',
      link: 'https://www.klovelacemusic.com/'
    },
    {
      name: 'Vibe Mosaic',
      description: `Contact Me to get in touch about potential collabs!`,
      image1: '../../assets/images/vibe-mosaic/image-1.jpg',
      image2: '../../assets/images/vibe-mosaic/image-2.jpg',
      selector: 3,
      color: '#4c6562',
      linkName: 'Listen',
      link: 'https://linktr.ee/vibemosaic'
    }
  ];

  public isOpenChange(): void { console.log('isOpenChange triggered!'); }
  public onHidden(): void { console.log('onHidden triggered!'); }
  public onShown(): void { console.log('OnShown triggered!'); }
  constructor() { }

  activeHighlight(selector) {
    const bands = document.getElementsByClassName('navbar-bands');
    const bandsMobile = document.getElementsByClassName('navbar-mobile');


    const body = document.getElementsByClassName('background-color');
    console.log(bandsMobile[0]);

    // bands.
    Array.prototype.filter.call(bands, function(bands) {
        bands.classList.remove('text-white');
    });
    Array.prototype.filter.call(bandsMobile, function(bands) {
      bands.classList.remove('text-white');
  });

    bands[selector].classList.add('text-white');
    bandsMobile[selector].classList.add('text-white');

    body[0].setAttribute('style', ('background:' + this.groups[selector].color));
  }
}
