import { useState } from "react";
import { useAddReward } from "../../hooks/rewards"
export default () => {
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

        addReward(formObject);
    }

    return (

        <>
            <div className="rewards">
                <h1>
                    Rewards
                </h1>
                <div className="add-reward">
                    <h2 style={{ marginBottom: 1 + 'em' }}>
                        Add a reward
                    </h2>
                    <form className="rewardform" onSubmit={handleSubmit}>
                        <div style={{width: 100+"%"}}>
                        <label>Business description:</label>
                        <textarea
                            type="text"
                            name="businessDescription"
                            value={inputs.desc}
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
                        <label>Business ID:</label>
                        <input
                            type="text"
                            name="businessID"
                            value={inputs.businessID}
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

                        <input className="submitButton" type="submit" value="Add rewards" />
                    </form>
                </div>
            </div>
        </>
    )
}