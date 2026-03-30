// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { translateSidebarLabel } from '../../site/src/sidebarTranslate.js';

const t = (id, message, description) =>
  translateSidebarLabel(`sidebar.concepts.${id}`, message, description);

const concepts = [
	'concepts',
	'concepts/sui-for-ethereum',
	'concepts/sui-for-solana',
	{
		type: 'category',
		label: t('architecture', 'Architecture', 'Concepts sidebar label for architecture'),
		link: {
			type: 'doc',
			id: 'concepts/sui-architecture/index',
		},
		items: [
			'concepts/sui-architecture/components',
			'concepts/sui-architecture/networks',
			'concepts/sui-architecture/sui-storage',
			'concepts/sui-architecture/consensus',
			'concepts/sui-architecture/epochs',
			'concepts/sui-architecture/sui-security',
			'concepts/sui-architecture/protocol-upgrades',
		],
	},
	{
		type: 'category',
		label: t('tokenomics', 'Tokenomics', 'Concepts sidebar label for tokenomics'),
		link: {
			type: 'doc',
			id: 'concepts/tokenomics/index',
		},
		items: [
			'concepts/tokenomics/tokenomics-overview',
			'concepts/tokenomics/staking-unstaking',
			'concepts/tokenomics/sui-bridging',
			'concepts/tokenomics/gas-in-sui',
		],
	},
	{
		type: 'category',
		label: t('accessingData', 'Accessing Data', 'Concepts sidebar label for accessing data'),
		link: {
			type: 'doc',
			id: 'concepts/data-access/data-serving',
		},
		items: [
			'concepts/data-access/grpc',
			'concepts/data-access/graphql-rpc',
			'concepts/data-access/archival-store',
			{
				type: 'category',
				label: t('customIndexers', 'Custom Indexers', 'Concepts sidebar label for custom indexers'),
				link: {
					type: 'doc',
					id: 'concepts/data-access/custom-indexers',
				},
				items: [
					'concepts/data-access/pipeline-architecture',
					'concepts/data-access/indexer-data-integration',
					'concepts/data-access/indexer-runtime-perf',
				],
			},
		],
	},
	{
		type: 'category',
		label: t('cryptography', 'Cryptography', 'Concepts sidebar label for cryptography'),
		link: {
			type: 'doc',
			id: 'concepts/cryptography/index',
		},
		items: [
			'concepts/cryptography/passkeys',
			'concepts/cryptography/system/checkpoint-verification',
		],
	},
	'concepts/coin-mgt',
	'concepts/sui-move-concepts',
	'concepts/gaming',
	'concepts/research-papers',
];
export default concepts;
