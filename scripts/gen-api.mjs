import { execSync } from "child_process";
import { readFileSync, writeFileSync, rmSync, existsSync } from "fs";

// Source priority: env var → .env.local file → argument → default local path
let source = process.env.SWAGGER_URL || process.argv[2];
if (!source) {
  try {
    const envFile = readFileSync(".env.local", "utf-8");
    const match = envFile.match(/^SWAGGER_URL=(.+)$/m);
    if (match) source = match[1].trim();
  } catch {}
}
if (!source) source = "../eshop-monolith/docs/swagger.json";
const outDir = "src/lib/api-gen";
const intermediate = "swagger.frontend.json";

// 1. Load & filter swagger
async function loadSpec(src) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return res.json();
  }
  return JSON.parse(readFileSync(src, "utf-8"));
}

const spec = await loadSpec(source);
const filtered = { ...spec, paths: {} };
for (const [path, methods] of Object.entries(spec.paths ?? {})) {
  for (const [method, detail] of Object.entries(methods)) {
    if ((detail.tags ?? []).includes("frontend")) {
      if (!filtered.paths[path]) filtered.paths[path] = {};
      filtered.paths[path][method] = detail;
    }
  }
}
writeFileSync(intermediate, JSON.stringify(filtered), "utf-8");
const kept = Object.keys(filtered.paths).length;
const total = Object.keys(spec.paths ?? {}).length;
console.log(`Filtered: ${kept}/${total} paths kept (tagged "frontend")`);

// 2. Generate client
if (existsSync(outDir)) rmSync(outDir, { recursive: true });
execSync(
  `swagger-typescript-api generate -p ${intermediate} -o ${outDir} -n client.ts --modular --module-name-first-tag --clean-output --extract-request-body --extract-response-body --extract-enums`,
  { stdio: "inherit" },
);

// 3. Cleanup
rmSync(intermediate);
console.log("Done");
