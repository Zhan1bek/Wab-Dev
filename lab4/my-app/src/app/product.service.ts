import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      image: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
      name: 'Адаптер',
      description: 'Apple 20W USB-C Power Adapter белый',
      rating: 5,
      price: 100
    },
    // Добавьте больше продуктов по аналогии
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
