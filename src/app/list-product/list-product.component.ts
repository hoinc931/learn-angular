import { Component, OnInit } from '@angular/core';
import { Product } from '../product-interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] | undefined;
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( data => this.products = data)
  }

  handleRemove(id: number): void{
    let confirm = window.confirm('Are you suar to delete this product?')
    if(confirm){
      this.productService.removeProduct(id).subscribe( data => {
        this.products = this.products?.filter(item => item.id != data.id)
      } )
    }
    
  }
}
