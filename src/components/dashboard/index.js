import { useEffect } from "react";
//import { useAnalytics } from "../../hooks/analytics"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import RewardList from "../Rewards/rewardlist";
import { useBusiness } from "../../hooks/rewards";
import BusinessList from "../businesses/businesslist";
export default function Dashboard() {
    const [currentReward, setCurrentReward] = useState();
    //const { analytics, isLoading } = useAnalytics();
    const [currentBusiness, setCurrentBusiness] = useState("businessID002");
    //const [rewardToAnalyze, setRewardToAnalyze] = useState();
    useEffect(() => {
        console.log(currentBusiness);

        }, [currentBusiness]);
    useEffect(() => {
        console.log(currentReward);
        //setRewardToAnalyze(analytics?.rewards[currentReward?.rewardCode]);
        //console.log(analytics?.rewards.get(currentReward));
    }, [currentReward]);


    return (
        <>
            {true ?
                (
                    <>
                        <div className="dashboardWrapper">
                            <h1>Rewards</h1>
                            <div className="dashboard">
                                <div className="rewardsList">
                                    <h2>Businesses</h2>
                                    <BusinessList setCurrentBusiness={setCurrentBusiness} />
                                </div>
                                <div className="rewards">
                                    {currentBusiness ? (
                                        <>
                                        
                                        <h2>Rewards</h2>
                                    
                                        <RewardList businessid={currentBusiness} />
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