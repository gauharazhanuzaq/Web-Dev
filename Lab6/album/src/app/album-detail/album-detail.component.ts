import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, FormsModule],
  template: `
    <mat-card *ngIf="album" class="album-detail">
      <mat-card-title>
        <input [(ngModel)]="album.title" class="title-input" />
      </mat-card-title>
      <mat-card-content>
        <p>Details about the album...</p>
        <p *ngIf="saveStatus" class="save-status">{{ saveStatus }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="primary" (click)="saveChanges()">Save</button>
        <button mat-button color="warn" (click)="goBack()">Back</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .album-detail { max-width: 500px; margin: 16px auto; padding: 16px; }
    .title-input { font-size: 20px; width: 100%; border: none; border-bottom: 1px solid #ccc; padding: 4px; }
    .title-input:focus { outline: none; border-bottom: 2px solid #1976d2; }
    .save-status { font-weight: bold; color: green; }
  `]
})
export class AlbumDetailComponent {
  album: any;
  saveStatus: string | null = null;  // Статус сохранения изменений

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private location: Location
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => this.album = data);
  }

  saveChanges() {
    this.albumsService.updateAlbum(this.album.id, { title: this.album.title }).subscribe(updatedAlbum => {
      console.log('Updated album:', updatedAlbum);
      this.saveStatus = 'Changes saved successfully!';  
      setTimeout(() => this.saveStatus = null, 3000); 
    });
  }

  goBack() {
    this.location.back();
  }
}
