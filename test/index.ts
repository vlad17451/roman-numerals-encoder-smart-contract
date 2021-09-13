import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers, network } from 'hardhat'
import { expect, assert } from 'chai'

import BigNumber from 'bignumber.js'
BigNumber.config({ EXPONENTIAL_AT: 60 })

import Web3 from 'web3'
// @ts-ignore
const web3 = new Web3(network.provider) as Web3

import { RomanNumeralsEncoder } from '../typechain'

let encoder: RomanNumeralsEncoder

let owner: SignerWithAddress
let user0: SignerWithAddress
let user1: SignerWithAddress

async function reDeploy() {
	[owner, user0, user1] = await ethers.getSigners()
	let Encoder = await ethers.getContractFactory('RomanNumeralsEncoder')
	encoder = await Encoder.deploy() as RomanNumeralsEncoder
}

describe('Contract:', () => {
	describe('test', () => {
		it('', async () => {
			await reDeploy()
			const tests = [
				[1, 'I'],
				[4, 'IV'],
				[1000, 'M'],
				[1990, 'MCMXC'],
				[2007, 'MMVII'],
				[2, "II"],
				[3, "III"],
				[5, "V"],
				[9, "IX"],
				[10, "X"],
				[11, "XI"],
				[19, "XIX"],
				[22, "XXII"],
				[15, "XV"],
				[1004, 'MIV'],
				[2004, 'MMIV'],
				[3003, 'MMMIII'],
				[1991, 'MCMXCI'],
				[1992, 'MCMXCII'],
				[2091, 'MMXCI'],
				[1996, 'MCMXCVI'],
				[2843, 'MMDCCCXLIII'],
				[964, 'CMLXIV'],
				[345, 'CCCXLV'],
				[979, 'CMLXXIX'],
				[746, 'DCCXLVI'],
				[390, 'CCCXC'],
				[376, 'CCCLXXVI'],
				[189, 'CLXXXIX'],
				[3888, 'MMMDCCCLXXXVIII']
			];
			for (let i = 0; i < tests.length; i++) assert.equal((await encoder.solution(tests[i][0])), tests[i][1]);
			// const r = await encoder.strConcat('x', 'i');
			// console.log(r)
		})
	})
})
