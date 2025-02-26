import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/home" routerLinkActive="active" class="nav-link">Home</a> |
      <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a> |
      <a routerLink="/albums" routerLinkActive="active" class="nav-link">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {}
