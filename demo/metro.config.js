const path = require("path");

/**
 * @type {import('metro-config/src/configTypes').InputConfigT}
 */
const config = {
  resolver: {
    unstable_enableSymlinks: true,
    // unstable_enablePackageExports: true,
    // resolveRequest: (context, moduleName, platform) => {
    //   console.log("resolveRequest", moduleName);
    // },
    // disableHierarchicalLookup: true,
    enableGlobalPackages: true,
    nodeModulesPaths: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "..", "node_modules")],
    disableHierarchicalLookup: true,
  },

  projectRoot: path.resolve(__dirname, ".."),
  watchFolders: [path.resolve(__dirname, "..")],
};
console.log("config", config);
module.exports = config;
