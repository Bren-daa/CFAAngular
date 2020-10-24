import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LecteurService {

  constructor(
    private http: HttpClient
  ) { }

  get(adresse){
    return this.http.get(adresse)
 return adresse;
  }
}