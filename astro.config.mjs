import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.nextreachstudio.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://www.nextreachstudio.com/tools/ai-token-calculator",
        "https://www.nextreachstudio.com/tools/llm-cost-calculator",
        "https://www.nextreachstudio.com/tools/context-window-calculator",
        "https://www.nextreachstudio.com/tools/vram-estimator",
        "https://www.nextreachstudio.com/tools/prompt-formatter",
        "https://www.nextreachstudio.com/privacy",
        "https://www.nextreachstudio.com/terms",
        "https://www.nextreachstudio.com/about",
        "https://www.nextreachstudio.com/contact",
        "https://www.nextreachstudio.com/services/ai-agent-development-pune",
        "https://www.nextreachstudio.com/services/ai-automation-pune",
        "https://www.nextreachstudio.com/services/custom-software-development-pune",
        "https://www.nextreachstudio.com/services/web-application-development-pune",
        "https://www.nextreachstudio.com/services/mvp-development-pune",
        "https://www.nextreachstudio.com/services/flutter-app-development-pune",
        "https://www.nextreachstudio.com/services/android-app-development-pune",
        "https://www.nextreachstudio.com/services/ios-app-development-pune",
        "https://www.nextreachstudio.com/services/api-integration-pune",
        "https://www.nextreachstudio.com/services/business-automation-pune",
        "https://www.nextreachstudio.com/services/ai-consulting-pune",
        "https://www.nextreachstudio.com/services/custom-saas-development-pune",
        "https://www.nextreachstudio.com/industries/manufacturing",
        "https://www.nextreachstudio.com/industries/logistics",
        "https://www.nextreachstudio.com/industries/education",
        "https://www.nextreachstudio.com/industries/real-estate",
        "https://www.nextreachstudio.com/industries/healthcare",
        "https://www.nextreachstudio.com/industries/retail",
        "https://www.nextreachstudio.com/industries/restaurants",
        "https://www.nextreachstudio.com/industries/construction",
        "https://www.nextreachstudio.com/industries/pet-grooming",
      ],
    }),
  ],
  adapter: vercel(),
  output: "static",
});
