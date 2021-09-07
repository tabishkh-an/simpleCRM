import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
  addLoanDetails: FormGroup  // FormGroup created of name addLoanDetails
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {/*
    // FromGroup created, FormControl's created of name loanName & loanDescription
    this.addLoanDetails = new FormGroup({
      "loanName": new FormControl(),
      "loanDescription": new FormControl(),
      "loanType": new FormControl()
    })
    */
   
    // We create the FormGroup using the FormBuilder
    this.addLoanDetails = this.fb.group({
      "loanName": new FormControl('Tabish Loan'),
      "loanType": new FormControl('Personal Loan'),
      "loanDescription": new FormControl('This is for laptop'),
    })

  }

  addLoanType() {
    console.log(this.addLoanDetails.value);
  }

}
