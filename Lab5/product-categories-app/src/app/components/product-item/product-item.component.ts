import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter<number>();

  increaseLikes() {
    this.product.likes++;
  }

  removeProduct() {
    this.productRemoved.emit(this.product.id);
  }
}
