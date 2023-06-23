import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items: []};
  carouselConfig: any; 
  itemsQuantity: number =  0;
  slides = [
    {
      image:'../../../assets/images/img1.jpg'
    },
    {
      image:'../../../assets/images/img2.jpg'
    },
    {
      image:'../../../assets/images/img3.jpg'
    },
    {
      image:'../../../assets/images/img4.jpg'
    },
    {
      image:'../../../assets/images/img5.jpg'
    },
  ]
  @Input() get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);

  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onClearCart(){
    this.cartService.clearCart();
  }

}
