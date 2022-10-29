require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/Hub7WA0EjWQUqQ152sA6ddSttGDttZ2n`,
      accounts: ['91db051d3a75d3a34564b2a4712882d2193903d9c33e101bedf053ea3c290d6f'],
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