import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { FaEthereum } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import BeatLoader from "react-spinners/BeatLoader";
import { uploadFileToIPFS, uploadJSONToIPFS } from '../helpers/index';
import { getContract } from '../constants/index';

const NFTsForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', desc: '', price: 0, file: '' });
  const ethers = require("ethers");

  //This function uploads the NFT image to IPFS
  async function onFileChange(e) {
    var file = e.target.files[0];
    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        toast.success('File uploaded successfully')
        setForm({ ...form, file: response.pinataURL });
      }
    }
    catch (e) {
      toast.error('Failed to upload file')
      console.log("Error during file upload", e);
    }
  }

  async function listNFT(e) {
    e.preventDefault();
    setLoading(true);

    if (form.name === null || form.desc === null || form.price === null || form.file === null)
      return toast.error("Please fill all the field");

    //Upload data to IPFS
    try {
      const metadataURL = await uploadJSONToIPFS(form);

      const price = ethers.utils.parseUnits(form.price, 'ether');

      let Contract = await getContract(window.ethereum);
      let listingPrice = await Contract.getListPrice();

      //actually create the NFT
      let transaction = await Contract.createToken(metadataURL.pinataURL, price, { value: listingPrice.toString() })
      await transaction.wait();

      setForm({ name: null, desc: null, price: null, file: null });
      toast.success("Successfully listed your NFT!");
      setLoading(false);
    }
    catch (e) {
      setLoading(false);
      console.log("Upload error", e)
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
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className='mb-3'>
              <span>NFT Description</span>
              <textarea
                type='text' className='w-100 h-[100px] px-3 py-2 my-2 outline-0 border border-grey'
                value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}></textarea>
            </div>
            <div className='mb-3'>
              <span className='flex items-center'>Price in ETH &nbsp; <FaEthereum /></span>
              <input type='number'
                placeholder='0.0 ETH'
                className='w-100 px-3 py-2 my-2 outline-0 border border-grey'
                value={form.price}
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
              onClick={listNFT}
              className={`btn btn-dark rounded-1 w-100 mb-4 ${loading && 'disabled'}`}>
              {
                loading ? <BeatLoader
                  color="yellow"
                  loading={true}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> : 'Submit'
              }
            </button>
          </div>
        </div>
        <ToastContainer position='top-center' />
      </div>
    </>
  )
}

export default NFTsForm;
