import { Item, ItemTypeEnum } from "/domain/item/item.entity.ts";

export class Inventory {
  private readonly items = new Map<string, Item>();

  constructor(items: Item[] = []) {
    this.items = new Map(items.map((item) => [item.id, item]));
  }

  public addItem(item: Item): void {
    this.items.set(item.id, item);
  }

  public listItems(): Item[] {
    return Array.from(this.items.values());
  }

  public removeItem(item: Item): void {
    if (!this.items.has(item.id)) {
      console.log(this.items);
      throw new Error(`item ${item.id} is not in inventory`);
    }
    this.items.delete(item.id);
  }

  public hasItem(item: Item): boolean {
    return this.items.has(item.id);
  }

  public getCountOfType(type: ItemTypeEnum): number {
    return this.listItems()
      .filter((item) => item.type === type).length;
  }

  public removeOfType(type: ItemTypeEnum, count = 1): void {
    const toRemove = this.listItems()
      .filter((item) => item.type === type).slice(0, count);
    if (toRemove.length < count) {
      throw new Error("some items to remove are missing");
    }

    toRemove.forEach((item) => this.removeItem(item));
  }
}
