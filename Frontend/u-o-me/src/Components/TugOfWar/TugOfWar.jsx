import React, { useEffect, useState } from "react"
import ProgressBar from "./ProgressBar"
import { getBalance1,getBalance2 } from "../../handlers/chatHandler";
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
    }, 5000);
    return () => clearInterval(interval);
}, [chat_id]);

  



    return (
    
    <main className="container mx-auto p-4">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Split</h2>
          <ProgressBar value1={b1} value2={b2} />
          <h3> IOU: ${b2-b1}</h3>
          <h3> UOMe: ${(b1-b2)>0? (b1-b2) : (0)}</h3>
        </div>
        </div>
    </main>
  )
}

