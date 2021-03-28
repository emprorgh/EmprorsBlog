import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import { Product } from '../shared/product.model';
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  toastr: any;

  constructor(private productService : ProductService) { }
  productPost: Product;
   
  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.productService.formData = {
      ProductID: null,
      Product1: '',
      QA_URL: '',
      ProdDescription: '',
      Notes: '',
      CreateDate: null,
      ReportPath:''
    }
  }

  /* showText(form?: NgForm){
    if(form.value.ProductID == null){
      alert("Check!!");
      form.reset();
    }
      else {alert("Form complete. Ready to submit!")}; 
      form.reset(); 
  } */

  onSubmit(form: NgForm) {
    
      this.productService.postProduct(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.productService.getProducts();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
      }
}
