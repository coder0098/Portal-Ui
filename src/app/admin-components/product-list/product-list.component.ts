import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any
  constructor() { 
    this.products = [{
      name : "tshirt",
      quantity: "2",
      published : "yes",
      isFeatured : "yes",
      visibilityInCatalog : "yes",
      inStock : "yes",
      categoryName : "clothing",
      created: "25th May by kunal",
      modified: "27th May by Parth",
      displayUnit : " "
    }]
  }

  ngOnInit(): void {
  }

}
