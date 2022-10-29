const axios = require('axios');
const FormData = require('form-data');
const { getContract } = require('../constants/index');
const { ethers } = require('ethers');

const key = process.env.NEXT_PUBLIC_PINATA_KEY;
const secret = process.env.NEXT_PUBLIC_PINATA_SECRET;
const pinataFileToIPFSUrl = process.env.NEXT_PUBLIC_PINATA_FILETOIPFS_URL;
const pinataJsonToIPFSUrl = process.env.NEXT_PUBLIC_PINATA_JSONTOIPFS_URL;
const pinataGatewayUrl = process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL;

const uploadJSONToIPFS = async (JSONBody) => {
  //making axios POST request to Pinata ⬇️
  console.log(JSONBody)
  return axios.post(pinataJsonToIPFSUrl, JSONBody, {
    headers: {
      pinata_api_key: key,
      pinata_secret_api_key: secret,
    }
  })
    .then(function (response) {
      return {
        success: true,
        pinataURL: pinataGatewayUrl + response.data.IpfsHash
      };
    })
    .catch(function (error) {
      console.log(error)
      return {
        success: false,
        message: error.message,
      }

    });
};

const uploadFileToIPFS = async (file) => {
  let formData = new FormData();
  formData.append('file', file);
  const headers = {
    'pinata_api_key': `${process.env.NEXT_PUBLIC_PINATA_KEY}`,
    'pinata_secret_api_key': `${process.env.NEXT_PUBLIC_PINATA_SECRET}`
  }

  return fetch(pinataFileToIPFSUrl, {
    method: 'POST',
    body: formData,
    headers: headers,
  }).then((res) => res.json()).then((response) => {
    console.log(response)
    return {
      success: true,
      pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.IpfsHash
    };
  }).catch((error) => {
    return {
      success: false,
      message: error.message,
    }

  });
};

const getAllNFTs = async () => {
  let Contract = await getContract(window.ethereum);
  let transaction = await Contract.getAllNFTs();

  let collections = await Promise.allSettled(transaction.map(async (d) => {
    const tokenURI = await Contract.tokenURI(d.tokenId);
    let description = await axios.get(tokenURI);
    description = description.data;

    let price = ethers.utils.formatUnits(d.price.toString(), 'ether');

    let nftDetails = {
      price,
      tokenId: d.tokenId.toString(),
      seller: d.seller,
      owner: d.owner,
      image: description.file,
      name: description.name,
      description: description.desc
    }
    return nftDetails;
  })).catch(err => console.log(''))
  return collections;
}


export {
  uploadJSONToIPFS,
  uploadFileToIPFS,
  getAllNFTs
}