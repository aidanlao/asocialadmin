import { deleteReward } from "../../hooks/rewards";

export default function DeleteModal({ rewardDescription, setDeleteConfirmation, ...rewardDetails }) {

    function handleDelete() {
        console.log("delete");
        setDeleteConfirmation({ modalOpen: false, deleted: true});
        deleteReward({...rewardDetails}, (message)=> {
            console.log(message);
        })
    }
    return (

        <>
        <div className="deleteModalWrapper">
        <div className="deleteModal">
                <h1>Are you sure you want to delete "{rewardDescription}?"</h1>
                <div className="buttonGroup">
                    <button className="delete"onClick={()=> {handleDelete()}}> Delete Reward</button>
                <button className="cancel" onClick={()=> {setDeleteConfirmation({ modalOpen: false, deleted: false})}}>Cancel Delete</button>
           
                </div>
               </div>
        </div>
            
        </>
    )
}