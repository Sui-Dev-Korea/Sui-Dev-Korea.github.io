// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0


import React from 'react';
import DocCardList from '@theme-original/DocCardList';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';

export default function DocCardListForCurrentSidebarCategory(props) {
  const scopeClass = 'docCardListScopeExclude';
  // Root landing pages already serve as the overview, so hide the self-linking
  // Overview card consistently in both the default locale and Korean locale.
  const hiddenCardHrefs = ['', '/ko']
    .flatMap((prefix) => ['/guides', '/concepts', '/references', '/standards']
      .flatMap((path) => [`${prefix}${path}`, `${prefix}${path}/`]));

  const css = `
    ${hiddenCardHrefs
      .map((href) => `.${scopeClass} .col:has(a[href="${href}"])`)
      .join(',\n    ')}
     {
      display: none !important;
    }
  `;

  try {
    const category = useCurrentSidebarCategory();
    return (
      <div className={scopeClass}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <DocCardList items={category.items} />
      </div>
    );
  } catch {
    return (
      <div className={scopeClass}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <DocCardList {...props} />
      </div>
    );
  }
}