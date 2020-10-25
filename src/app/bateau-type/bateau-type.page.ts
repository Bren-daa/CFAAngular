import { Component, OnInit } from '@angular/core';

import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';
@Component({
  selector: 'app-bateau-type',
  templateUrl: './bateau-type.page.html',
  styleUrls: ['./bateau-type.page.scss'],
})
export class BateauTypePage implements OnInit {

  constructor(public type : TypeService,public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}





