require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  networks: {
    goerli: {
      url: process.env.https://eth-goerli.g.alchemy.com/v2/L-N4tE-x_zVumUuokG6BaVSdph4GNcb4,
      accounts: [process.env.0c6076905b7db6be2e162309034a76592d379d1f55d8b4e0b433d92eef3d8396]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};