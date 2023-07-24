require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "mumbai", // Updated to Mumbai
      chainId: 80001, // Updated to Mumbai chain ID
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'mumbai', // Updated to Mumbai
    networks: {
      hardhat: {},
      mumbai: { // New configuration for Mumbai
        url: 'https://rpc-mumbai.maticvigil.com', // Use the appropriate Mumbai RPC endpoint
        accounts: [`0x${process.env.PRIVATE_KEY}`] // Replace with the private key for Mumbai testing
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  
};
