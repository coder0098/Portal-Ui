import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  public buttonName:any = 'Add New';
  public show:boolean = false;
  vendors: any;
  constructor() {
    this.vendors=[{
      firstName: "kunal",
      lastName: "agrawal",
      email: "kunal@gmail.com",
      phoneNo: "9415654123",
      companyName: "s2p",
      
    }]
   }
  

  ngOnInit(): void {
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Collapse";
    else
      this.buttonName = "Add New";
  }
}
