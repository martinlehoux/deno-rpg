export interface Repository<Entity> {
  get(id: string): Entity | null;
  save(entity: Entity): void;
}
