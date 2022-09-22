import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CocktailDataService } from 'src/app/getData/cocktail-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  route: any;
  isData = false;
  CocktailDataService: any;
  constructor(public getdata: CocktailDataService) {}

  data: any[] = [];

  // navigateToDetails(id: any) {
  //   console.log(id);
  // }
  searchForData(name: any) {
    if (name.value) {
      this.getdata.search(name.value).subscribe((searchData) => {
        this.data = searchData.drinks;
        // console.log(this.data);
        this.isData = false;
        if (!this.data) {
          this.isData = true;
        }
      });
    }
  }

  // nodata(){
  //   if( this.data.length == 0) {
  // return true;
  //   }}

  ngOnInit(): void {
    this.getdata.getData().subscribe((cocktail) => {
      console.log(cocktail.drinks);
      this.data = cocktail.drinks;
    });
  }
}
