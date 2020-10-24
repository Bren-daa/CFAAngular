import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.page.html',
  styleUrls: ['./poisson.page.scss'],
})
export class PoissonPage implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  
  //json  = {require("../data/stock.json")}
  map = new Map<string, string>()
  tab = [{"name":"Moules de pêche","discount":5,"category":1,"unit":"kg","id":6,"price":7,"owner":"tig","comments":"","sale":true,"availability":true}]
  
}
