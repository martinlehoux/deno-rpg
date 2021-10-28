FROM denoland/deno:alpine

ADD import_map.json import_map.json
ADD src src

RUN deno cache --import-map=import_map.json src/main.ts

CMD deno run --allow-read --allow-write --allow-net --import-map=import_map.json src/main.ts
