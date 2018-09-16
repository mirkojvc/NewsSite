import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  private articles;
  constructor(private service : TestServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => params.id !== undefined ? this.service.setCountry(params.id) : console.log('no params') );

    //this.test = "pera";

    this.articles = this.service.getNews().subscribe(
      data => {
        this.articles = data.json().articles;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

}
