import { useCollapse } from 'react-collapsed';

export default function Reward(
    { 
        businessDescription, 
        businesID, 
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
            <p>{businessDescription}</p>
            <p className="rewardCode">{rewardCode}</p>
            <button className="collapseButton"{...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            <div {...getCollapseProps()}>Collapsed Content</div>
        </div>
    )
}