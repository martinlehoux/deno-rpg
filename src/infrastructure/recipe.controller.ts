import { Router } from "oak/mod.ts";

import { CraftRecipeCommand } from "/application/commands/craft-recipe/craft-recipe.command.ts";

import { Inventory } from "/domain/inventory.entity.ts";
import { Recipe } from "/domain/recipe.entity.ts";
import { Item, ItemTypeEnum } from "/domain/item.entity.ts";

export const recipeRouter = new Router();

recipeRouter.post("/craft", (context) => {
  const inventory = new Inventory();
  inventory.addItem(Item.create({ type: ItemTypeEnum.silex }));
  inventory.addItem(Item.create({ type: ItemTypeEnum.silex }));
  inventory.addItem(Item.create({ type: ItemTypeEnum.stick }));

  const recipe = new Recipe(
    "test recipe",
    new Map([[ItemTypeEnum.silex, 1], [ItemTypeEnum.stick, 1]]),
    new Map([[ItemTypeEnum.knife, 1]]),
  );

  const craftRecipeAction = new CraftRecipeCommand(inventory, recipe, console);
  craftRecipeAction.execute();

  context.response.body = { success: true };
});
