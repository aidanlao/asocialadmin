import { useRewards } from "../../hooks/rewards"
export default function RewardList() {
    const { rewards, isLoading } = useRewards();
    return (
        <>
        {
        rewards.forEach((reward)=> {

            return (<p>{reward.data().rewardCode}</p>)
        })
    }
        </>
        
    )

}

// const collectionSnap = await getDocs(ref);
// collectionSnap.forEach((doc) => {
//     console.log(`${doc.data().rewardCode}`);

//   });