import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarMaisonService {

  constructor() { }

  json = [{
    name:"Bistrot des Gascons", 
    image:"../../assets/images/desGascons.png"},
    {
      name:"Bistrot Landais",
      image: "../../assets/images/bistrotLandais.png"
    }, 
  ]

  restaurants = [{
    name:"Bistrot des Gascons", 
    image:"../../assets/images/desGascons.png"},
    {
      name:"Les Fous de L'Ile",
      image: "../../assets/images/fousDeLIle.png"
    }, 
    {
      name:"Bistrot Landais",
      image: "../../assets/images/bistrotLandais.png"
    }, 
    {
      name:"Villa 9-Trois",
      image: "../../assets/images/villa9Trois.png"
    }, 

  ]

  bateaux = [{
    name:"De La Brise", 
    image:"../../assets/images/deLaBrise.png"},
    {
      name:"Gast Micher",
      image: "../../assets/images/gastMicher.png"
    }, 
    {
      name:"Aquilon",
      image: "../../assets/images/aquilon.png"
    }, 
    {
      name:"Saphir",
      image: "../../assets/images/saphir.png"
    }, 

  ]

  recettes = [
    {
    name:"Homard",
    image: "../../assets/images/homardRecette.png",
    texte:"Faire cuire le homards dans de l'eau bouillante avec le thym, du laurier, du sel et du poivre de Cayenne. Laissez cuire 20 minutes. Egouttez-les et laissez-les refroidir. Découpez les coffres des homards dans le sens de la longueur. Mélangez la mayonnaise avec le cognac, le corall et la ciboulette ciselée." ,
    },
    {
      name:"St Jacques",
      image:"../../assets/images/saintJacques.png",
      texte:"Faire fondre du beurre avec des echalotes puis ajoutez les noix de Saint-Jacques. Les faire revenir en laissant le milieu translucide puis les retirer du feu. Ajouter l'ail et le persil dans ma poêle et laisser cuire quelques secondes. Bien faire chauffer la poêle, puis flamber au Cognac. Une fois la flamme éteine, ajouter les noix de Saint-Jacques. Il ne faut les flamber car elles perdraient leur saveur.",
    },

  ]

  getJsonName(index){
    return this.json[index].name;
  }

  getJsonImage(index){
    return this.json[index].image;
  }

  getRestaurantName(index){
    return this.restaurants[index].name;
  }

  getRestaurantImage(index){
    return this.restaurants[index].image;
  }

  getBateauName(index){
    return this.bateaux[index].name;
  }

  getBateauImage(index){
    return this.bateaux[index].image;
  }

  getRecettesName(index){
    return this.recettes[index].name;
  }

  getRecettesImage(index){
    return this.recettes[index].image;
  }
  getRecettesTexte(index){
    return this.recettes[index].texte;
  }
}
