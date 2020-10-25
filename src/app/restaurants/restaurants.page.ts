import { Component, OnInit } from '@angular/core';

import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor( public type : TypeService, public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}
