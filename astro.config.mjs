import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  base: '/jose-portfolio',
  integrations: [
    tailwind({
      // Re-enable base styles so WebTUI layers work
      applyBaseStyles: true,
    }), 
    robotsTxt()
  ],
  site: 'https://tab-to-dev.click/'
})
