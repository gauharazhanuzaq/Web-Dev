import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  template: `
    <h1>Photos of Album</h1>
    <div class="photo-list">
      <mat-card *ngFor="let photo of photos" class="photo-card">
        <mat-card-title>{{ photo.title }}</mat-card-title>
        <img [src]="photo.url" alt="{{ photo.title }}" />
      </mat-card>
    </div>
    
    <div class="back-button">
      <button mat-button color="warn" (click)="goBack()">Back</button>
    </div>
  `,
  styles: [`
    .photo-list { display: flex; flex-wrap: wrap; gap: 16px; padding: 16px; }
    .photo-card { width: 250px; padding: 16px; }
    .back-button { margin-top: 20px; }
  `]
})
export class AlbumPhotosComponent {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(id).subscribe(data => this.photos = data);
  }

  goBack() {
    this.location.back(); 
  }
}
