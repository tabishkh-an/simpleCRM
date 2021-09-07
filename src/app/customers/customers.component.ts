import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  firstname: string = "";
  terms: boolean = false;
  customerType: string = "Type";
  customerInfo: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  loadForm(formValue: NgForm) {
    let userDetails = {
      firstname: "Tabish",
      terms: false,
      customerType: "premium",
      customerInfo: "This is a form set value"
    }
    formValue.setValue(userDetails)
  }

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
  }
  resetForm(formValue: NgForm) {
    formValue.reset();
  }
}
