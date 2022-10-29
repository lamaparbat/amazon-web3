const ethers = require("ethers");

const nftsCollections = [
 { image: 'https://nftcalendar.io/storage/uploads/events/2022/10/wChmeLoRMI1YXjcZcye9eAmdJyUZnEJYFfBumcQP.jpg', name: 'Ninja', price: 12 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/05/fighter_1_10052022020800633ce70074723.png', name: 'Khabib', price: 34 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/23/doodlesgif_1023202211151463552242b100d.gif', name: 'Punk', price: 45 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/23/mergetown_gif_102320220230296354a745cdf9c.gif', name: 'Land', price: 11 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/23/small_ll__10232022145130635554f215e07.png', name: 'Copines', price: 54 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/13/econation_switzerland_keyvisual_101320220940166347dd00984c0.png', name: 'Genisis land', price: 33 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/23/20221014-214447_10232022124712635537d05da01.png', name: 'Pecland', price: 35 },
 { image: 'https://nftcalendar.io/storage/uploads/2022/10/23/photo1663615722_10232022093009635509a12af5d.jpeg', name: 'Raccons', price: 53 },
]

const CONTRACT_ABI = [
 {
  "type": "constructor",
  "payable": false,
  "inputs": []
 },
 {
  "type": "event",
  "anonymous": false,
  "name": "Approval",
  "inputs": [
   {
    "type": "address",
    "name": "owner",
    "indexed": true
   },
   {
    "type": "address",
    "name": "approved",
    "indexed": true
   },
   {
    "type": "uint256",
    "name": "tokenId",
    "indexed": true
   }
  ]
 },
 {
  "type": "event",
  "anonymous": false,
  "name": "ApprovalForAll",
  "inputs": [
   {
    "type": "address",
    "name": "owner",
    "indexed": true
   },
   {
    "type": "address",
    "name": "operator",
    "indexed": true
   },
   {
    "type": "bool",
    "name": "approved",
    "indexed": false
   }
  ]
 },
 {
  "type": "event",
  "anonymous": false,
  "name": "TokenListedSuccess",
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId",
    "indexed": true
   },
   {
    "type": "address",
    "name": "owner",
    "indexed": false
   },
   {
    "type": "address",
    "name": "seller",
    "indexed": false
   },
   {
    "type": "uint256",
    "name": "price",
    "indexed": false
   },
   {
    "type": "bool",
    "name": "currentlyListed",
    "indexed": false
   }
  ]
 },
 {
  "type": "event",
  "anonymous": false,
  "name": "Transfer",
  "inputs": [
   {
    "type": "address",
    "name": "from",
    "indexed": true
   },
   {
    "type": "address",
    "name": "to",
    "indexed": true
   },
   {
    "type": "uint256",
    "name": "tokenId",
    "indexed": true
   }
  ]
 },
 {
  "type": "function",
  "name": "approve",
  "constant": false,
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "to"
   },
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "balanceOf",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "owner"
   }
  ],
  "outputs": [
   {
    "type": "uint256"
   }
  ]
 },
 {
  "type": "function",
  "name": "createToken",
  "constant": false,
  "stateMutability": "payable",
  "payable": true,
  "inputs": [
   {
    "type": "string",
    "name": "tokenURI"
   },
   {
    "type": "uint256",
    "name": "price"
   }
  ],
  "outputs": [
   {
    "type": "uint256"
   }
  ]
 },
 {
  "type": "function",
  "name": "executeSale",
  "constant": false,
  "stateMutability": "payable",
  "payable": true,
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "getAllNFTs",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "tuple[]",
    "components": [
     {
      "type": "uint256",
      "name": "tokenId"
     },
     {
      "type": "address",
      "name": "owner"
     },
     {
      "type": "address",
      "name": "seller"
     },
     {
      "type": "uint256",
      "name": "price"
     },
     {
      "type": "bool",
      "name": "currentlyListed"
     }
    ]
   }
  ]
 },
 {
  "type": "function",
  "name": "getApproved",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": [
   {
    "type": "address"
   }
  ]
 },
 {
  "type": "function",
  "name": "getCurrentToken",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "uint256"
   }
  ]
 },
 {
  "type": "function",
  "name": "getLatestIdToListedToken",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "tuple",
    "components": [
     {
      "type": "uint256",
      "name": "tokenId"
     },
     {
      "type": "address",
      "name": "owner"
     },
     {
      "type": "address",
      "name": "seller"
     },
     {
      "type": "uint256",
      "name": "price"
     },
     {
      "type": "bool",
      "name": "currentlyListed"
     }
    ]
   }
  ]
 },
 {
  "type": "function",
  "name": "getListPrice",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "uint256"
   }
  ]
 },
 {
  "type": "function",
  "name": "getListedTokenForId",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": [
   {
    "type": "tuple",
    "components": [
     {
      "type": "uint256",
      "name": "tokenId"
     },
     {
      "type": "address",
      "name": "owner"
     },
     {
      "type": "address",
      "name": "seller"
     },
     {
      "type": "uint256",
      "name": "price"
     },
     {
      "type": "bool",
      "name": "currentlyListed"
     }
    ]
   }
  ]
 },
 {
  "type": "function",
  "name": "getMyNFTs",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "tuple[]",
    "components": [
     {
      "type": "uint256",
      "name": "tokenId"
     },
     {
      "type": "address",
      "name": "owner"
     },
     {
      "type": "address",
      "name": "seller"
     },
     {
      "type": "uint256",
      "name": "price"
     },
     {
      "type": "bool",
      "name": "currentlyListed"
     }
    ]
   }
  ]
 },
 {
  "type": "function",
  "name": "isApprovedForAll",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "owner"
   },
   {
    "type": "address",
    "name": "operator"
   }
  ],
  "outputs": [
   {
    "type": "bool"
   }
  ]
 },
 {
  "type": "function",
  "name": "name",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "string"
   }
  ]
 },
 {
  "type": "function",
  "name": "ownerOf",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": [
   {
    "type": "address"
   }
  ]
 },
 {
  "type": "function",
  "name": "safeTransferFrom",
  "constant": false,
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "from"
   },
   {
    "type": "address",
    "name": "to"
   },
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "safeTransferFrom",
  "constant": false,
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "from"
   },
   {
    "type": "address",
    "name": "to"
   },
   {
    "type": "uint256",
    "name": "tokenId"
   },
   {
    "type": "bytes",
    "name": "data"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "setApprovalForAll",
  "constant": false,
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "operator"
   },
   {
    "type": "bool",
    "name": "approved"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "supportsInterface",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "bytes4",
    "name": "interfaceId"
   }
  ],
  "outputs": [
   {
    "type": "bool"
   }
  ]
 },
 {
  "type": "function",
  "name": "symbol",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [],
  "outputs": [
   {
    "type": "string"
   }
  ]
 },
 {
  "type": "function",
  "name": "tokenURI",
  "constant": true,
  "stateMutability": "view",
  "payable": false,
  "inputs": [
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": [
   {
    "type": "string"
   }
  ]
 },
 {
  "type": "function",
  "name": "transferFrom",
  "constant": false,
  "payable": false,
  "inputs": [
   {
    "type": "address",
    "name": "from"
   },
   {
    "type": "address",
    "name": "to"
   },
   {
    "type": "uint256",
    "name": "tokenId"
   }
  ],
  "outputs": []
 },
 {
  "type": "function",
  "name": "updateListPrice",
  "constant": false,
  "stateMutability": "payable",
  "payable": true,
  "inputs": [
   {
    "type": "uint256",
    "name": "_listPrice"
   }
  ],
  "outputs": []
 }
]
const CONTRACT_ADDRESS = "0x91961D095E650A7b77540BC5C1C5a7Ffa1554F88";


const getContract = (ethereum) => {
 if (!window?.web3) return;
 const Provider = new ethers.providers.Web3Provider(ethereum);
 const Signer = Provider.getSigner();
 const Contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, Signer);
 return Contract;
}

export {
 nftsCollections,
 getContract
}