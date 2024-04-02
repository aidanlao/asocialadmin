import { useState } from "react";
import { useRewards } from "../../hooks/rewards"
import Reward from "./reward";
import { useEffect } from "react";
import { memo } from "react";
const RewardListMemo = memo(function RewardList({ currentReward, setEditMode, updateFlag, setCurrentReward, businessid }) {

    const { rewards, isLoading } = useRewards(businessid, updateFlag);

    let listItems;
    if (!isLoading) {
        listItems =  rewards?.map((reward)=>{
            const data = reward.data();
            var selected = "";
            data.rewardCode == currentReward?.rewardCode ? selected = "selected" : selected = "";
              return (
                <Reward selected={selected}setEditMode={setEditMode}setCurrentReward={setCurrentReward} key={data.rewardCode}{...data}></Reward>
          );})
    }
    
    if (isLoading) {
        return (<p style={{padding: 1+"em"}}>Loading...</p>)
    } else {
        return (<>
        <div className="rewardList">{listItems}</div>
        </>
        )
    }

});

// const collectionSnap = await getDocs(ref);
// collectionSnap.forEach((doc) => {
//     console.log(`${doc.data().rewardCode}`);

//   });

export default RewardListMemo;