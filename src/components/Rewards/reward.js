import { useCollapse } from 'react-collapsed';

export default function Reward(
    {   setCurrentReward, setEditMode,
        ...rewardDetails
    }
) {
    const {
        businessDescription, 
        businessID, 
        rewardAddress, 
        rewardCategory, 
        rewardCode, 
        rewardCompany, 
        rewardCost, 
        rewardDescription, 
        rewardExpiryDuration, 
        rewardImage, 
        rewardLat, 
        rewardLon
    } = rewardDetails;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="reward">
            
            <h3>{rewardDescription}</h3>
            
            <button className="collapseButton"{...getToggleProps()}>
                {isExpanded ? '-' : '+'}
            </button>
            <button onClick={()=> {
                setEditMode(true); setCurrentReward(rewardDetails)}}className="viewButton">
            <i className="fa-regular fa-eye"></i>
            </button>
            <div className="rewardContent">
            {/* <h2>{rewardCompany}</h2> */}
            
            <div className="collapsible" {...getCollapseProps()}>
            <div className="collapsibleContent">
            <img src={rewardImage}></img>
            <p>{businessDescription}</p>
            <p>businessID: {businessID}</p>
            <p>Category: {rewardCategory}</p>
            <p>Cost: {rewardCost}</p>
            <p>Expiry: {rewardExpiryDuration}</p>
            <p>Address: {rewardAddress}</p>
            <p>Lat Lon: {rewardLat}, {rewardLon}</p>
            <p>
                Code:  <span className="rewardCode">{rewardCode}</span>
        </p>
            </div>
           
            </div>
           
            </div>
        </div>
    )
}