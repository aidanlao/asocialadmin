import { useCollapse } from 'react-collapsed';

export default function Reward(
    { 
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
    }
) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="reward">
            <img src={rewardImage}></img>
            <h2>{rewardCompany}</h2>
            <h3>{rewardDescription}</h3>
            
            <button className="collapseButton"{...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            <div className="collapsible" {...getCollapseProps()}>
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
    )
}