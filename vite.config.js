import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { escapeSvelte, mdsvex } from "mdsvex";
import { codeToHtml } from "shiki";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },

      // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
      // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
      // See https://svelte.dev/docs/kit/adapters for more information about adapters.
      adapter: adapter({
        fallback: "404.html",
      }),
      preprocess: [
        mdsvex({
          extensions: [".svx", ".md"],
          highlight: {
            async highlighter(code, lang = "text") {
              const html = await codeToHtml(code, {
                lang,
                theme: "github-dark",
              });
              return `{@html \`${escapeSvelte(html)}\` }`;
            },
          },
        }),
      ],
      extensions: [".svelte", ".svx", ".md"],
    }),
  ],
});
