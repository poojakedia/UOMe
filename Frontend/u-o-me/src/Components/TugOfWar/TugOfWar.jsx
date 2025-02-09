import React, { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"
import { getBalance1,getBalance2 } from "../../handlers/chatHandler";
import './TugOfWar.css';

export default function Bar({ chat_id }) {
  const [b1, setB1] = useState(0);
  const [b2, setB2] = useState(0);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const balance1 = await getBalance1(chat_id);
        setB1(balance1);

        const balance2 = await getBalance2(chat_id);
        setB2(balance2);
        console.log(balance1, balance2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBalances();
    const interval = setInterval(() => {
      fetchBalances();
    }, 1000);
    return () => clearInterval(interval);
}, [chat_id]);

  



    return (
    
    <main className="tug">
      <div className="space-y-4">
        <div>
          <h2 className="split">Split</h2>
          <div className="split-screen">
            <h3 className="iou"> IOU: ${(b2-b1)>0? (b2-b1) : (0)}</h3>
            <ProgressBar value1={b1} value2={b2} />
            <h3> UOMe: ${(b1-b2)>0? (b1-b2) : (0)}</h3>
          </div>
        </div>
        </div>
    </main>
  )
}

