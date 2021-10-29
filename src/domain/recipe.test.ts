import { assertEquals } from "testing/asserts.ts";

import { Item, ItemTypeEnum } from "/domain/item.entity.ts";
import { Recipe } from "/domain/recipe.entity.ts";

Deno.test("recipe with no ingredients should be available with no ingredients", () => {
  const recipe = new Recipe("test recipe", new Map(), new Map());

  assertEquals(recipe.isAvailable([]), true);
});

Deno.test("recipe with ingredients should not be available with no ingredients", () => {
  const recipe = new Recipe(
    "test recipe",
    new Map([[ItemTypeEnum.silex, 1]]),
    new Map(),
  );

  assertEquals(recipe.isAvailable([]), false);
});

Deno.test("recipe with ingredients should be available if ingredients match", () => {
  const recipe = new Recipe(
    "test recipe",
    new Map([[ItemTypeEnum.silex, 1]]),
    new Map(),
  );
  const silex = Item.create({ type: ItemTypeEnum.silex });

  assertEquals(recipe.isAvailable([silex]), true);
});
