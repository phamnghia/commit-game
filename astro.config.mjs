import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    host: '0.0.0.0',
    port: 80
  },
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), tailwind()]
});