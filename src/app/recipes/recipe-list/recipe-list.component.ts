import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://assets.bonappetit.com/photos/5a33fe2f7d4b9b484283f0cf/16:9/w_1028,c_limit/eggplant-and-cabbage-dinner-frittata.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
