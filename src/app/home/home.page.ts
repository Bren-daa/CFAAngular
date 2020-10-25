import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../panier/panier.service';
import { OnInit } from '@angular/core';
import products from '../data/products.js';
import { VarMaisonService } from '../varMaison/var-maison.service';
import { TypeService } from '../type/type.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public panier : PanierService, public type : TypeService, public varMaison : VarMaisonService) {
    
  }
  ngOnInit(): void {
    this.panier.returnSomme();
  }
      
}
