import { Page } from "../components/Page";
import ReviewText from "../components/review/ReviewText";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { Tooltip, Tabs } from "flowbite-react";
import Voting from "../components/review/Voting";
import { useState, useEffect } from "react"

export default function UserPage() {
  const walletAddress = "0x0000000ab702853d1163d38d047fa351fa78e9d3";
  const verifiedHuman = true;
  const followers = 124;
  const following = 138;
  const globalScore = 2000;




  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
   fetch(`http://localhost:8000/user/${walletAddress}`)
    .then((response) => console.log(response.json));
  }, []);
 



  return (
    <Page>
      <div className="flex flex-row mt-6">
        <div className="basis-1/4 ml-10 mt-8 flex flex-col">
          <div>
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
              height="200"
              width="200"
              className="border-4"
            />
          </div>
          <div className="flex items-center">
            <div className="text-lg">degen.lens</div>

            <Tooltip content="Verified human" placement="right">
              {verifiedHuman && (
                <div className="ml-1">
                  <MdVerified color="MediumSlateBlue" />
                </div>
              )}
            </Tooltip>
          </div>
          <div className="text-sm text-violet-500">
            {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          </div>
          <div className='mt-2'>
            <Tooltip content="User reliability" placement="right">
                <p>{globalScore}</p>
                <p className="text-sm text-slate-500">Reputation</p>
            </Tooltip>
          </div>
          <div className="flex mt-2">
            <div className="w-24 flex-none">
              <p>{followers}</p>
              <p className="text-sm text-slate-500">Followers</p>
            </div>
            <div className="flex-1">
              <p>{following}</p>
              <p className="text-sm text-slate-500">Following</p>
            </div>
          </div>
        </div>
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item
            active={true}
            title="Reviews Written"
            icon={BsPencilSquare}
          >
            <div className="basis-3/5 flex-none flex border-2 rounded-xl p-6 m-4">
              <div className="flex-auto mr-5">
                <Voting />
              </div>
              <div className="flex-auto">
                <h1 className="text-3xl mb-5">NFT image</h1>
                <ReviewText />
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Reviews Rated" icon={FaVoteYea}>
            <div className="basis-3/5 flex-none flex border-2 rounded-xl p-6 m-4">
              <div className="flex-auto mr-5">
                <Voting />
              </div>
              <div className="flex-auto">
                <h1 className="text-3xl mb-5">NFT image</h1>
                <ReviewText />
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </Page>
  );
}
