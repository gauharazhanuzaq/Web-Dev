import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>About This App</h1><p>This app showcases albums and photos.</p>`,
  styles: [`h1 { text-align: center; } p { text-align: center; }`]
})
export class AboutComponent {}
