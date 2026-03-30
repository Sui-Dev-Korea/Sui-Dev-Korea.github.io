// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { translate } from '@docusaurus/Translate';

export function translateSidebarLabel(id, message, description) {
  return translate({
    id,
    message,
    description,
  });
}
