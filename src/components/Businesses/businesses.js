import { useState } from "react";
import BusinessList from "../businesses/businesslist";
import AddBusiness from "./addBusiness";

export default function BusinessManager() {
    const [currentBusiness, setCurrentBusiness] = useState({});
    return (
        <>
            <div className="cardWrapper">
                
            <h1>Business Manager </h1>
                <div className="businessCard dynamicmd card flex">
                    <div className="businessSection w30md ">
                        <BusinessList currentBusiness={currentBusiness} setCurrentBusiness={setCurrentBusiness} />

                    </div>
                    <div className="editSection w70md ">
                        <AddBusiness />
                    </div>
                </div>
            </div>
        </>
    )
}