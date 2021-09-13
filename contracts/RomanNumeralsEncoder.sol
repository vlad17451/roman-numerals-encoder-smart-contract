pragma solidity 0.8.4;

contract RomanNumeralsEncoder {
	
	uint256[7] public romanNumbers = [
		1000,
		500,
		100,
		50,
		10,
		5,
		1
	];
	
	string[7] public romanSymbols = [
		'M',
		'D',
		'C',
		'L',
		'X',
		'V',
		'I'
	];
	
	function solution(uint256 number) view public returns (string memory) {
		string memory result;
		uint256 b = number;
		uint256 count;
		for (uint256 i; i < romanNumbers.length; i += 1) {
			if (i % 2 != 0) {
				count = (b / romanNumbers[i + 1]);
				if (count == 9) {
					for (uint256 j; j < (10 - count); j += 1) {
						result = string(abi.encodePacked(result, romanSymbols[i + 1]));
					}
					result = string(abi.encodePacked(result, romanSymbols[i - 1]));
					b %= romanNumbers[i + 1];
				} else if (count == 4) {
					for (uint256 j; j < (5 - count); j += 1) {
						result = string(abi.encodePacked(result, romanSymbols[i + 1]));
					}
					result = string(abi.encodePacked(result, romanSymbols[i]));
					b %= romanNumbers[i + 1];
				} else if (count >= 5) {
					result = string(abi.encodePacked(result, romanSymbols[i]));
					b %= romanNumbers[i];
				}
			} else {
				count = (b / romanNumbers[i]);
				if (count != 0) {
					b %= romanNumbers[i];
					for (uint256 x; x < count; x += 1) {
						result = string(abi.encodePacked(result, romanSymbols[i]));
					}
				}
			}
		}
		return result;
	}
}
