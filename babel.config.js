module.exports = {
  presets: [
    "@babel/preset-env", // Handles modern JavaScript features
    "@babel/preset-typescript", // Adds TypeScript support
    ["@babel/preset-react", { runtime: "automatic" }], // React support with the automatic runtime
  ],
};
