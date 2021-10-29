import { QueryHandler } from "/application/queries/mod.ts";

import { Inventory } from "/domain/inventory.entity.ts";
import { ItemRepositoryService } from "/domain/item/item-repository.service.ts";

export class GetInventoryQuery {
  constructor(
    public readonly userId: string,
  ) {}
}

export class GetInventoryQueryHandler
  extends QueryHandler<GetInventoryQuery, Inventory> {
  constructor(private readonly itemRepository: ItemRepositoryService) {
    super();
  }

  execute({ userId }: GetInventoryQuery) {
    const items = this.itemRepository.getAllForOwner(userId);
    const inventory = new Inventory(Array.from(items));
    return inventory;
  }
}
