import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';
@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  constructor(public type : TypeService, public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}
