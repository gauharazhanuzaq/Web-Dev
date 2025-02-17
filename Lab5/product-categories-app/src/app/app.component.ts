import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-app';
  categories = ['Electronics', 'Beauty and health', 'Home Appliances', 'Books'];
  selectedCategory: string = '';
  productsByCategory: any = {
    'Electronics': [
      { id: 1, name: 'Wireless Mouse', description: 'A high-quality wireless mouse.', rating: 4.9, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium', сaspiLink: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000' },
      { id: 2, name: 'Wi-Fi Router', description: 'A fast and reliable router.', rating: 4.8, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000' },
      { id: 3, name: 'Ноутбук HP Laptop 15-fc0072ci 15.6" / 8 Гб / SSD 512 Гб / Без ОС / A19WCEA', description: 'A powerful laptop for all your needs.', rating: 5.0, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0072ci-15-6-8-gb-ssd-512-gb-bez-os-a19wcea-131090992/?c=750000000' },
      { id: 4, name: 'Наушники OEM Air pro 2 белый', description: 'Noise-cancelling headphones.', rating: 4.7, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/oem-air-pro-2-belyi-118366664/?c=750000000' },
      { id: 5, name: 'Смарт-часы Y-13 SW 43 мм золотистый-золотистый', description: 'A stylish smartwatch.', rating: 4.6, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h3a/85300885454878.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/y-13-sw-43-mm-zolotistyi-zolotistyi-112273482/?c=750000000' },
    ],
    'Beauty and health': [
      { id: 6, name: 'Bella ватные диски Cotton 120 шт', description: 'Мягкие нежные подушечки из 100% хлопка', rating: 4.3, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hce/63887012495390.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/bella-vatnye-diski-cotton-120-sht-100224746/?c=750000000' },
      { id: 7, name: 'Ollin Professional Perfect Hair 15 в 1 крем-спрей 250 мл', description: 'Уникальное многофункциональное средство ', rating: 4.5, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/ollin-professional-perfect-hair-15-v-1-krem-sprei-250-ml-100008645/?c=750000000' },
      { id: 8, name: 'Gabrini гель Brow Fixing & Soap effect прозрачный 8 мл', description: 'самый лучший гель для бровей', rating: 4.7, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p80/p22/17173988.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/gabrini-gel-brow-fixing-soap-effect-prozrachnyi-8-ml-105169657/?c=750000000' },
      { id: 9, name: 'MISS TAIS Mauve карандаш коричневый №765', description: ' Состав: Белый вазелин, твердый парафин, касторовое масло, пчелиный воск, ланолин, косметические пигменты.', rating: 4.8, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=gallery-large', caspiLink: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-765-100155528/?c=750000000' },
      { id: 10, name: 'SPLAT зубная паста Ультракомплекс 100 мл', description: 'Зубная паста', rating: 4.0, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h91/86777093226526.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/splat-zubnaja-pasta-ul-trakompleks-100-ml-100194794/?c=750000000' },
    ],
    'Home Appliances': [
      { id: 11, name: 'Пылесос Deerma DX700 белый', description: 'High-power vacuum cleaner.', rating: 4.6, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000' },
      { id: 12, name: 'Coffee Machine', description: 'Espresso coffee machine for your mornings.', rating: 4.8, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h6f/64342528688158.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/kofemashina-xiaomi-mijia-capsule-coffee-machine-belyi-101533642/?c=750000000' },
      { id: 13, name: 'Blender', description: 'Smoothie blender for healthy drinks.', rating: 4.9, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000' },
      { id: 14, name: 'Air Conditioner', description: 'Keep cool with this air conditioner.', rating: 4.7, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h76/ha6/82776193040414.png?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/xiaomi-mijia-fresh-air-conditioner-premium-edition-kfr-35gw-f1a1-belyi-112495324/?c=750000000' },
      { id: 15, name: 'Microwave', description: 'Quick cooking with this microwave.', rating: 4.5, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h8e/87138526363678.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/hansa-ammf19m1bh-chernyi-123644203/?c=750000000' },
    ],
    'Books': [
      { id: 16, name: 'Книга Спаркс Н.: Спеши любить', description: 'Тихий городок Бофор', rating: 4.4, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h1b/63846893322270.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/sparks-n-speshi-ljubit--100259730/?c=750000000' },
      { id: 17, name: 'Книга Исабеков Д.: Гауһар тас', description: '  Бұл шығарма қарапайым Алматы облысындағы ауылда тұратын отбасы туралы жазылаған', rating: 4.8, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/64090025525278.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-101501105/?c=750000000' },
      { id: 18, name: 'Книга Спаркс Н.: Дневник памяти', description: 'Это - не "любовный роман", а роман о любви.', rating: 4.6, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/he7/63886250180638.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/sparks-n-dnevnik-pamjati-100259727/?c=750000000' },
      { id: 19, name: 'Книга Ремарк Э. М.: Триумфальная арка', description: 'Триумфальная арка – пронзительная история любви всему наперекор, любви, приносящей боль', rating: 4.9, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h7d/63803844821022.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000' },
      { id: 20, name: 'Книга Уайльд О.: Портрет Дориана Грея', description: '"Портрет Дориана Грея" - самое знаменитое произведение Оскара Уайльда', rating: 4.7, likes: 0, photoUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h64/64096830750750.jpg?format=gallery-medium', caspiLink: 'https://kaspi.kz/shop/p/uail-d-o-portret-doriana-greja-100996924/?c=750000000' },
    ]
  };
  increaseLikes(product: any) {
    product.likes++;
  }

  removeProduct(product: any) {
    const categoryProducts = this.productsByCategory[this.selectedCategory];
    const index = categoryProducts.indexOf(product);
    if (index > -1) {
      categoryProducts.splice(index, 1);
    }
  }

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}
