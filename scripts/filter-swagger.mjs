import { readFileSync, writeFileSync } from "fs";

const input = process.argv[2] ?? "../eshop-monolith/docs/swagger.json";
const output = process.argv[3] ?? "swagger.frontend.json";

const spec = JSON.parse(readFileSync(input, "utf-8"));
const filtered = { ...spec, paths: {} };

for (const [path, methods] of Object.entries(spec.paths ?? {})) {
  for (const [method, detail] of Object.entries(methods)) {
    const tags = detail.tags ?? [];
    if (tags.includes("frontend")) {
      if (!filtered.paths[path]) filtered.paths[path] = {};
      filtered.paths[path][method] = detail;
    }
  }
}

writeFileSync(output, JSON.stringify(filtered, null, 2), "utf-8");
const kept = Object.keys(filtered.paths).length;
const total = Object.keys(spec.paths ?? {}).length;
console.log(`Filtered: ${kept}/${total} paths kept (tagged "frontend")`);
