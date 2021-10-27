import { Application } from "https://deno.land/x/oak@v9.0.1/mod.ts";

import { recipeRouter } from "/infrastructure/recipe.controller.ts";

async function main() {
  const app = new Application();
  app.use(recipeRouter.routes());

  await app.listen({ port: 8080 });
}

await main();
