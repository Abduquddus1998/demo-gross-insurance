const { override, addWebpackAlias } = require("customize-cra");

const path = require("path");

module.exports = override(
  addWebpackAlias({
    ["components"]: path.resolve(__dirname, "./src/components"),
    ["api"]: path.resolve(__dirname, "./src/api"),
    ["store"]: path.resolve(__dirname, "./src/store"),
    ["actions"]: path.resolve(__dirname, "./src/store/actions"),
    ["reducers"]: path.resolve(__dirname, "./src/store/reducers"),
    ["assets"]: path.resolve(__dirname, "./src/assets"),
    ["config"]: path.resolve(__dirname, "./src/config"),
  })
);
