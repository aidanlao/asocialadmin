import { useState } from "react";
import BusinessList from "../businesses/businesslist";

export default function BusinessManager() {
    const [currentBusiness, setCurrentBusiness] = useState({});
    return (
        <>
            <div className="businessWrapper">
                <div className="businessCard dynamicmd card flex">
                    <div className="businessSection w30md">
                        <h1>Businesses</h1>
                        <BusinessList currentBusiness={currentBusiness} setCurrentBusiness={setCurrentBusiness} />

                    </div>
                    <div className="editSection w70md">

                    </div>
                </div>
            </div>
        </>
    )
}