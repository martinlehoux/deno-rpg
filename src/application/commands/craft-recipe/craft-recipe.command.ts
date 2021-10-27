import { Inventory } from "/domain/inventory.entity.ts";
import { Recipe } from "/domain/recipe.entity.ts";

import { LoggerService } from "/application/logger.service.ts";

export class CraftRecipeCommand {
  constructor(
    private readonly inventory: Inventory,
    private readonly recipe: Recipe,
    private logger: LoggerService,
  ) {}

  public execute(): void {
    // TODO: Lock inventory
    if (!this.recipe.isAvailable(this.inventory.listItems())) {
      throw new Error("inventory does not have required items to craft recipe");
    }

    this.recipe.ingredients.forEach((count, type) =>
      this.inventory.removeOfType(type, count)
    );

    const products = this.recipe.craftProducts();
    products.forEach((item) => this.inventory.addItem(item));

    this.logger.info("Recipe crafted", { recipe: this.recipe.name });
  }
}
