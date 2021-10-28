import { assertStrictEquals } from "testing/asserts.ts";

import { Item, ItemTypeEnum } from "/domain/item.entity.ts";
import { Inventory } from "/domain/inventory.entity.ts";
import { Recipe } from "/domain/recipe.entity.ts";

import { CraftRecipeCommand } from "/application/commands/craft-recipe/craft-recipe.command.ts";
import { StubLoggerProvider } from "/infrastructure/logger/stub-logger.provider.ts";

Deno.test("craft recipe from inventory", () => {
  const logger = new StubLoggerProvider();

  const inventory = new Inventory();
  inventory.addItem(Item.create({ type: ItemTypeEnum.silex }));
  inventory.addItem(Item.create({ type: ItemTypeEnum.silex }));
  inventory.addItem(Item.create({ type: ItemTypeEnum.stick }));

  const recipe = new Recipe(
    "test recipe",
    new Map([[ItemTypeEnum.silex, 1], [ItemTypeEnum.stick, 1]]),
    new Map([[ItemTypeEnum.knife, 1]]),
  );

  const action = new CraftRecipeCommand(inventory, recipe, logger);
  action.execute();

  assertStrictEquals(inventory.getCountOfType(ItemTypeEnum.silex), 1);
  assertStrictEquals(inventory.getCountOfType(ItemTypeEnum.stick), 0);
  assertStrictEquals(inventory.getCountOfType(ItemTypeEnum.knife), 1);
});
