import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoGuard implements Resolve<any> {

  // real-time use case
  // we will have a service - call service API to get details

  // API call to get the data 
  /* 
    this.userService.getAccountInformation(userId).subscribe(data => {

    });
  */

  //we got the data as an object

  userObj = {
    id: 10,
    userName: "Tabish"
  }

  //the above data needs to be send to the route, whichever is activated by this Resolve

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObj;
  }
}
