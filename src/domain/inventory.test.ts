import { assertEquals } from "testing/asserts.ts";

import { Inventory } from "/domain/inventory.entity.ts";
import { Item, ItemTypeEnum } from "/domain/item.entity.ts";

Deno.test("inventory add item", () => {
  const inventory = new Inventory();

  assertEquals(inventory.listItems().length, 0);

  inventory.addItem(Item.create({ type: ItemTypeEnum.silex }));

  assertEquals(inventory.listItems().length, 1);
});
