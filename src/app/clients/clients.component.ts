import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    { clientId: 10, firstName: "Raj", lastName: "Srini" },
    { clientId: 11, firstName: "Jake", lastName: "Mile" },
    { clientId: 12, firstName: "Peter", lastName: "Jones" },
    { clientId: 13, firstName: "Mike", lastName: "Pence" },
    { clientId: 14, firstName: "King", lastName: "Kong" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
