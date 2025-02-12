import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  images: string[];
  currentImage: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h6a/79480589680670.jpg?format=gallery-medium',
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
      name: 'Мышь Wireless Mouse черный',
      description: '837 ₸ цвет: черный, вес: 100,0г',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/h57/63760532733982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/hb2/63760533192734.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: '12 180 ₸ Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с модели TD-W8961N представляет собой невероятно надёжное и универсальное устройство, способное предоставлять всю полноту возможностей стандарта ADSL2+, а также способное стать надёжным и экономным решением для дома и предприятия малого бизнеса.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfb/hea/69003731075102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/hf8/69003731599390.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=gallery-medium',
      name: 'Сумка Portcase 9011 черный',
      description: '3749 ₸ Предназначен для удобной переноски и защиты устройства. Элегантный дизайн и функциональность позволяют использовать их как в повседневной жизни, так и в деловой обстановке. Внутренние отделения и мягкая подкладка помогают уберечь ноутбук от повреждений, а дополнительные карманы подходят для хранения аксессуаров и документов. Практичное решение для комфортного и безопасного использования вашего устройства.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h93/64377062064158.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      description: ' 8582 ₸ Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },    
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: '279 128 ₸ Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h3a/85300885454878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h49/hc6/85300885520414.jpg?format=gallery-medium',
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h3a/85300885454878.jpg?format=gallery-medium',
      name: 'Смарт-часы Y-13 SW 43 мм золотистый-золотистый',
      description: '3 935 ₸ Операционная система: Android, Тип:умные часы',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/y-13-sw-43-mm-zolotistyi-zolotistyi-112273482/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h62/64362055106590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h8d/64362058219550.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h62/64362055106590.jpg?format=gallery-medium',
      name: 'Графический планшет LCD GY-WT-8504 черный',
      description: '516 ₸ Графический планшет использует технологию LCD без подсветки, то есть на жидкокристаллическом экране остаются следы в местах нажатия на него.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lcd-gy-wt-8504-chernyi-103354496/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h5a/84459276075038.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/hd8/84459276140574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hbe/84459276206110.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h5a/84459276075038.jpg?format=gallery-medium',
      name: 'Медиаплеер Xang Shi XS97SE Smart TV',
      description: '7 552 ₸ Супер компактная приставка для телевизора XS97SE Smart TV box  поставляется с пультом ДУ, кабелем hdmi и адаптером питания. Пульт работает от двух элементов питания типа AAA (в комплект входят). Приставка подключается через разъем hdmi, который подключается к корпуса устройства а потом к телевизору с помощью hdmi кабеля. На задней стенке вы найдете разъем для подключения Smart TV box к питанию. С помощью Smart TV box можно смотреть ТВ каналы, фильмы, ютуб и т.д  ',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xang-shi-xs97se-smart-tv-114353939/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h44/64238812921886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h48/hb8/64238815969310.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd3/64238818295838.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h44/64238812921886.jpg?format=gallery-medium',
      name: 'Bluetooth-трекер Apple Airtag белый',
      description: '17 840 ₸ AirTag — это суперлёгкий способ находить свои вещи. Прикрепите один трекер AirTag к ключам, а другой — к рюкзаку. И теперь их видно на карте в приложении «Локатор». Там же можно посмотреть, где находятся ваши устройства Apple, а также ваши друзья и семья.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000'
    },    
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium'
      ],
      currentImage: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      name: 'Пылесос Deerma DX700 белый',
      description: '15 033 ₸ Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. Технология циклонной фильтрации благодаря высокой силе всасывания гарантирует быстрый сбор пыли и мусора. Контейнер емкостью 0.8 л легко очищается от собранного мусора.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
    }
  ];

  changeMainImage(product: Product, newImage: string) {
    product.currentImage = newImage;
  }

  shareOnWhatsApp(productLink: string) {
    const url = `https://wa.me/?text=${encodeURIComponent(productLink)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(productLink: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
    window.open(url, '_blank');
  }
}
