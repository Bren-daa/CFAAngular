import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarMaisonService {

  constructor() { }

  json = [{
    name:"aquilon", 
    image:"../../assets/images/aquilon.png"},
    {
      name:"Bistrot Landais",
      image: "../../assets/images/bistrotLandais.png"
    }, 
  ]

  getJsonName(index){
    return this.json[index].name;
  }

  getJsonImage(index){
    return this.json[index].image;
  }

  
}
