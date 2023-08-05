# Independent Study Report

## June 27 - June 29

- Researching the basic scope of the web3 subject 
- Drafting the course plan
- Finish the course plan and sent to Prof. Arvind
- Course Plan: https://docs.google.com/document/d/1djPuzi44BWo0vXq2iCrULouEBl1UsY-eNwJxakDMcRE/edit

```
 - Research Blockchain and Web3 Concepts: Begin by studying the fundamental concepts
of blockchain technology, including decentralized networks, consensus mechanisms, and
smart contracts. Gain a thorough understanding of Web3 technologies, such as Ethereum,
and familiarize myself with the concepts of decentralized applications (dApps) and the
Ethereum Virtual Machine (EVM).

- Learn Solidity and Smart Contract Development

- Explore Metamask and Wallet Integration: Familiarize myself with Metamask and learn
how to integrate it into a mobile/web app for wallet authentication and transaction
signing. Understand the process of connecting to an Ethereum network through Metamask
and interacting with smart contracts.

- Implement Wallet Authentication: Integrate wallet authentication using Metamask or
a similar wallet provider. Enable users to connect their wallets securely and
authenticate their identities within the app.

- Build Simple App Functionality: Maybe buying items using the wallet balance..
(to be decided).

- Test and Debug.

- Deploy the App: Deploy the frontend and backend components of your app.

- Document the Learnings: Create documentation or a report to record the research,
development process, and outcomes.
```

Learning Materials: 

https://books.google.com/books?hl=en&lr=&id=ICSIEAAAQBAJ&oi=fnd&pg=PA4&dq=wallet+web3&ots=zSktb2F8um&sig=HnrhzuaNhYh8W54ZGu2UJ5ZUfME#v=onepage&q=wallet%20web3&f=false

