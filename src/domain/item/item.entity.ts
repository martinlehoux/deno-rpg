export enum ItemTypeEnum {
  stick = "stick",
  silex = "silex",
  knife = "knife",
}

export class Item {
  constructor(
    public readonly id: string,
    public readonly type: ItemTypeEnum,
    public readonly ownerId: string | null,
  ) {
  }

  static create(
    { type, ownerId }: Pick<Item, "type"> & Partial<Pick<Item, "ownerId">>,
  ): Item {
    return new Item(
      crypto.randomUUID(),
      type,
      ownerId ?? null,
    );
  }
}
