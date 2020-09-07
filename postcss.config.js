module.exports = {
  plugins: {
    tailwindcss: {},
    "vue-cli-plugin-tailwind/purgecss": {
      content: ["./src/**/*.vue"],
      whitelist: ["html", "body"],
      whitelistPatternsChildren: [/^.*-enter-active$/]
    },
    autoprefixer: {}
  }
};
