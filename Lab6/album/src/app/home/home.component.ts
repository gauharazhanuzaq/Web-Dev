import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Welcome to the Album App</h1>`,
  styles: [`h1 { text-align: center; margin-top: 20px; }`]
})
export class HomeComponent {}
