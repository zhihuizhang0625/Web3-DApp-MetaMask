import './Profile.css'
import { DisplayCampaigns } from '../components';
import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    console.log(data);
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <div className="flex justify-center items-center p-[16px] sm:min-w-[150px] bg-[#ff99ff] rounded-[30px] p-100">
        <h1 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">Profile</h1>
      </div>

        <DisplayCampaigns 
          title="My Campaigns"
          className="mb-100"
          isLoading={isLoading}
          campaigns={campaigns}
        />
      </div>
  )
}

export default Profile