[bitcoin.pdf](https://github.com/zhihuizhang0625/Web3-Independent-Study/files/12268066/bitcoin.pdf)

https://www.sciencedirect.com/science/article/pii/S2352864817302900

https://www.mdpi.com/1999-5903/11/12/258

https://www.sciencedirect.com/science/article/pii/S1319157822000891

[Digitalization_of_Land_Records_From_Pape.pdf](https://github.com/zhihuizhang0625/Web3-Independent-Study/files/12268068/Digitalization_of_Land_Records_From_Pape.pdf)

https://ieeexplore.ieee.org/abstract/document/10110018

## July 3 - July 7

- Research Blockchain and Web3 Concepts:
- virtual currency
- decentralized networks
- consensus mechanisms

### Virtual Currency


<img width="1049" alt="Screenshot 2023-08-02 at 4 55 31 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/46199677-096b-4188-b2b5-33441bf761b7">

<img width="990" alt="Screenshot 2023-08-02 at 7 08 39 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/a56c9576-67f2-487b-bc21-f7dce677638c">

Learning Materials: 

https://arxiv.org/abs/2304.06111

https://link.springer.com/chapter/10.1007/978-981-19-8069-5_1

https://ieeexplore.ieee.org/abstract/document/9428608

https://www.youtube.com/watch?v=aVQJGr2J8io

https://nakamoto.com/introduction-to-cryptocurrency/

https://nakamoto.com/a-brief-history-of-money/

https://nakamoto.com/the-cypherpunks/

### Decentralized Networks & consensus mechanisms
<img width="1180" alt="Screenshot 2023-08-02 at 7 13 00 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/2b2b5178-629e-4903-9d6a-adf2d7ae89c1">

Learning Materials:

https://www.sciencedirect.com/science/article/abs/pii/S0007681322000714

https://www.youtube.com/watch?v=nHhAEkG1y2U

https://aws.amazon.com/blockchain/decentralization-in-blockchain/

https://www.youtube.com/watch?v=JAOrvZgebgs

https://cointelegraph.com/explained/what-are-decentralized-social-networks

[drewscott_gkorpal_web3.pdf](https://github.com/zhihuizhang0625/Web3-Independent-Study/files/12268075/drewscott_gkorpal_web3.pdf)

### Consensus Mechanisms

<img width="659" alt="Screenshot 2023-08-02 at 7 23 27 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/4800b70d-278e-4d87-8fcd-07b63b011dfb">

<img width="644" alt="Screenshot 2023-08-02 at 7 24 19 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/eb9dba6a-3ee4-4589-b8cd-8741dcbf0d03">

<img width="620" alt="Screenshot 2023-08-02 at 7 24 53 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/74efe6f5-10dc-4e1e-83f4-07f6efa70c3c">

Learning Materials:

https://yield.app/blog/A-guide-to-understanding-blockchain-consensus-mechanisms

https://chain.link/education/web3



## July 10 - July 14


- Learn Solidity and Smart Contract Development
- Ethereum Virtual Machine (EVM)

### Solidity

#### State Variables
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract SimpleStorage {
    uint storedData; // State variable
    // ...
}
```

#### Functions
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.1 <0.9.0;

contract SimpleAuction {
    function bid() public payable { // Function
        // ...
    }
}

// Helper function defined outside of a contract
function helper(uint x) pure returns (uint) {
    return x * 2;
}
```
#### Function Modifiers
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Purchase {
    address public seller;

    modifier onlySeller() { // Modifier
        require(
            msg.sender == seller,
            "Only seller can call this."
        );
        _;
    }

    function abort() public view onlySeller { // Modifier usage
        // ...
    }
}
```
#### Events
```// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.21 <0.9.0;

contract SimpleAuction {
    event HighestBidIncreased(address bidder, uint amount); // Event

    function bid() public payable {
        // ...
        emit HighestBidIncreased(msg.sender, msg.value); // Triggering event
    }
}
```
#### Errors
```// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

/// Not enough funds for transfer. Requested `requested`,
/// but only `available` available.
error NotEnoughFunds(uint requested, uint available);

contract Token {
    mapping(address => uint) balances;
    function transfer(address to, uint amount) public {
        uint balance = balances[msg.sender];
        if (balance < amount)
            revert NotEnoughFunds(amount, balance);
        balances[msg.sender] -= amount;
        balances[to] += amount;
        // ...
    }
}
```
#### Struct Types
```// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Ballot {
    struct Voter { // Struct
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }
}
```
#### Enum Types
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Purchase {
    enum State { Created, Locked, Inactive } // Enum
}
```

Learning Materials:

https://link.springer.com/chapter/10.1007/978-981-16-0171-2_52

https://ieeexplore.ieee.org/abstract/document/8500488

https://chain.link/education/smart-contracts

https://www.youtube.com/watch?v=M576WGiDBdQ&t=6s

https://www.youtube.com/watch?v=umepbfKp5rI&t=6s

### Smart Contract

<img width="756" alt="Screenshot 2023-08-02 at 7 29 32 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/19fef714-4951-42ce-990e-b8a415c88798">
<img width="823" alt="Screenshot 2023-08-02 at 7 31 14 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/194291c6-47fb-403e-9c2c-17f76b73729f">
<img width="793" alt="Screenshot 2023-08-02 at 7 31 37 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/c3b54fc9-5804-4554-bcf8-48ee49dd2442">
<img width="765" alt="Screenshot 2023-08-02 at 7 31 59 PM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/93e2cdf2-155b-4d0b-91ab-faf4f4df4f95">

Learning Materials:

https://ieeexplore.ieee.org/abstract/document/10174988

https://www.youtube.com/watch?v=sas02qSFZ74

https://www.sciencedirect.com/topics/computer-science/smart-contract

https://ieeexplore.ieee.org/abstract/document/8976179

https://ieeexplore.ieee.org/abstract/document/8494045

https://www.computerworld.com/article/3412140/whats-a-smart-contract-and-how-does-it-work.html

https://www.geeksforgeeks.org/smart-contracts-in-blockchain/

### Ethereum Virtual Machine

<img width="639" alt="Screenshot 2023-08-04 at 12 27 21 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/f49aff35-d067-4e31-9dc0-c2747850ce40">

<img width="618" alt="Screenshot 2023-08-04 at 12 27 48 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/2d23c4f9-e141-4703-8f65-66cb1a52f388">

Learning Material:

https://github.com/ethereum/py-evm

https://www.geeksforgeeks.org/what-is-ethereum-virtual-machine-and-how-it-works/




## July 17 - July 21

- Explore Metamask and Wallet Integration

<img width="724" alt="Screenshot 2023-08-04 at 1 35 40 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/38f19485-c0e1-4c6b-8e96-704d7dd6e474">

```
const User = sequelize.define('User', {
  nonce: {
    allowNull: false,
    type: Sequelize.INTEGER.UNSIGNED,
    defaultValue: () => Math.floor(Math.random() * 1000000) // Initialize with a random nonce
  },
  publicAddress: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true,
    validate: { isLowercase: true }
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  }
});
```
```
class Login extends Component {
  handleClick = () => {
    // --snip--
    const publicAddress = web3.eth.coinbase.toLowerCase();

    // Check if user with current publicAddress is already present on back end
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users?publicAddress=${publicAddress}`)
      .then(response => response.json())
      // If yes, retrieve it. If no, create it.
      .then(
        users => (users.length ? users[0] : this.handleSignup(publicAddress))
      )
      // --snip--
  };

  handleSignup = publicAddress =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
      body: JSON.stringify({ publicAddress }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json());
}
```
```class Login extends Component {
  handleClick = () => {
    // --snip--
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users?publicAddress=${publicAddress}`)
      .then(response => response.json())
      // If yes, retrieve it. If no, create it.
      .then(
        users => (users.length ? users[0] : this.handleSignup(publicAddress))
      )
      // Popup MetaMask confirmation modal to sign message
      .then(this.handleSignMessage)
      // Send signature to back end on the /auth route
      .then(this.handleAuthenticate)
      // --snip--
  };

  handleSignMessage = ({ publicAddress, nonce }) => {
    return new Promise((resolve, reject) =>
      web3.personal.sign(
        web3.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
        publicAddress,
        (err, signature) => {
          if (err) return reject(err);
          return resolve({ publicAddress, signature });
        }
      )
    );
  };

  handleAuthenticate = ({ publicAddress, signature }) =>
    fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
      body: JSON.stringify({ publicAddress, signature }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json());
}
```

```User.findOne({ where: { publicAddress } })
  // --snip--
  .then(user => {
    const msg = `I am signing my one-time nonce: ${user.nonce}`;

    // We now are in possession of msg, publicAddress and signature. We
    // can perform an elliptic curve signature verification with ecrecover
    const msgBuffer = ethUtil.toBuffer(msg);
    const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
    const signatureBuffer = ethUtil.toBuffer(signature);
    const signatureParams = ethUtil.fromRpcSig(signatureBuffer);
    const publicKey = ethUtil.ecrecover(
      msgHash,
      signatureParams.v,
      signatureParams.r,
      signatureParams.s
    );
    const addressBuffer = ethUtil.publicToAddress(publicKey);
    const address = ethUtil.bufferToHex(addressBuffer);

    // The signature verification is successful if the address found with
    // ecrecover matches the initial publicAddress
    if (address.toLowerCase() === publicAddress.toLowerCase()) {
      return user;
    } else {
      return res
        .status(401)
        .send({ error: 'Signature verification failed' });
    }
  })
```
Or
1. Install the SDK
```
yarn add @metamask/sdk
```
or
```
npm i @metamask/sdk
```
2. Import the SDK
```
import { MetaMaskSDK } from '@metamask/sdk';
```

3. Instantiate the SDK
```
const MMSDK = new MetaMaskSDK(options);

const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
```
4. Use the SDK
```
ethereum.request({ method: 'eth_requestAccounts', params: [] });
```

Or via thirdweb:
```
import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const StateContext = createContext();


export const StateContextProvider = ({ children }) => {
  const { contract, error, loading } = useContract('0xE5338A8E61D86A7CBaD296f38ABab7bb3aE4b58E');
  console.log('Contract:', contract);
  console.log('Error:', error);
  console.log('Loading:', loading);
  console.log(useContract('0xE5338A8E61D86A7CBaD296f38ABab7bb3aE4b58E'));


  const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

  const address = useAddress();
  // const address = `0x34146c2bA7720C22E1Abe63AC8e80AD7c8c8de35`;
  console.log(address)
  const connect = useMetamask();
 
```
Learning Resources:

https://ieeexplore.ieee.org/abstract/document/9993805

https://www.mdpi.com/2076-3417/12/21/11180

https://arxiv.org/abs/2306.08170

https://arxiv.org/abs/2206.08821

https://metamask.io/

https://faucet.quicknode.com/ethereum/goerli

https://www.toptal.com/ethereum/one-click-login-flows-a-metamask-tutorial



## July 24 - July 28
- Followed tutorials to build Simple App Functionality
- Test and Debug

Getting Started:
1. use thirdweb for building backene
``` 
npmx thirdweb@latest create --contract
```
2. choose hardhat framework
3. write functions in solity contract
```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(campaign.deadline < block.timestamp, "The deadline should be a date in the future.");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }

    function searchCampaignByTitle(string memory _title) public view returns (Campaign memory) {
    for (uint256 i = 0; i < numberOfCampaigns; i++) {
        Campaign storage campaign = campaigns[i];
        if (keccak256(bytes(campaign.title)) == keccak256(bytes(_title))) {
            return campaign;
        }
    }
    return Campaign(address(0), "", "", 0, 0, 0, "", new address[](0), new uint256[](0));
}

}

```
4. registered for a metamask account
5. get testing coins from goerlifaucet : https://goerlifaucet.com/
   I used Mumbai in this case
7. copy private key from metamask account
8. config for the network we chose (Mumbai) in hardhat.config.js
```
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

```
8. deploy the backend on thirdweb and check functionalities using the platform
```
npm run deploy
```
9. open the link given by the deploy success message and deploy by connecting to metamask
    account and using test coins
   
Read functions:

<img width="1176" alt="Screenshot 2023-08-04 at 10 11 57 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/7d5e0a0b-7593-4fc8-8b2a-d48022a433f1">

Write functions: 

<img width="1178" alt="Screenshot 2023-08-04 at 10 12 32 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/7294ddc8-7823-4463-bcaf-dd9a96932b31">

10. then navigate to client folder and create react vite app
```
npx thirdweb create --app
```
11. install the extension called "ES7+ React/Redux/React-Native" on visual studio codes
12. build the barebone structure of the frontend using mumbai network
```
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers@5
```

```
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      activeChain="mumbai" 
      clientId="YOUR_CLIENT_ID" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0xE5338A8E61D86A7CBaD296f38ABab7bb3aE4b58E");
}
```

13. add tailwind css to the frontend
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Used Resources: 

https://www.youtube.com/watch?v=BDCT6TYLYdI&list=WL&index=1

https://thirdweb.com/mumbai/0xE5338A8E61D86A7CBaD296f38ABab7bb3aE4b58E/code

https://tailwindcss.com/docs/installation

## July 31 - Aug 4
- Add more functionalities
- Deploy the App

Used Netlify to deploy :

1. ```npm run build```

2. drop the dist files to netlify and deploy the app

<img width="1726" alt="Screenshot 2023-08-04 at 10 28 52 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/b61c6445-117b-4e83-a2db-1364dd38d695">

<img width="1728" alt="Screenshot 2023-08-04 at 10 27 41 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/6e4f422f-a1a9-40cf-97f0-db9f2b9eeb7c">

<img width="1728" alt="Screenshot 2023-08-04 at 10 24 39 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/e2d79a5d-3244-436e-96f0-2c3ee98fa655">
e0a0b-7593-4fc8-8b2a-d48022a433f1">

<img width="1728" alt="Screenshot 2023-08-04 at 10 25 14 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/4b005dd0-72ba-457b-9fc4-17640d0bd4a7">

<img width="1728" alt="Screenshot 2023-08-04 at 10 25 36 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/f9e15a61-f44b-46d9-9513-970d54f6f1d7">

<img width="1728" alt="Screenshot 2023-08-04 at 10 27 02 AM" src="https://github.com/zhihuizhang0625/web3/assets/85580892/792c0c61-6fe5-43e5-be0c-2821dda01bf1">


