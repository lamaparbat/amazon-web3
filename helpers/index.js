const axios = require('axios');
const FormData = require('form-data');

const key = process.env.NEXT_PUBLIC_PINATA_KEY;
const secret = process.env.NEXT_PUBLIC_PINATA_SECRET;
const pinataFileToIPFSUrl = process.env.NEXT_PUBLIC_PINATA_FILETOIPFS_URL;
const pinataJsonToIPFSUrl = process.env.NEXT_PUBLIC_PINATA_JSONTOIPFS_URL;
const pinataGatewayUrl = process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL;

const uploadJSONToIPFS = async (JSONBody) => {
 //making axios POST request to Pinata ⬇️
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
 const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
 //making axios POST request to Pinata ⬇️

 let data = new FormData();
 data.append('file', file);

 const metadata = JSON.stringify({
  name: 'testname',
  keyvalues: {
   exampleKey: 'exampleValue'
  }
 });
 data.append('pinataMetadata', metadata);

 //pinataOptions are optional
 const pinataOptions = JSON.stringify({
  cidVersion: 0,
  customPinPolicy: {
   regions: [
    {
     id: 'FRA1',
     desiredReplicationCount: 1
    },
    {
     id: 'NYC1',
     desiredReplicationCount: 2
    }
   ]
  }
 });
 data.append('pinataOptions', pinataOptions);

 return axios
  .post(url, data)
  .then(function (response) {
   console.log("image uploaded", response.data.IpfsHash)
   return {
    success: true,
    pinataURL: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
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


export {
 uploadJSONToIPFS,
 uploadFileToIPFS
}