import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrl: './app-product-list.component.css'
})
export class AppProductListComponent implements OnInit{
  title:string | undefined;
  constructor(){}

  ngOnInit(): void {
    this.title = 'Products';
  }

  products: {image: string, name:string, price: string, rating: number, ratingImg: string , description: string, link: string}[] = [
    {image: 'https://png.monster/wp-content/uploads/2023/09/PNG.monsterapple-iphone-15-pro-photo%20png.png', name: 'Iphone15', price: '1000000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'},
    {image: 'https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-7.png', name: 'Laptop', price: '100000 KZT', rating: 4.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000'},
    {image: 'https://media.cnn.com/api/v1/images/stellar/prod/211018131032-04-apple-event-1018-screenshot.jpg?q=w_1788,h_1006,x_0,y_0,c_fill', name: 'AirPods', price: '50000 KZT', rating: 7.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'},
    {image: 'https://m.media-amazon.com/images/I/61XdkEwY5wL._AC_UF894,1000_QL80_.jpg', name: 'Smart watch', price: '60000 KZT', rating: 5.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000'},
    {image: 'https://nordicelectronics.dk/images/Apple-Watch-6-40mm-Silver-Aluminium-Case-White-SportBand-1-p.jpg', name: 'Apple watch', price: '200000 KZT', rating: 8.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000'},
    {image: 'https://img.freepik.com/free-psd/levitating-headphones-still-life_23-2150806967.jpg', name: 'Headphone', price: '30000 KZT', rating: 6.1, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',link: 'https://kaspi.kz/shop/p/htc-wireless-headphone-1-chernyi-111972451/?c=750000000'},
    {image: 'https://www.hoxtonmacs.co.uk/cdn/shop/products/apple-macbook-pro-14-inch-macbook-pro-14-inch-m1-pro-8-core-space-grey-2021-good-40236216647996.jpg?v=1680248552', name: 'Macbook', price: '700000 KZT', rating: 7.5, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000'},
    {image: 'https://техника-бт.рф/wp-content/uploads/2022/12/img_id3189967585152734223.jpeg', name: 'TV', price: '500000 KZT', rating: 5.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000'},
    {image: 'https://i5.walmartimages.com/seo/Sony-PlayStation-5-PS5-Digital-Console-Slim_90c5bdfa-0eb9-4b09-924c-b3b239500299.70f3a9281885886e33e67ed205d9403a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', name: 'PS5', price: '300000 KZT', rating: 6.3, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000'},
    {image: 'https://www.laptop75off.com/product_images/w/996/41__91462_zoom.jpg', name: 'PC', price: '1000000 KZT', rating: 9.2, ratingImg: 'https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', link: 'https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000'},
  ];

  Share(link: string){
    const telegram = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegram, '_blank');
  }

}
