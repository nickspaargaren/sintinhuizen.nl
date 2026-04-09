// @ts-check

const { defineConfig } = require(`@yarnpkg/types`);

/**
 * @typedef {import('@yarnpkg/types').Yarn.Constraints.Context} Context
 */

/**
 * @param {Context['Yarn']} Yarn
 */
const enforceConsistentNodeVersion = (Yarn) => {
  for (const workspace of Yarn.workspaces()) {
    workspace.set("engines.node", `^24.12.0`);
  }
};

/**
 * @param {Context['Yarn']} Yarn
 */
const enforceConsistentTypeScriptVersion = (Yarn) => {
  for (const workspace of Yarn.workspaces()) {
    if (workspace.manifest.name === "sintinhuizen.nl") {
      continue;
    }
    workspace.set("devDependencies.typescript", `^5.9.3`);
  }
};

module.exports = defineConfig({
  /**
   * @param {Context} Context
   */
  async constraints({ Yarn }) {
    enforceConsistentNodeVersion(Yarn);
    enforceConsistentTypeScriptVersion(Yarn);
  }
});
