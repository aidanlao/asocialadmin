import { useEffect } from "react";
//import { useAnalytics } from "../../hooks/analytics"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import AddReward from "../Rewards/addOffer";
import { memo } from "react";
import RewardList from "../Rewards/rewardlist";
import { useBusiness } from "../../hooks/rewards";
import BusinessList from "../businesses/businesslist";
import EditReward from "../Rewards/editOffer";
export default function Dashboard() {
    const [currentReward, setCurrentReward] = useState();
    //const { analytics, isLoading } = useAnalytics();
    const [updateFlag, triggerUpdate ] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [currentBusiness, setCurrentBusiness] = useState({ businessID: "businessID002", name: "Cinnaholic" });
    //const [rewardToAnalyze, setRewardToAnalyze] = useState();
    useEffect(() => {
        // console.log("current business");
        // console.log(currentBusiness.businessID);
        setCurrentReward(null);
        setEditMode(false);
    }, [currentBusiness?.businessID]);
    useEffect(() => {
        //setRewardToAnalyze(analytics?.rewards[currentReward?.rewardCode]);
        //console.log(analytics?.rewards.get(currentReward));
    }, [currentReward]);

    useEffect(()=> {
        console.log(updateFlag);
    },[updateFlag]);

    return (
        <>
            {true ?
                (
                    <>
                        <div className="dashboardWrapper">
                            <h1>Rewards</h1>
                            <div className="dashboard">
                                <div className="businessSection">
                                    <h2>Businesses</h2>
                                    <BusinessList currentBusiness={currentBusiness} setCurrentBusiness={setCurrentBusiness} />
                                </div>
                                <div className="rewardsSection">
                                    {currentBusiness ? (
                                        <>

                                            <h2>{currentBusiness.name}</h2>
                                            <div className="rewardsSectionContent">
                                                <div className="rewardListWrapper">
                                                    <h1>Rewards</h1>
                        
                                                    {editMode ? (<button className="addReward" onClick={()=> { setEditMode(false); setCurrentReward(null);}}>Add Reward +</button>) : (<p>Click the eye icon to edit a reward.</p>)}
                                                    <RewardList currentReward={currentReward}setEditMode={setEditMode}updateFlag={updateFlag}setCurrentReward={setCurrentReward} businessid={currentBusiness.businessID} />

                                                </div>
                                                {
                                                    editMode ? (
                                                        <><div className="editOfferWrapper">
                                                            <h1>Edit Offer Details</h1>
                                                            <EditReward triggerUpdate={triggerUpdate}setEditMode={setEditMode} businessID={currentBusiness.businessID}currentReward={currentReward} />
                                                        </div></>
                                                    ) : (
                                                        <div className="editOfferWrapper"> <h1>Add Reward</h1>
                                                            <AddReward triggerUpdate={triggerUpdate}businessID={currentBusiness.businessID}/>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </>

                                    ) : (
                                        <p>Choose a business</p>
                                    )

                                    }
                                </div>
                            </div>
                        </div>
                    </>




                )
                : (<p>Loading</p>)

            }
        </>
    )
}