// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import MermaidOriginal from "@theme-original/Mermaid";

export default function Mermaid(props) {
  return <BrowserOnly>{() => <MermaidOriginal {...props} />}</BrowserOnly>;
}
