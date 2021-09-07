import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color = "";
  priceFrom = 0;
  priceTo = 0;
  size = "M";

  //Check if the form has dirty fields (candeactivate)
  isDirty = true;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.color = params.color;
      this.size = params.size;
      this.priceFrom = params.priceFrom;
      this.priceTo = params.priceTo;
    })
   }

  ngOnInit(): void {
  }

}
