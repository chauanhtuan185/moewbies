import { isWalletInfoCurrentlyInjected } from '@tonconnect/sdk';
import { selector } from 'recoil';
import { connector } from '../connector';
import { TonProofDemoApi } from '../TonProofDemoApi';

// You can use any state manager, recoil is used just for example.

export const authPayloadQuery = selector({
	key: 'authPayload',
	get: async () => {
		const tonProofPayload = await TonProofDemoApi.generatePayload();

		return {
			tonProofPayload,
		};
	},
});
