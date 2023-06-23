import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

import algoliasearch from 'algoliasearch';
import { environment } from 'src/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{
  categories: Array<string> | undefined;
  categorieSubscription: Subscription | undefined;
  private client: any;
  private index: any;
  products: Array<Product> | undefined;
  productSubscription: Subscription | undefined;
  sort ='desc';
  count = '12';
  activeClass: string = '';
  category = '';
  // sortIcon = '../../../../../assets/images/icons/sort.svg';

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    
    ) { 
      // this.client = algoliasearch(environment.apiId, environment.apiKey);
      // this.index = this.client.initIndex('dev_PRODUCTS');
    }

  ngOnInit(): void {
    this.categorieSubscription = this.apiService.getAllCategorie()
    .subscribe((response) => {
      this.categories = response;

      console.log("NOS CATEG ", this.categories);
      
    })

    this.getProducts();
  }

  getProducts(){
    this.productSubscription = this.apiService.getAllProducts(this.count, this.sort, this.category)
      .subscribe((_product) => {
        this.products = _product;

        console.log("HOLA", this.products);
        
      })
  }

  getNumberList(count: number): number[] {
    return Array.from({length: count}, (_, index) => index + 1);
  }
  
  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }



  // getMetadata(productId: number) {
  //   this.index.getObject(productId, (err: any, content: any) => {
  //     if (err) {
  //       console.error(err);
  //       // Gérer l'erreur
  //     } else {
  //       console.log(content);
  //       // Utiliser les métadonnées récupérées
  //     }
  //   });
  // }

  // onMethodCalled(productId: number) {
  //   this.getMetadata(productId);
  // }

  checkActiveClass(item: string): void{
    
    this.activeClass = item;
    if (item != 'all') {
      this.category = item;
    }
    else{
      this.category = ''
    }
    

    console.log("OUR CNA ", this.category);
    
    this.getProducts();
  }
  

  ngOnDestroy(): void{
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
    if (this.categorieSubscription) {
      this.categorieSubscription.unsubscribe();
    }
  }
}
