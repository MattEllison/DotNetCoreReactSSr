const chokidar = require("chokidar");
const tsc = require("typescript");
const watcher = chokidar.watch("**/*.tsx", {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});
watcher.on("change", path => console.log(tsc));
