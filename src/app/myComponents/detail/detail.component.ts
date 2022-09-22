import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailDataService } from 'src/app/getData/cocktail-data.service';
// import { Location } from '@angular/common';
// import { CocktailDataService } from 'src/app/getData/cocktail-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: CocktailDataService,
    private http: HttpClient
  ) {}
  id: any;
  detail_drink: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(`Id aaidakyo hai@ ${this.id}`);

    // this.route.paramMap.subscribe((params) => {
    //   this.id = params.get('id')
    // })

    this.service.getId(this.id).subscribe((value) => {
      console.log(value);
      this.detail_drink = value.drinks[0];
    });
  }
}

// dataService:CocktailDataService,
// public location: Location
// getId(idOfdata:number) {
// const id = Number ( this.route.snapshot.paramMap.get('id'));
// this.dataService.getDataID(id).subscribe((idValue:any)=>{

// })
// console.log(this.route.snapshot.params['id'])
