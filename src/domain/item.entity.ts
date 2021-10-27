export enum ItemTypeEnum {
  stick = "stick",
  silex = "silex",
  knife = "knife",
}

export class Item {
  constructor(public readonly id: string, public readonly type: ItemTypeEnum) {
  }

  static create(data: Omit<Item, "id">): Item {
    return new Item(
      crypto.randomUUID(),
      data.type,
    );
  }
}
