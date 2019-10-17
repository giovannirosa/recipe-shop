import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Shnitzel",
      "This is a simply test",
      "https://previews.123rf.com/images/foodandmore/foodandmore1502/foodandmore150200151/36578074-close-up-gourmet-tasty-crumbled-schnitzel-and-crispy-fries-with-lemon-tomato-and-lettuce-.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burguer",
      "This is a simply test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg",
      [new Ingredient("Meat", 1), new Ingredient("Buns", 2)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
