import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public message = "Passez votre commande dans le magasin";
  public commande(){
    alert(this.message);
  }
}
