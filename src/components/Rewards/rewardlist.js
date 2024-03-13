import { useState } from "react";
import { useRewards } from "../../hooks/rewards"
import Reward from "./reward";
import { useEffect } from "react";
export default function RewardList() {
    const { rewards, isLoading } = useRewards();
    let listItems;
    if (!isLoading) {
        listItems =  rewards?.map((reward)=>{
            const data = reward.data();
            return (
                <Reward {...data}></Reward>
          );})
    }
    
    if (isLoading) {
        return (<p>Loading...</p>)
    } else {
        return (<div className="rewardList">{listItems}</div>)
    }

}

// const collectionSnap = await getDocs(ref);
// collectionSnap.forEach((doc) => {
//     console.log(`${doc.data().rewardCode}`);

//   });