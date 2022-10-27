require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/Hub7WA0EjWQUqQ152sA6ddSttGDttZ2n`,
      accounts: ['ee7c97ca2eeb03768651a6799908c9a0d45200a5a9c047c68b97c879caeeb877'],
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