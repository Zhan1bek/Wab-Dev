import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Ensure correct path
import { Product } from '../models/product.model'; // Ensure correct path

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  share(product: Product) {
    // Implement share functionality if needed
    // Example: Open WhatsApp share URL
    const url = encodeURIComponent(window.location.href);
    const shareMessage = `Check out this product: ${product.name} - ${url}`;
    window.open(`https://wa.me/?text=${shareMessage}`, '_blank');
  }
}
