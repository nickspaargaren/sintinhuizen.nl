import { defineConfig } from "cypress";
import htmlvalidate from "cypress-html-validate/plugin";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      htmlvalidate.install(on, {
        rules: {
          "heading-level": "off",
          "require-sri": "off",
          "element-permitted-content": "off",
          "valid-id": "off",
          "attr-case": "off",
        },
      });
    },
    supportFile: false,
    baseUrl: "http://localhost:3000/",
  },
});
