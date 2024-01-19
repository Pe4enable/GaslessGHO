// -------------------IMPORTS------------------- //
let Web3 = require('web3'); // Add the web3 node package
let ethUtil = require('ethereumjs-util'); // 'ethereumjs-util' is a collection of utility functions for Ethereum
let sigUtil  = require('eth-sig-util'); // 'eth-sig-util' is a small collection of Ethereum signing functions
const config = require('./data-config.json'); // Include the network-specific configurations
const BigNumber = require('bignumber.js'); // Add the bignumber.js node package
const { EIP712Domain } = require('./helper.js'); // Add some helpers

async function main() {
    // === DEPLOY ===

    // ERC20 token
    const ERC20 = await hre.ethers.getContractFactory("ERC20");
    const erc20 = await ERC20.deploy(config.name, config.version);

    await erc20.deployed();

    console.log("ERC20:", erc20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  