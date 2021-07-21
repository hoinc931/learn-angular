import { Component, OnInit } from '@angular/core';
import { Product } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    id: Math.floor((1 + Math.random()) * 0x10000),
    name: '',
    image: '',
    price: 0,
    status: true
  }

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    this.productService.addProduct(this.product).subscribe(data => console.log("successfully with data: ", data))
  }
}
