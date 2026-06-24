// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://wavycat.me",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), robotsTxt()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Atkinson Hyperlegible",
      cssVariable: "--font-atkinson-hyperlegible",
      styles: ["normal"],
      subsets: ["latin"],
    },
  ],
});
