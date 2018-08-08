import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
	template: `
		<mdb-navbar SideClass="navbar navbar-expand-lg navbar-dark elegant d-block d-sm-none">
			<mdb-navbar-brand>
					<a class="navbar-brand" href="#">Navbar</a>
			</mdb-navbar-brand>
			<links>
					<div class="navbar-nav">
						<a routerLink="/" class="nav-link" routerLinkActive="text-white" [routerLinkActiveOptions]="{ exact: true }">Home</a>
						<a routerLink="/events" class="nav-link" routerLinkActive="text-white">Events</a>
						<a routerLink="/music" class="nav-link" routerLinkActive="text-white">Music</a>
						<a routerLink="/gallery" class="nav-link" routerLinkActive="text-white">Gallery</a>
						<a routerLink="/contact" class="nav-link" routerLinkActive="text-white">Contact</a>
					</div>
			</links>
	</mdb-navbar>

  <mdb-navbar SideClass="navbar navbar-expand-sm fixed-top d-none d-sm-block">
	<!-- Collapsible content -->
	<links style="font-size:24px; margin-top:-12px;">
		<!-- Links -->
		<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a routerLink="/" class="nav-link" routerLinkActive="text-white" [routerLinkActiveOptions]="{ exact: true }">Home</a>
			</li>
			<li class="nav-item">
				<a routerLink="/events" class="nav-link" routerLinkActive="text-white">Events</a>
			</li>
			<li class="nav-item">
				<a routerLink="/music" class="nav-link" routerLinkActive="text-white">Music</a>
			</li>
			<li class="nav-item">
				<a routerLink="/gallery" class="nav-link" routerLinkActive="text-white" >Gallery</a>
			</li>
		</ul>
		<!-- Links -->
		<div class="nav-item">
			<a routerLink="/contact" class="nav-link" routerLinkActive="text-white" >Contact</a>
		</div>
	</links>
</mdb-navbar>

  `,
	styles: [`
		:host {
			display:block;
			z-index: 30;
			position: relative;
		}
    .nav-item > a {
			right: -8px;
      padding-right: 50px;
			color: dimgrey;
    }
    .nav-item > a:hover {
      color: white;
    }

  `]
})
export class NavbarComponent {

  constructor() { }

}
