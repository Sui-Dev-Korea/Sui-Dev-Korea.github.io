// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

const fs = require("fs");
const path = require("path");

const siteDir = path.resolve(__dirname, "../..");
const contentDir = path.resolve(
  siteDir,
  "../content/references/sui-api/sui-graphql",
);
const i18nKoDir = path.resolve(
  siteDir,
  "../i18n/ko/docusaurus-plugin-content-docs/current/references/sui-api/sui-graphql",
);

const targets = [
  {
    from: path.join(contentDir, "alpha/reference"),
    to: path.join(i18nKoDir, "alpha/reference"),
  },
  {
    from: path.join(contentDir, "beta/reference"),
    to: path.join(i18nKoDir, "beta/reference"),
  },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyMissingFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  ensureDir(destDir);

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyMissingFiles(srcPath, destPath);
      continue;
    }
    if (entry.isFile() && !fs.existsSync(destPath)) {
      ensureDir(path.dirname(destPath));
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

for (const { from, to } of targets) {
  copyMissingFiles(from, to);
}
