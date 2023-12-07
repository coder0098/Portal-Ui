import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/admin-service/category/categories.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public buttonName:any = 'Add New';
  public show:boolean = false;
  categy: any = [];
  constructor(private categySer:CategoriesService) {}
  
  ngOnInit(): void {
    this.getAllCate();
  }

  //Attribute Form
  formCategory = new FormGroup({
    id: new FormControl(),
    parentId: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    slug: new FormControl('',Validators.required)

  });
  //Get All Category
  getAllCate() {
    console.log('here');
    this.categySer.getCate().subscribe(data => {
      console.log(data);
      this.categy = data;
      console.log(this.categy);
    } , error => {
      console.log(error);
    });
  }
  
  //Add Category
  addCate(){
    console.log(this.formCategory.value);
    this.categySer.addCate(this.formCategory.value).subscribe(data => {
      //console.log(data);
      console.log(this.getAllCate());
    }, error => {
      console.log(error);
    });
  }

  //Update Category
  updateCategory(){
    console.log(this.formCategory.value);
    this.categySer.updateCate(this.formCategory.value).subscribe(success => {
      console.log("updated");
      console.log(this.getAllCate());
    }, error => {
      console.log(error);
    });
  }

  //Delete category
  deleteCate(id){
    console.log(id);
    this.categySer.delCate(id).subscribe(success => {
      console.log("deleted");
      this.getAllCate();
    },error => {
      console.log(error);
    });
  }


  




  toggleCategory() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Collapse";
    else
      this.buttonName = "Add New";
      
  }
  patchValue(category){
    if(category.id){
      this.formCategory.patchValue(category);
    }
    this.toggleCategory();
  }
  
}
