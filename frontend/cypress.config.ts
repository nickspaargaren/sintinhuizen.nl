import { defineConfig } from "cypress";
import htmlvalidate from "cypress-html-validate/plugin";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      htmlvalidate.install(on);
    },
    supportFile: false,
    baseUrl: "http://localhost:3000/",
  },
});
