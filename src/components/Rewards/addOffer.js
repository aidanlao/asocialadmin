import { useAddReward } from "../../hooks/rewards";
import { useEffect, useState } from "react";
export default function AddReward({ triggerUpdate, businessID }) {
    const { addReward, isLoading } = useAddReward();
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());

        addReward({businessID: businessID, ...formObject}, triggerUpdate);
    }

    return (
        <>
        
        <div className="editOffer">
           
            <form className="editRewardForm" onSubmit={handleSubmit}>
            <div className="editRewardFormFields">
            <div className="fullWidth">
            <label>Offer Title</label>
            <input
                type="text"
                name="businessDescription"
                value={inputs.businessDescription}
                onChange={handleChange}
            />
            </div>
            
            <div>
                        <label>Reward Category:</label>
                        <input
                            type="text"
                            name="rewardCategory"
                            value={inputs.rewardCategory}
                            onChange={handleChange}
                        />
                        </div>
                        
                        <div>
                        <label>Reward Expiry Duration:</label>
                        <input
                            type="text"
                            name="rewardExpiryDuration"
                            value={inputs.rewardExpiryDuration}
                            onChange={handleChange}
                        />
                        </div>

                        <div>
                       
                        <label>Reward Description:</label>
                        <input
                            type="text"
                            name="rewardDescription"
                            value={inputs.rewardDescription}
                            onChange={handleChange}
                        />     
                        </div>
                        
                        <div>
                        
                        <label>Reward Cost</label>
                        <input
                            type="number"
                            name="rewardCost"
                            value={inputs.rewardCost}
                            onChange={handleChange}
                        />    
                        </div>
                        
                        <div>
                        <label>Rewards Company:</label>
                        <input
                            type="text"
                            name="rewardCompany"
                            value={inputs.rewardCompany}
                            onChange={handleChange}
                        />   
                        </div>
                        
                        <div>
                           
                        <label>Reward Code:</label>
                        <input
                            type="text"
                            name="rewardCode"
                            value={inputs.rewardCode}
                            onChange={handleChange}
                        />  
                        </div>
                        
                       
                        
                        <div>
                        <label>Reward Address:</label>
                        <input
                            type="text"
                            name="rewardAddress"
                            value={inputs.rewardAddress}
                            onChange={handleChange}
                        />    
                        </div>
                        
                     
                      <div>
                        
                      <label>Reward Image URL:</label>
                        <input
                            type="text"
                            name="rewardImage"
                            value={inputs.rewardImage}
                            onChange={handleChange}
                        />
                      </div>
                      <div>
                        
                        <label>Reward Lat:</label>
                          <input
                              type="text"
                              name="rewardLat"
                              value={inputs.rewardLat}
                              onChange={handleChange}
                          />
                        </div>
                        <div>
                        
                        <label>Reward Lon:</label>
                          <input
                              type="text"
                              name="rewardLon"
                              value={inputs.rewardLon}
                              onChange={handleChange}
                          />
                        </div>
            </div>
           

                        <input className="submitButton" type="submit" value="Add Reward" />
            </form>
        </div>
        </>
    )
}