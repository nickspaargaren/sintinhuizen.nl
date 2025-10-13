import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/extensions": "off",
      "no-use-before-define": "off",
      "no-unused-vars": "error",
      "max-len": "off",
      "no-multi-spaces": ["error"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "no-trailing-spaces": [
        "error",
        { skipBlankLines: false, ignoreComments: false },
      ],
      "space-in-parens": ["error", "never"],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
);
