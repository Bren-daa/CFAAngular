import { Component, OnInit } from '@angular/core';

import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {

  constructor(public type : TypeService, public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}
