import { Item } from "./item.entity.ts";

export abstract class ItemRepositoryService {
  abstract getAllForOwner(ownerId: string): Iterable<Item>;
}
