import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/admin-service/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Products } from '../../admin-components/model/products.model';
import { CategoriesService } from '../../services/admin-service/category/categories.service';
import { RestService } from 'src/app/services/admin-service/rest.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: any = []
  categy: any = []
  attrbt: any = []
  id: any;

  prodopts: any;
  varients: any;
  public showAttribute:boolean = false;
  public showProductopt:boolean = false;
  public showVarient:boolean = false;
  public attributeButton:any = 'Create New';
  public productOptButton:any = 'Create New';
  public varientButton:any = 'Create New';

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService,
    private restSer: RestService,
    private categySer: CategoriesService,
  ){}
  
  // Product Form
  formProduct = new FormGroup({
    id: new FormControl(),
    name: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    shortDescription: new FormControl('',Validators.required),
    inStock: new FormControl('',Validators.required),
    categoryId: new FormControl()
  })
  // Attribute Form
  formAttributes = new FormGroup({
    id: new FormControl(),
    productId: new FormControl('5b699305-09dc-42d2-adda-5c1852307a7a'),
    name: new FormControl('',Validators.required),
    value: new FormControl('',Validators.required),
    
  });
  // Product option Form
  formProductOption = new FormGroup({
    id: new FormControl(),
    productId: new FormControl('5b699305-09dc-42d2-adda-5c1852307a7a'),
    sku: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    regularprice: new FormControl('',Validators.required),
    saleprice: new FormControl('',Validators.required),
  });
  
  ngOnInit(): void {
    this.getAllProduct(); //get All Products
    this.getAllCate(); //get All categories
    this.getAllAttribute(); //get All Attributes
  }
  
  
  
  // get All Product
  getAllProduct(){
    console.log('here');
    this.prodService.getProduct().subscribe(data => {
      this.products = data;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
  }
  // Add Product
  addProduct(){
    console.log(this.formProduct.value);
    this.prodService.addProduct(this.formProduct.value).subscribe(data => {
      console.log(data);
      
    }, error => {
      console.log(error);
    });
  }
  // get category (for selection)
  getAllCate() {
    console.log('here');
    this.categySer.getCate().subscribe(data => {
      //console.log(data);
      this.categy = data;
      this.id = data;

      console.log(this.categy);
    } , error => {
      console.log(error);
    });
  }

  // get All Attribute
  getAllAttribute() {
    console.log('here');
    this.restSer.getAttribute().subscribe(data => {
      console.log(data);
      this.attrbt = data;
      console.log(this.attrbt);
    } , error => {
      console.log(error);
    });
  }

  // Add attribute
  addAttribute(){
    console.log(this.formAttributes.value);
    this.restSer.addAttribute(this.formAttributes.value).subscribe(data =>{
      console.log(data);
      console.log(this.getAllAttribute());
    }, error => {
      console.log(error);
    });
  }

  // Delete Attribute
  deleteAttrbute(id){
    console.log(id);
    this.restSer.deleteAttribute(id).subscribe(success => {
      console.log("deleted");
      this.getAllAttribute();
    },error => {
      console.log(error);
    });
  }
  


  // toggling attribute
  toggleAttribute() {
    this.showAttribute = !this.showAttribute;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showAttribute)  
      this.attributeButton = "Collapse";
    else
      this.attributeButton = "Create New";
  }

  // toggling productoption
  toggleProductopt() {
    this.showProductopt = !this.showProductopt;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showProductopt)  
      this.productOptButton = "Collapse";
    else
      this.productOptButton = "Create New";
  }

  //toggling varient
  toggleVarient() {
    this.showVarient = !this.showVarient;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.showVarient)  
      this.varientButton = "Collapse";
    else
      this.varientButton = "Create New";
  }
  

}
