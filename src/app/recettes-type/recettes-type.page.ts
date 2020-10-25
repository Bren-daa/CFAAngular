import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';

@Component({
  selector: 'app-recettes-type',
  templateUrl: './recettes-type.page.html',
  styleUrls: ['./recettes-type.page.scss'],
})
export class RecettesTypePage implements OnInit {

  constructor(public type : TypeService,public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}


