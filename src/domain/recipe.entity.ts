import { Item, ItemTypeEnum } from "/domain/item/item.entity.ts";

export class Recipe {
  public readonly name: string;
  public readonly ingredients: Map<ItemTypeEnum, number>;
  private readonly products: Map<ItemTypeEnum, number>;

  constructor(
    name: string,
    ingredients: Map<ItemTypeEnum, number>,
    products: Map<ItemTypeEnum, number>,
  ) {
    this.name = name;
    this.ingredients = ingredients;
    this.products = products;
  }

  public isAvailable(availableIngredients: Item[]): boolean {
    if (this.ingredients.size === 0) {
      return true;
    }
    return Array.from(this.ingredients.entries()).every(([type, count]) =>
      availableIngredients.filter((item) => item.type === type).length >= count
    );
  }

  public craftProducts(): Item[] {
    return Array.from(this.products.entries()).map(([type, count]) =>
      Array<ItemTypeEnum>(count).fill(type)
    ).flat().map((type) => Item.create({ type }));
  }
}
