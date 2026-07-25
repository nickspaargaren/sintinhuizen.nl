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
const enforceConsistentPackageManagerVersion = (Yarn) => {
  for (const workspace of Yarn.workspaces()) {
    workspace.set("packageManager", `yarn@4.17.1`);
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
    workspace.set("devDependencies.typescript", `^7.0.2`);
  }
};

module.exports = defineConfig({
  /**
   * @param {Context} Context
   */
  async constraints({ Yarn }) {
    enforceConsistentNodeVersion(Yarn);
    enforceConsistentPackageManagerVersion(Yarn);
    enforceConsistentTypeScriptVersion(Yarn);
  }
});
