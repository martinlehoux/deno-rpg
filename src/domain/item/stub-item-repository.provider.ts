import { Item } from "./item.entity.ts";
import { ItemRepositoryService } from "./item-repository.service.ts";

export class StubItemRepositoryProvider extends ItemRepositoryService {
  public items = new Map<string, Item>();

  getAllForOwner(ownerId: string): Iterable<Item> {
    return Array.from(this.items.values()).filter((item) =>
      item.ownerId === ownerId
    );
  }
}
