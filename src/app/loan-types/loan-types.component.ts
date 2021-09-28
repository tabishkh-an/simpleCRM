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
    /*
      - Get entire data in one go
          this.addLoanDetails.value 
      - Get particular form control data
          this.addLoanDetails.get('loanType').value
      - Get data on value change
          valueChanges.subscibe(data => {})
    */
         console.log(this.addLoanDetails.value);
         console.log(this.addLoanDetails.get('loanType').value);

         this.addLoanDetails.valueChanges.subscribe(data => {
           console.log(data);
           
         })
         
  }

}
