import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	output: "static",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		mdx(),
	],
	redirects: {
		"/docs": "/docs/introduction/get-started",
		"/docs/introduction": "/docs/introduction/get-started",
		"/docs/server": "/docs/server/setup",
    "/docs/client": "/docs/client/setup",
    "/docs/vite": "/docs/vite/plugin",
    "/docs/building": "/docs/building/build",
    "/docs/server": "/docs/server/setup",
    "/docs/components": "/docs/components/setup",
    "/docs/examples": "/docs/examples/basic",
	},
});
