import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { uploadFileToIPFS, uploadJSONToIPFS } from '../helpers/index';

const NFTsForm = () => {
  const [form, setForm] = useState({ name: null, desc: null, price: null, file: null });

  //This function uploads the NFT image to IPFS
  async function onFileChange(e) {
    var file = e.target.files[0];
    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        setForm({ ...form, file: response.pinataURL });
      }
    }
    catch (e) {
      console.log("Error during file upload", e);
    }
  }

  const onSubmit = async () => {
    if (form.name === null || form.desc === null || form.price === null || form.file === null)
      return toast.error("Please fill all the field");

    const nftJSON = {
      name, description, price, image: fileURL
    }

    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response)
        return response.pinataURL;
      }
    }
    catch (e) {
      console.log("error uploading JSON metadata:", e)
    }
  }

  async function listNFT(e) {
    e.preventDefault();

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      updateMessage("Please wait.. uploading (upto 5 mins)")

      //Pull the deployed contract instance
      let contract = new ethers.Contract(Marketplace.address, Marketplace.abi, signer)

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, 'ether')
      let listingPrice = await contract.getListPrice()
      listingPrice = listingPrice.toString()

      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, { value: listingPrice })
      await transaction.wait()

      alert("Successfully listed your NFT!");
      updateMessage("");
      updateFormParams({ name: '', description: '', price: '' });
      window.location.replace("/")
    }
    catch (e) {
      alert("Upload error" + e)
    }
  }

  return (
    <>
      <Navbar />
      <div className='py-3 w-100 h-screen bg-slate-100 flex justify-center'>
        <div className='mt-5 p-4 h-fit w-[450px] bg-slate-50 form border border-1 drop-shadow-md rounded-1'>
          <h3 className='text-center font-bungee tracking-[.10em] font-weight-bold mt-2'>Upload new NFT</h3><br />
          <div>
            <div className='mb-3'>
              <span>NFT Name</span>
              <input
                type='text'
                className='w-100 px-3 py-2 my-2 outline-0 border border-grey'
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className='mb-3'>
              <span>NFT Description</span>
              <textarea
                type='text' className='w-100 h-[100px] px-3 py-2 my-2 outline-0 border border-grey'
                onChange={(e) => setForm({ ...form, desc: e.target.value })}></textarea>
            </div>
            <div className='mb-3'>
              <span className='flex items-center'>Price in ETH &nbsp; <FaEthereum /></span>
              <input type='number'
                placeholder='0.0 ETH'
                className='w-100 px-3 py-2 my-2 outline-0 border border-grey'
                onChange={(e) => setForm({ ...form, price: e.target.value })} />
            </div>
            <div className='mb-3'>
              <span className='flex items-center'>Upload NFT &nbsp; <FaEthereum /></span>
              <input
                type='file'
                className='form-control w-100 my-2 outline-0'
                onChange={onFileChange} />
            </div><br />
            <button
              onClick={onSubmit}
              className='btn btn-dark rounded-1 w-100 mb-4'>Submit</button>
          </div>
        </div>
        <ToastContainer position='top-center' />
      </div>
    </>
  )
}

export default NFTsForm;
