import { Component, OnInit } from '@angular/core';

import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';
@Component({
  selector: 'app-restaurant-type',
  templateUrl: './restaurant-type.page.html',
  styleUrls: ['./restaurant-type.page.scss'],
})
export class RestaurantTypePage implements OnInit {

  constructor(public type : TypeService,public varMaison : VarMaisonService) { }


  ngOnInit() {
  }

}


