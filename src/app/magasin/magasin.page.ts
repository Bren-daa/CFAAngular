import { Component, OnInit } from '@angular/core';
import {PanierService} from '../panier/panier.service';
@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.page.html',
  styleUrls: ['./magasin.page.scss'],
})
export class MagasinPage implements OnInit {

  constructor(public panierService : PanierService) { }

  ngOnInit() {
  }
  panier = this.panierService;
  public message = "Bravo,Votre commande est Validée";
  public alert(){
    this.panier.refreshSomme();
    alert(this.message);
    
  }
}
