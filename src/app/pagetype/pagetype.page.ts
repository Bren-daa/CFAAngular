import { Component, OnInit } from '@angular/core';
import { TypeService } from '../type/type.service';
import { VarMaisonService } from '../varMaison/var-maison.service';
@Component({
  selector: 'app-pagetype',
  templateUrl: './pagetype.page.html',
  styleUrls: ['./pagetype.page.scss'],
})
export class PagetypePage implements OnInit {

  constructor(public type : TypeService,public varMaison : VarMaisonService) { }

  ngOnInit() {
  }

}
