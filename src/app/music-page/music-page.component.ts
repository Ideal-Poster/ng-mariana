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
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam pellentesque mauris sed sem faucibus
      nec rutrum purus feugiat. Duis vel eleifend diam. Suspendisse
      sodales ipsum sed ligula porttitor rhoncus. Cras quis vulputate
      ipsum. Maecenas blandit metus massa, at elementum mauris`,
      albumArt: '../../assets/images/smoke-and-sugar/album-art.jpg',
      groupPhoto: '../../assets/images/smoke-and-sugar/photo.jpg',
      selector: 0,
      color: '#485A6D'
    },
    {
      name: 'The Lovelace Band',
      description: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nullam pellentesque mauris sed sem faucibus
      nec rutrum purus feugiat. Duis vel eleifend diam. Suspendisse
      sodales ipsum sed ligula porttitor rhoncus. Cras quis vulputate
      ipsum. Maecenas blandit metus massa, at elementum mauris`,
      albumArt: '../../assets/images/lovelace-band/album-art.jpg',
      groupPhoto: '../../assets/images/lovelace-band/photo.jpg',
      selector: 1,
      color: '#736E49'
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
