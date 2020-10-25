import { MapType } from '@angular/compiler';
import { Component, Input, } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier = [];
  somme = 0;
  private readonly json = '../app/data/stock.json'; 
  items =[];
  constructor(private httpClient: HttpClient) {} 

  addSomme(prix){
      this.somme = this.somme + prix;
  }

  deleteSomme(prix){
    if (this.somme <= 0){
      this.somme=0;
    }else{
      this.somme=this.somme-prix;
    }
   
  }

  incSomme(){
    this.somme = this.somme +1;
    return this.somme;
  }

  returnSomme(){
    return this.somme;
  }

  refreshSomme(){
    this.somme = 0;
    return this.somme;
  }
}
