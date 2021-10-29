import { assertEquals } from "testing/asserts.ts";

import { StubItemRepositoryProvider } from '/domain/item/stub-item-repository.provider.ts'
import { Item, ItemTypeEnum } from '/domain/item/item.entity.ts'
import { Inventory } from "/domain/inventory.entity.ts"

import { GetInventoryQueryHandler, GetInventoryQuery } from './get-inventory.query.ts';

function setupTest() {
  const itemRepository = new StubItemRepositoryProvider()
  const handler = new GetInventoryQueryHandler(itemRepository)

  return { itemRepository, handler}
}

Deno.test("inventory should be empty if no item exist", () => {
  const { handler} = setupTest()
  const userId = crypto.randomUUID()
  const query = new GetInventoryQuery(userId)

  const inventory = handler.execute(query);

  const expected = new Inventory([])
  assertEquals(inventory, expected)
})

Deno.test("inventory should contain only items of user", () => {
  const { handler, itemRepository } = setupTest()
  const userId = crypto.randomUUID()
  const query = new GetInventoryQuery(userId)
  const ownItem = Item.create({ type: ItemTypeEnum.knife, ownerId: userId })
  itemRepository.items.set(ownItem.id, ownItem);
  const otherItem = Item.create({ type: ItemTypeEnum.knife, ownerId: null })
  itemRepository.items.set(otherItem.id, otherItem)

  const inventory = handler.execute(query);

  const expected = new Inventory([ownItem])
  assertEquals(inventory, expected)
})