import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  plugins: [solidStart(),
    nitro({
      /** Node.js server for SSR: started with node .output/server/index.mjs */
      preset: "node-server"
    })
  ]
});
