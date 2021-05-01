const packager = require("electron-packager");
const path = require("path");
const parentDir = path.join(__dirname, "..");
const dist = path.join(parentDir, "dist");

(async () => {
  console.time("packing");
  await packager({
    out: dist,
    platform: "win32",
    arch: "x64",
    overwrite: true,
    dir: parentDir,
  });
  console.timeEnd("packing");
})();
