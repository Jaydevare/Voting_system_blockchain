require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainID: 31337,
      blockConformations: 1,
    },
    goerli: {
      chainID: 5,
      blockConformations: 6,
      url: process.env.GOERLI_RPC_PROVIDER = "https://eth-goerli.g.alchemy.com/v2/DF1py0jTsUaMzzh1k0wrDPgETiPJGnWZ",
      accounts: [process.env.PRIVATE_KEY = "ae09cebf0f45d4938b8534278537f3522d0128bf2866526786dff2f9b702e1a6"],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
};
