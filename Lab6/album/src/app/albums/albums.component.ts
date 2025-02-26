import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  template: `
    <h1>Albums</h1>
    <div class="album-list">
      <mat-card *ngFor="let album of albums" class="album-card">
        <mat-card-title>{{ album.title }}</mat-card-title>
        <mat-card-actions>
          <button mat-button color="primary" (click)="viewDetails(album.id)">View Details</button>
          <button mat-button color="accent" (click)="viewPhotos(album.id)">Photos</button>
          <button mat-button color="warn" (click)="deleteAlbum(album.id)">Delete</button> <!-- Кнопка удаления -->
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .album-list { display: flex; flex-wrap: wrap; gap: 16px; padding: 16px; }
    .album-card { width: 250px; padding: 16px; }
  `]
})
export class AlbumsComponent {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) {
    this.albumsService.getAlbums().subscribe(data => this.albums = data);
  }

  viewDetails(id: number) {
    this.router.navigate(['/albums', id]); 
  }

  viewPhotos(id: number) {
    this.router.navigate(['/albums', id, 'photos']); 
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}

