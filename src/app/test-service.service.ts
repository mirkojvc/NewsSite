import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private country:string    = "rs";
  private search:string     = "";
  private source:string     = "";
  private category:string   = "";
  private path:string       = "https://newsapi.org/v2/top-headlines?";
  private key:string        = environment.api_key;
  
  constructor(private http:Http) {}

  getRecentNews() {
    return this.http.get(this.path + "apiKey=" + this.key);
  }

  getNews() {
    let url = "";
    url += this.path;

    if(this.search !== "") {
      url += "q="+this.search+"&";
    } else {
      // Api remark on source param: you can't mix this param with the country or category params.
      url += this.source === "" ? "country="+this.country+"&" : "source="+this.source+"&";
      if(this.category !== "" && this.source === "") {
        url += "category="+this.category+"&";
      } 
    }

    return this.http.get(url + "apiKey=" + this.key);
  }

  // Possible countries.
  // ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp
  // kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
  // Sets the country query
  setCountry(country:string) {
    this.country = country;
  }

  // Sets the search query
  setSearch(query:string) {
    this.search = query;
  }

  // Sets wich news source do we want shown
  setSource(news:string) {
    this.source = news;
  }

  // Sets category query
  setCategory(category:string) {
    this.category = category;
  }
}
