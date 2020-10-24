import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  index = 0;

  setIndex(index){
    this.index=index;
  }

  getIndex(){
    return this.index;
  }
}
