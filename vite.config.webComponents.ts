import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),

    dts({
      tsconfigPath: "./tsconfig.app.json", // Especifique o caminho para o seu tsconfig
      rollupTypes: true, // Combina todas as declarações em um único arquivo
      insertTypesEntry: true, // Insere uma entrada de tipos no seu arquivo de saída
      beforeWriteFile: (filePath, content) => {
        console.log("Original content:", content);

        const adjustedContent = content.replace(
          /\.\/components/g,
          "../src/components"
        );

        return {
          filePath,
          content: adjustedContent,
        };
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ce.ts"), // Atualizado para o novo nome
      name: "comercStyleGuide", // Atualizado para o novo nome
      fileName: (format) => `comerc-style-guide.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
