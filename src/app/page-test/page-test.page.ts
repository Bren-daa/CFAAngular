import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LecteurService } from '../lecteur/lecteur.service';
import {PanierService} from '../panier/panier.service';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.page.html',
  styleUrls: ['./page-test.page.scss'],
})
export class PageTestPage implements OnInit {
  constructor(private panierService:PanierService) {
      
  }
  
  ngOnInit() {
  }
  
  
}
