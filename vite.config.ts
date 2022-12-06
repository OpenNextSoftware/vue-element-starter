import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["pinia", "vue", "vue-router", { axios: ["axios"] }],
      dts: "./src/imports.d.ts",
      // vueTemplate: true,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "./src/components.d.ts",
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({ scale: 1.2, warn: true }),
      ],
    }),
  ],
});
